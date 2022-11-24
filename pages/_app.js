import Layout from "../components/layout/layout";
import "../styles/globals.css";
import "antd/dist/antd.min.css";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo";
import useScrollRestoration from "../components/utils/useScrollRestoration";

function MyApp({ Component, pageProps, router }) {
  useScrollRestoration(router)
  return (
    <>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
