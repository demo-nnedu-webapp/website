import Head from "next/head";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

export default function SlugPage({ post }) {
  return (
    <div className="bg-accent">
      <Head>
        <title>NNEDU | Blog</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <div className="flex flex-col items-center h-full justify-center">
        <div className="w-full px-6 py-10 text-white border-b-8 border-secondary max-w-[1440px] h-full">
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-[70rem] p-4 flex flex-col gap-4">
              <h1 className="text-4xl text-white font-bold font-inter tracking-[0.06em] capitalize">
                {post.title}
              </h1>
              <article
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="font-medium font-montserrat tracking-[0.06em]"
              ></article>
              {/* <p>
            ✍️ &nbsp;&nbsp;
            {`${post.author.node.firstName} ${post.author.node.lastName}`} | 🗓️
            &nbsp;&nbsp;{new Date(post.date).toLocaleDateString()}
          </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    query GetPostByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        content
        date
        uri
      }
    }
  `;

  const res = await client.query({
    query: GET_POST_BY_URI,
    variables: {
      id: params.uri,
    },
  });

  const post = res?.data?.post;
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
