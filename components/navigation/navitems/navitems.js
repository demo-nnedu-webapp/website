import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { hidedropdown } from "../../../redux";

export const Navitems = () => {
  const dispatch = useDispatch();
  const mm = useSelector((state) => state.locationReducer.dropdownMenu);

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
      link: "https://nnss-dned.netlify.app",
      label: "admissions",
    },
    {
      link: "/#gallery",
      label: "gallery",
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
          <Link href={i.link} key={index} passHref legacyBehavior scroll={true}>
            <a
              className={`${
                router.asPath === i.link
                  ? "text-secondary hover:underline font-medium"
                  : "text-primary"
              } "font-inter font-normal capitalize my-2 lg:my-0 tracking-[0.06em] hover:text-secondary`}
              onClick={() => dispatch(hidedropdown(mm))}
            >
              {i.label}
            </a>
          </Link>
        );
      })}
    </>
  );
};
