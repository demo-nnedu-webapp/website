import Head from "next/head";
import Image from "next/legacy/image";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import {
  EstablishmentSwipe,
  HomeSlider,
} from "../components/utils/slider/slider";
import { HomeMarquee } from "../components/utils/marqueetext/homeMarquee";
import { PrimaryButton } from "../components/customButton/customButton";
import { UiBlog } from "../components/utils/blogpost/uiblog";
import { FAQ } from "../components/utils/faq/faq";

import CNS from "../assets/cns.png";
import DNED from "../assets/dned.png";
import Navy from "../assets/navy-logo.png";
import { Gallery } from "../components/utils/gallery/gallery";
import { motion, useScroll } from "framer-motion";
import { lazy, Suspense } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

export default function Home({ posts }) {
  const { scrollYProgress } = useScroll();

  const router = useRouter();

  const GalleryAlbum = lazy(() =>
    delayForDemo(import("../components/utils/gallery/gallery"))
  );

  const Loading = (
    <div className="flex items-center justify-center">
      <Icon
        icon="line-md:loading-twotone-loop"
        className="text-primary"
        width="36"
        height="36"
      />
    </div>
  );

  return (
    <div className="bg-white">
      <Head>
        <title>NNEDU | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full items-center justify-center">
        {/* slider */}
        <div className="w-full max-w-[1440px]">
          <HomeSlider />
          <div className="px-6 bg-primary w-full  py-2">
            <HomeMarquee />
          </div>
        </div>
        {/* slider */}

        {/* cns and dned */}
        <div className="w-full flex justify-center my-12">
          <div className="w-full max-w-[1440px]">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-y-2 md:gap-4">
              <div className="p-4 md:col-span-3 flex items-center justify-center flex-col">
                <div className="bg-white flex flex-wrap gap-4 p-4 w-full max-w-lg">
                  <h2
                    className="font-inter text-2xl font-semibold tracking-[0.06em] 
                md:text-left text-center w-full max-w-md capitalize leading-8 text-primary"
                  >
                    Welcome to the{" "}
                    <span className="text-primary">Directorate of Naval</span>{" "}
                    Education
                  </h2>
                  <p className="font-montserrat font-medium text-primary w-full max-w-lg tracking-[0.06em] leading-7 text-center md:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do t tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exer
                  </p>
                </div>
              </div>

              <div className="flex order-first md:order-last items-center md:col-span-2 justify-center md:justify-start">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2,
                    ease: [0, 0.71, 0.2, 1.01],
                    type: "tween",
                    // repeat: 1,
                    // repeatType: "mirror",
                  }}
                >
                  <Image
                    src={CNS}
                    alt="cns"
                    priority={100}
                    width={305}
                    height={423}
                    layout="intrinsic"
                  />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-y-2 md:gap-4">
              <div className="flex items-center col-span-2 justify-center md:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 2.2,
                    ease: [0, 0.71, 0.2, 1.01],
                    type: "spring",
                    // repeat: 1,
                    // repeatType: "reverse",
                  }}
                >
                  <Image
                    src={DNED}
                    alt="cns"
                    priority={100}
                    width={305}
                    height={423}
                    layout="intrinsic"
                  />
                </motion.div>
              </div>

              <div className="p-4 col-span-3 flex items-center justify-center flex-col">
                <div className="bg-white flex flex-wrap gap-4 p-4 w-full max-w-lg">
                  <h2
                    className="font-inter text-2xl font-semibold tracking-[0.06em] 
                md:text-left text-center w-full max-w-md capitalize leading-8 text-primary"
                  >
                    Vision & Goals
                  </h2>
                  <h3 className="capitalize text-center w-full md:text-left font-montserrat tracking-[0.06em] text-lg font-medium">
                    hardwork and discipline
                  </h3>
                  <p className="font-montserrat font-medium w-full max-w-lg tracking-[0.06em] leading-7 text-center md:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do t tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cns and dned */}

        {/* mission */}
        <div className="w-full max-w-[1440px]">
          <div className="bg-accent lg:h-[36rem] flex items-center justify-center">
            <div className="p-4 w-full grid-cols-1 grid md:grid-cols-9">
              <div className="flex items-center justify-center p-3 col-span-2 h-full">
                <Image
                  src={Navy}
                  alt="nigerian-navy"
                  width={55}
                  height={74}
                  priority={100}
                  layout="intrinsic"
                />
              </div>
              <div className="p-3 col-span-5 h-full">
                <div className="flex flex-col gap-4 items-center justify-center p-4">
                  <h2
                    className="font-inter text-2xl md:text-3xl font-bold tracking-[0.06em] 
                text-center w-full capitalize leading-8 text-white"
                  >
                    Mission
                  </h2>
                  <p
                    className="font-montserrat w-full text-white tracking-[0.06em] 
                  leading-[1.8rem] font-medium text-center"
                  >
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center p-3 col-span-2 h-full">
                <Image
                  src={Navy}
                  alt="nigerian-navy"
                  width={55}
                  height={74}
                  priority={100}
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        </div>
        {/* mission */}

        {/* establishment */}
        <div className="w-full flex justify-center mt-10 md:my-16">
          <div className="w-full max-w-[1440px] p-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-2 md:gap-4">
              <div className="col-span-3 p-4 flex items-center justify-center">
                <div className="flex flex-col gap-5">
                  <h2
                    className="font-inter text-2xl md:text-3xl font-bold tracking-[0.06em] 
                text-center lg:text-left w-full lg:max-w-md capitalize leading-8 text-primary"
                  >
                    DNED Establishments
                  </h2>
                  <div className="flex lg:hidden items-center justify-center">
                    <EstablishmentSwipe />
                  </div>
                  <p
                    className="font-montserrat font-medium text-primary 
                  w-full max-w-xl tracking-[0.06em] leading-7 text-center lg:text-left"
                  >
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source.
                  </p>
                  <PrimaryButton onClick={() => router.replace('/school')}>View All</PrimaryButton>
                </div>
              </div>
              <div className="col-span-2 p-4 hidden lg:flex items-center justify-center">
                <EstablishmentSwipe />
              </div>
            </div>
          </div>
        </div>
        {/* establishment */}

        {/* Training support */}
        <div className="w-full flex justify-center py-6">
          <div className="w-full max-w-[1440px] flex justify-center">
            <div className="bg-primary p-4 grid lg:grid-cols-2 w-full">
              <div className="flex justify-center h-full w-full">
                <div className="h-full w-full">
                  <video
                    src="/nnms.mp4"
                    className="w-full h-full"
                    autoPlay={true}
                    loop
                    muted
                    controls={false}
                  />
                </div>
              </div>
              <div className="p-6 md:px-0 md:py-12 h-auto lg:h-[36rem] md:p-0 flex items-center justify-center flex-col">
                <div className="lg:w-3/4 flex flex-col justify-center gap-4">
                  <h2
                    className="text-white font-inter text-2xl md:text-3xl font-bold tracking-[0.06em] 
                lg:text-left text-center w-full lg:max-w-md capitalize leading-8"
                  >
                    Training Support
                  </h2>
                  <p
                    className="font-montserrat font-medium text-white w-full md:max-w-xl
                   tracking-[0.06em] leading-7 text-center lg:text-left"
                  >
                    DNED is a registered training provider with the Nigerian
                    Navy. The company provides training to all levels of
                    personnel within the Nigerian Navy, from entry level to
                    senior officers.
                  </p>
                  <PrimaryButton>Join Now</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Training support */}

        {/* Gallery */}
        <div className="w-full px-6 flex justify-center mt-6" id="gallery">
          <div className="w-full max-w-[1440px]">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[70rem] p-5 flex flex-col gap-4 items-center justify-center">
                <h2
                  className="font-inter text-2xl md:text-3xl font-bold tracking-[0.06em] 
                text-left capitalize leading-8 text-primary w-full"
                >
                  Gallery
                </h2>

                <div className="mt-4 w-full">
                  <Suspense fallback={Loading}>
                    <GalleryAlbum />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery */}

        {/* blog */}
        <div className="w-full flex px-2 py-10 items-center h-full justify-center">
          <div className="w-full max-w-[1440px]">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[70rem] p-5 flex items-center justify-center flex-col">
                <h2
                  className="font-inter text-2xl md:text-3xl font-bold tracking-[0.06em] 
                text-left w-full capitalize leading-8 text-primary"
                >
                  Blog
                </h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-6 w-full h-full">
                  {posts.slice(0, 3).map((post) => {
                    return <UiBlog key={post.uri} post={post} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blog */}

        {/* FAQ */}
        <div className="lg:mt-12 w-full max-w-[1440px]">
          <div className="flex px-6 flex-col py-10 items-center justify-center h-[36rem] md:h-[28rem] bg-secondary">
            <h2
              className="font-inter text-2xl md:text-3xl font-bold tracking-[0.06em] 
                text-center capitalize leading-8 text-primary"
            >
              {" "}
              Frequently Asked Questions
            </h2>
            <div className="mt-8 flex justify-center items-center">
              <FAQ />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function delayForDemo(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return promise;
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          title
          uri
          date
          excerpt
          featuredImage {
            node {
              id
              sourceUrl
              srcSet
            }
          }
        }
      }
    }
  `;

  const res = await client.query({
    query: GET_POSTS,
  });
  console.log(res);

  const posts = res?.data?.posts?.nodes;
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
