import React from "react";
import Head from "next/head";
import MapNNEDU from "../components/utils/map/map";
import { SocialMedia } from "../components/utils/socials/social";
import { ContactForm } from "../components/utils/form/contactform";

const Contact = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>NNEDU | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full items-center justify-center">
        {/* map component */}
        <div id="map" className="h-[30rem] relative w-full">
          <MapNNEDU />
        </div>
        {/* map component */}

        <div className="w-full max-w-[1440px] z-50">
          <div className="px-4 py-8 lg:p-4 bg-white w-full flex items-center justify-center">
            <div className="w-full max-w-[70rem] p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-4">
                <div className="flex flex-col gap-4">
                  <SocialMedia />
                </div>
              </div>
              <div className=" bg-white flex flex-col gap-4 justify-center">
                <h2 className="text-2xl text-primary font-semibold tracking-[0.06em]">
                  Send us a mail
                </h2>
                <div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
