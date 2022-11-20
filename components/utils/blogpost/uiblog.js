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

  const date = new Date().toJSON().slice(0, 10);

  return (
    <>
      {dataItems.map((i, index) => {
        return (
          <Link href="/about" key={index} passHref legacyBehavior>
            <a
              className="flex flex-col gap-4 w-full shadow-md hover:shadow-accent
             hover:scale-105 duration-500 ease-in-out transition-all"
            >
              <Image src={i.image} />
              <div className="bg-white text-primary hover:text-accent p-4 flex flex-col gap-4">
                <div className="flex justify-between gap-4 items-center">
                  <h3 className="font-inter w-fit font-semibold text-xl tracking-[0.06em]">
                    {i.heading}
                  </h3>
                  <p className="font-inter w-fit text-sm">{date}</p>
                </div>
                <p className="font-montserrat text-[15px] font-normal tracking-[0.06em]">
                  {i.excerpt}
                </p>
              </div>
            </a>
          </Link>
        );
      })}
      <div></div>
    </>
  );
};
