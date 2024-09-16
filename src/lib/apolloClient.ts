import { useMemo } from "react";
import { ApolloClient, InMemoryCache, NormalizedCacheObject, split } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from "apollo-upload-client";

let apolloClient: ApolloClient<NormalizedCacheObject>;
// const GRAPHQL_URL = "http://localhost:8000/graphql";
// const WS_URL = "ws://localhost:8000/subscriptions";
const GRAPHQL_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:8000/graphql";
const WS_URL =
  process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8000/subscriptions";
// console.log(WS_URL);
// console.log(GRAPHQL_URL);

// const httpLink = new HttpLink({
//   uri: GRAPHQL_URL,
//   credentials: "include",
// });

const httpLink = createUploadLink({
  uri: GRAPHQL_URL,
  credentials: "include",
});

const wsLink: any = process.browser
    ? new WebSocketLink({
  uri: WS_URL as string,
  options: {
    reconnect: true,
  },
  
}): null;

const splitLink = process.browser
    ?split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    ): httpLink


function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: splitLink,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: null | undefined) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: null | undefined) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
