import { Provider } from "react-redux";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import store from "../app/store";
import Head from "next/head";
import nprogress from "nprogress";
import Router from "next/router";
import { darkTheme } from "../styles/theme";


import "../styles/globals.css";
import "nprogress/nprogress.css";

export const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  credentials: "include",
  cache: new InMemoryCache({
    resultCaching: false,
  }),
});

function MyApp({ Component, pageProps }: AppProps) {

  const startLoading = () => {
    if (typeof window !== "undefined") {
      nprogress.start();
    }
  };
  const stopLoading = () => {
    if (typeof window !== "undefined") {
      nprogress.done();
    }
  };

  useEffect(() => {
    nprogress.configure({ showSpinner: false })
    Router.events.on("routeChangeStart", startLoading)
    Router.events.on("routeChangeComplete", stopLoading);
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }

    return () => {
      Router.events.on("routeChangeStart", startLoading);
      Router.events.on("routeChangeComplete", stopLoading);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Baremetals Tutorial</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={darkTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
