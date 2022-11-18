import Image from "next/legacy/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Addmisiion from "../../../assets/admisiion.png";
import NNMSboys from "../../../assets/nnmsboys.png";
import NNMS from "../../../assets/nnms.png";
import { PrimaryButton } from "../../customButton/customButton";
import Link from "next/link";

export const UiBlog = () => {
  const dataItems = [
    {
      image: Addmisiion,
      heading: "Addmission",
      excerpt:
        "The underlisted candidates were successful in the Selection Board Interview for JSS 1 ...",
    },
    {
      image: NNMSboys,
      heading: "Successful Candidates",
      excerpt:
        "The underlisted candidates were successful in the Selection Board Interview for JSS 1 ...",
    },
    {
      image: NNMS,
      heading: "NNMS",
      excerpt:
        "The underlisted candidates were successful in the Selection Board Interview for JSS 1 ...",
    },
  ];

  return (
    <>
      {dataItems.map((i, index) => {
        return (
          <div
            className="flex w-full shadow-md bg-white flex-col h-full hover:scale-105 hover:border-b-4 border-secondary ease-in-out 
          duration-500"
            key={index}
          >
            <Link href="/about" passHref legacyBehavior>
              <a>
                <Image
                  src={i.image}
                  alt={i.image.toString()}
                  layout="intrinsic"
                />
                <div className="bg-white px-4 py-6 flex flex-col gap-x-4 gap-y-3">
                  <h3 className="font-mono text-lg tracking-[0.06em] font-semibold text-primary">
                    {i.heading}
                  </h3>
                  <p className="font-montserrat text-base text-primary tracking-[0.06em]">
                    {i.excerpt}
                  </p>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
};
