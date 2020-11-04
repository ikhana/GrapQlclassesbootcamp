import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000', //we need to have that adresss where our server is online so in my case it is localhost 4000
  cache: new InMemoryCache()
});


export default client;