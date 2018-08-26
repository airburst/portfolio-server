import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import playground from 'graphql-playground-middleware-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import models from './models';
import seed from './models/seed';
import { version } from '../package.json';
import { PHOTOS_FOLDER } from './constants';

dotenv.config();

const clearAndSeedDb = process.env.NODE_ENV === 'development';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    models,
    cookie: req.headers['x-cookie'],
  }),
});

const graphqlEndpoint = '/graphql';
const port = process.env.PORT || 3001;
const app = express();
const corsOptions = {
  origin: ['http://localhost'],
  credentials: true,
};

app.use(bodyParser.json({ limit: '4mb' }));
app.use(cors(corsOptions));
app.use('/playground', playground({ endpointUrl: graphqlEndpoint }));
app.use('/photos', express.static(path.join(__dirname, '../', PHOTOS_FOLDER)));

server.applyMiddleware({ app });

process.on('SIGINT', () => {
  process.exit(0);
});

// Start the socket and graphQl servers
app.listen({ port }, async () => {
  await models.sequelize.sync({ force: clearAndSeedDb });
  if (clearAndSeedDb) { await seed(); }
  console.info(`🚀 Portfolio API version ${version} ready`);
});
