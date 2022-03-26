// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers, typeDefs } from './graphql';
import { connectDatabase } from './database';

const port = process.env.PORT;

const mount = async (app: Application) => {
  const db = await connectDatabase();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  server.start().then(_res => {
    server.applyMiddleware({ app, path: '/api' });
  });
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started at PORT ${port}`);
  });
  const listings = await db.users.find({}).toArray();
  // eslint-disable-next-line no-console
  console.log(listings);

  app.get('/', (_req, res) => {
    res.send('Server Works');
  });
};

mount(express());
