import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4pprolz2g6u01w751nt9mm8/master',
  cache: new InMemoryCache
})