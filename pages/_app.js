import Layout from "../components/layout/layout";
import "../styles/globals.css";
import "antd/dist/antd.min.css";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo";
import useScrollRestoration from "../components/utils/useScrollRestoration";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "react-chatbot-kit/build/main.css";

function MyApp({ Component, pageProps, router }) {
  useScrollRestoration(router);
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
