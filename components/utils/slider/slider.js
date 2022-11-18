import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import Image from "next/legacy/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import NNSS from "../../../assets/schools.svg";
import Navy from "../../../assets/navy-logo.png";

import styled from "styled-components";

const CardStyled = styled(Swiper)`
  width: 240px;
  height: 100%;

  &.swiper-3d .swiper-slide-shadow {
    background: transparent;
  }
`;

const HomeSlider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          type: "progressbar",
        }}
      >
        <SwiperSlide>
          <div className="w-full h-[28rem] bg-accent"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[28rem] bg-secondary"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[28rem] bg-primary"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const EstablishmentSwipe = () => {
  return (
    <div>
      <CardStyled
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
      >
        <SwiperSlide>
          <div className="bg-secondary p-6  flex justify-center items-center rounded-md">
            <Image
              src={NNSS}
              alt="nnss schools"
              priority={100}
              layout="intrinsic"
              width={188} 
              height={231}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-accent p-4 flex justify-center items-center rounded-md">
            <Image
              src={Navy}
              alt="nnss schools"
              priority={100}
              layout="intrinsic"
              width={180}
              height={244}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-primary p-4 flex justify-center items-center rounded-md">
            <Image
              src={NNSS}
              alt="nnss schools"
              priority={100}
              layout="intrinsic"
              width={188}
              height={231}
            />
          </div>
        </SwiperSlide>
      </CardStyled>
    </div>
  );
};

export { HomeSlider, EstablishmentSwipe };
