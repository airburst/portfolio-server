import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import playground from 'graphql-playground-middleware-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { version } from '../package.json';
import { UPLOAD_FOLDER } from './constants';

dotenv.config();

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    cookie: req.headers['x-cookie'],
  }),
});

const app = express();
const graphqlEndpoint = '/graphql';
const port = process.env.PORT || 3001;

// Additional middleware can be mounted at this point to run before Apollo
app.use(cors('http://localhost'), bodyParser.json({ limit: '4mb' }));
app.use('/playground', playground({ endpointUrl: graphqlEndpoint }));

// Statically serve files and folders
app.use('/uploads', express.static(path.join(__dirname, '../', UPLOAD_FOLDER)));

server.applyMiddleware({ app });

// process.on('SIGINT', () => {
//   server.close();
//   process.exit(0);
// });

// Start the socket and graphQl servers
app.listen({ port }, () => {
  console.info(`🚀 Portfolio API version ${version} ready`);
});
