const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
var students = [
  {
       "id": 1,
      "name": "Shah Khalid",
      "email": "Sham@gmail.com",
      "age":     23,
  },
  {
    "id": 2,
      "name": "Faraaz Khan",
      "email": "Faraaz@gmail.com",
      "age":     22
  },
  {
    "id": 3,
      "name": "Inaam Ulllah",
      "email": "inaam@gmail.com",
      "age":     20,
  },
  {
    "id": 4,
      "name": "Nazia Khan",
      "email": "Naaz@gmail.com",
      "age":     24,
  }


];
const resolvers ={
  Query: {
    students: () =>students,
  },
};
const typeDefs = gql`
type students {
  name: String
  email: String 
  age : Int
  id: Int
}
 
  type Query {
    students: [students]
  }
`;
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});