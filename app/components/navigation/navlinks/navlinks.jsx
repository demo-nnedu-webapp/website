import { Link } from "@remix-run/react";
import React from "react";

export const Navlinks = () => {
  const items = [
    {
      link: "/thedirectorate",
      label: "the directorate",
    },
    {
      link: "/school",
      label: "schools",
    },
    {
      link: "#",
      label: "admissions",
    },
    {
      link: "/blog",
      label: "blog",
    },
    {
      link: "#",
      label: "contact",
    },
  ];

  return (
    <>
      {items.map((i, index) => {
        return (
          <Link to={i.link} key={index} className="w-fit">
            {i.label}
          </Link>
        );
      })}
    </>
  );
};
