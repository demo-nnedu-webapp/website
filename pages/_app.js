import Layout from "../components/layout/layout";
import "../styles/globals.css";
import "antd/dist/antd.min.css";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo";
import useScrollRestoration from "../components/utils/useScrollRestoration";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Chatbot from "react-chatbot-kit";
import config from "../lib/chatbot-config/config";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "../lib/chatbot-config/actionProvider";
import MessageParser from "../lib/chatbot-config/messageParser";

function MyApp({ Component, pageProps, router }) {
  useScrollRestoration(router);
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          //TODO ::: add chatbot feature
          {/* <div className="fixed p-4 bottom-0 right-0">
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          </div> */}
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
