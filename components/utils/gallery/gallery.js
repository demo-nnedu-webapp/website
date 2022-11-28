import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import NextJsImage from "./nextjsImage";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import { PrimaryButton } from "../../customButton/customButton";
import { gsap } from "gsap";

export const Gallery = () => {
  const app = useRef();
  const photos = [
    {
      src: "/1.jpeg",
      width: 800,
      height: 450,
    },
    {
      src: "/2.jpeg",
      width: 800,
      height: 450,
    },
    {
      src: "/3.png",
      width: 800,
      height: 450,
    },
    {
      src: "/4.jpeg",
      width: 800,
      height: 450,
    },
  ];

  const [index, setIndex] = useState(-1);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const photo = photos.slice(0, 3);
    setImages(photo);

    // const ctx = gsap.context(() => {
    //   // Target the two specific elements we have asigned the animate class
    //   gsap.timeline({
    //     paused: true,
    //     defaults: {
    //       duration: 3,
    //     }
    //   }).from("animate", {
    //     x: 0,
    //     opacity: 0
    //   }).to("animate", {
    //     x: 50,
    //     opacity: 100
    //   })
    // }, app); 

    // return () => ctx.revert();
  }, []);


  const slides = images.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }));

  return (
    <>
      <PhotoAlbum
        targetRowHeight={150}
        layout="masonry"
        photos={images}
        renderPhoto={NextJsImage}
        onClick={(event, photo, index) => setIndex(index)}
      />
      <div className="mt-8">
        <PrimaryButton onClick={() => setImages(photos)}>
          Load more
        </PrimaryButton>
      </div>
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
};
