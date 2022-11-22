import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const SocialMedia = () => {
  const socialmediaData = [
    {
      link: "/",
      label: "Facebook",
      icon: <Icon icon="ant-design:facebook-filled" width="28" height="28" />,
    },
    {
      link: "/",
      label: "Instagram",
      icon: <Icon icon="ant-design:instagram-filled" width="28" height="28" />,
    },
    {
      link: "/",
      label: "Twitter",
      icon: (
        <Icon icon="ant-design:twitter-circle-filled" width="28" height="28" />
      ),
    },
  ];
  return (
    <>
      {socialmediaData.map((i, index) => {
        return (
          <div key={index}>
            <Link href={i.link} passHref legacyBehavior>
              <a
                className="flex items-center gap-x-2 text-primary
               font-montserrat tracking-[0.06em] hover:text-secondary font-medium"
              >
                {i.icon}
                {i.label}
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export { SocialMedia };
