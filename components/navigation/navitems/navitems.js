import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const Navitems = () => {
  const items = [
    {
      link: "/about",
      label: "the directorate",
    },
    {
      link: "/school",
      label: "schools",
    },
    {
      link: "#",
      label: "admissions",
      subItems: [
        {
          link: "/check",
          label: "check schools admission",
        },
      ],
    },
    {
      link: "/#gallery",
      label: "gallery"
    },
    {
      link: "/blog",
      label: "blog",
    },
    {
      link: "/contact",
      label: "contact",
    },
  ];

  const router = useRouter();

  return (
    <>
      {items.map((i, index) => {
        return (
          <Link href={i.link} key={index} passHref legacyBehavior>
            <a
              className={`${
                router.asPath === i.link
                  ? "text-secondary hover:underline font-medium"
                  : "text-primary"
              } "font-inter font-normal capitalize my-2 lg:my-0 tracking-[0.06em] hover:text-[#dec918]`}
            >
              {i.label}
            </a>
          </Link>
        );
      })}
    </>
  );
};
