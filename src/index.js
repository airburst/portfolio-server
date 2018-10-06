import dotenv from 'dotenv';
import path from 'path';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import jwt from 'jsonwebtoken';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import playground from 'graphql-playground-middleware-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import models from './models';
import seedUser from './models/seedUser';
import { refreshTokens } from './services/auth';
import { version } from '../package.json';
import { PHOTOS_FOLDER } from './constants';
import resolversSet from './resolvers';
import schemaSet from './schema';

dotenv.config();

// eslint-disable-next-line prefer-destructuring
const SECRET = process.env.SECRET;
const SECRET2 = process.env.REFRESH_SECRET;
const wsUri = process.env.SERVER_WS || 'ws://localhost';
const port = process.env.PORT || 3001;

const typeDefs = mergeTypes(schemaSet);
const resolvers = mergeResolvers(resolversSet);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  // TODO: Get auth context
  //  subscriptions: {
  //   onConnect: (connectionParams, webSocket) => {
  //     if (connectionParams) {
  //       // return validateToken(connectionParams.authToken)
  //       //   .then(findUser(connectionParams.authToken))
  //       //   .then(user => ({
  //       //     currentUser: user,
  //       //   }));

  //       // onConnect: async ({ token, refreshToken }, webSocket) => {
  //       //   if (token && refreshToken) {
  //       //     try {
  //       //       const { user } = jwt.verify(token, SECRET);
  //       //       return { models, user };
  //       //     } catch (err) {
  //       //       const newTokens = await refreshTokens(token, refreshToken, models, SECRET, SECRET2);
  //       //       return { models, user: newTokens.user };
  //       //     }
  //       //   }

  //       //   return { models };
  //       // },


  //       return { user: 1 };
  //     }

  //     throw new Error('Missing auth token!');
  //   },
  // },
  // Need to use connection context for subscriptions
  context: ({ req, connection }) => {
    if (connection) {
      // connection.context.x-token
      return {};
    }
    return {
      models,
      user: req.user,
      SECRET,
      SECRET2,
    };
  },
});

const graphqlEndpoint = '/graphql';
const subscriptionsEndpoint = `${wsUri}:${port}${server.subscriptionsPath}`;
const app = express();
const corsOptions = { origin: '*' };

const addUser = async (req, res, next) => {
  const token = req.headers['x-token'];
  if (token) {
    try {
      const { user } = jwt.verify(token, SECRET);
      req.user = user;
    } catch (err) {
      const refreshToken = req.headers['x-refresh-token'];
      const newTokens = await refreshTokens(token, refreshToken, models, SECRET, SECRET2);
      if (newTokens.token && newTokens.refreshToken) {
        res.set('Access-Control-Expose-Headers', 'x-token, x-refresh-token');
        res.set('x-token', newTokens.token);
        res.set('x-refresh-token', newTokens.refreshToken);
      }
      req.user = newTokens.user;
    }
  }
  next();
};

app.use(addUser);
app.use(bodyParser.json({ limit: '4mb' }));
app.use(cors(corsOptions));
app.use(compression());
app.use('/playground', playground({
  endpoint: graphqlEndpoint,
  subscriptionsEndpoint,
}));
app.use('/photos', express.static(path.join(__dirname, '../', PHOTOS_FOLDER)));

server.applyMiddleware({ app });

// Set up subscriptions
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

process.on('SIGINT', () => {
  process.exit(0);
});

// Start the socket and graphQl servers
httpServer.listen({ port }, async () => {
  await models.sequelize.sync();
  await seedUser();
  console.info(`🚀 Portfolio API version ${version} ready`);
  console.info(`🚀 Subscriptions ready at ${subscriptionsEndpoint}`);
});
