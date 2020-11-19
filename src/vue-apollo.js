import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import {IntrospectionFragmentMatcher} from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';
const fragmentMatcher = new IntrospectionFragmentMatcher({
introspectionQueryResultData
});

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.VUE_APP_GRAPHQL_URL || "http://192.168.0.233:1337/graphql"
});

// Cache implementation
const cache = new InMemoryCache({fragmentMatcher});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

export default apolloClient;


