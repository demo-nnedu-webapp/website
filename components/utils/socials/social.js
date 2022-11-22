import Link from "next/link";
import React from "react";

const SocialMedia = () => {
  const socialmediaData = [
    {
      link: "/",
      label: "Facebook",
      icon: "",
    },
    {
      link: "/",
      label: "Instagram",
      icon: "",
    },
    {
      link: "/",
      label: "Twitter",
      icon: "",
    },
  ];
  return (
    <>
      {socialmediaData.map((i, index) => {
        return (
          <div key={index}>
            <Link href={i.link} passHref legacyBehavior>
              <a className="flex items-center gap-4">{i.icon}{i.label}</a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export { SocialMedia };
