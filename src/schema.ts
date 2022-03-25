import { graphql } from 'graphql';
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema } = graphql;

var fakeBookDatabase = [
  { name: 'Book 1', pages: 432, id: 1 },
  { name: 'Book 2', pages: 32, id: 2 },
  { name: 'Book 3', pages: 532, id: 3 },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    pages: { type: GraphQLInt },
  }),
});
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      //argument passed by the user while making the query
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //Here we define how to get data from database source

        //this will return the book with id passed in argument by the user
        // eslint-disable-next-line eqeqeq
        return fakeBookDatabase.find(item => item.id == args.id);
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
});
