import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';

import typeDefs from './schema';
import resolvers from './resolvers';

dotenv.config();

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.get('/', (req, res) => { res.send('Hello world'); });

app.listen({ port: 4000 }, () => { console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`); });
