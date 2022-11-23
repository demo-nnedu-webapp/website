import Image from "next/legacy/image";
import React from "react";
import Link from "next/link";

export const UiBlog = ({ post }) => {
  return (
    <>
      <Link href={post.uri} passHref legacyBehavior>
        <a
          className="flex flex-col items-center gap-4 w-full shadow-md hover:shadow-accent
             hover:scale-105 duration-500 ease-in-out transition-all"
        >
          {/* <Image
            src={post.featuredImage?.node.sourceUrl}
            className="w-fit h-24"
            width={250}
            height={250}
            decoding="async"
          /> */}
          <div className="bg-white text-primary hover:text-accent p-4 flex flex-col gap-4">
            <div className="flex justify-between gap-4 items-center">
              <h3 className="font-inter w-fit font-semibold text-lg tracking-[0.06em]">
                {post.title}
              </h3>
            </div>
            <article
              className="font-montserrat font-medium tracking-[0.06em]"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            ></article>
            {/* <p className="font-inter w-fit text-sm">{date}</p> */}
          </div>
        </a>
      </Link>
      {/* <div></div> */}
    </>
  );
};
