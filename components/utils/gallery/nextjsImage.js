import React from "react";
import Image from "next/legacy/image";

const NextJsImage = ({
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
}) => (
  <div style={wrapperStyle}>
    <div
      style={{
        display: "block",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        layout="fill"
        src={src}
        alt={alt}
        title={title}
        sizes={sizes}
        // width={500}
        // height={300}
        className={`${className} cursor-pointer`}
        onClick={onClick}
      />
    </div>
  </div>
);

export default NextJsImage;
