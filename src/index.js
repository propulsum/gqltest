import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import path from 'path';

import typeDefs from './schemas/schema';
import resolvers from './resolvers/resolvers';

dotenv.config();

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: '/api' });
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../build/rkt')));

const rktPath = path.join(__dirname, '../build/rkt');
app.get('/rkt', (req, res) => {
  res.sendFile(path.join(rktPath, 'rkt.html'));
});

app.listen({ port: 4000 }, () => { console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`); });
