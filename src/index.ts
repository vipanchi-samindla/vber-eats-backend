import express, { Application } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import bodyParser from 'body-parser';
import { ApolloServer, gql } from 'apollo-server';
import express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const app: Application = express();
const port = process.env.PORT;

const schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
const root = {
  message() {
    console.log('Hello');
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const app = new ApolloServer({ typeDefs, resolvers });
app.use(bodyParser.json());

// app.use(
//   '/graphql',
//   express_graphql({
//     schemaname: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );
// app.get('/', (_req, res) => {
//   res.send('Server Works');
// });
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express GraphQL Server Now Running On localhost:${port} /graphql`);
});
