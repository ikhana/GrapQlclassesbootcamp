import './App.css';
import client from "../configuraton/gqlconfigure";
import { ApolloProvider } from '@apollo/client';
import Students from "./students";

function App() {
  return (
    <ApolloProvider client={client}>
      <Students/>
    </ApolloProvider>
  );
}

export default App;
