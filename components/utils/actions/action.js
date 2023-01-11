import { Icon } from "@iconify/react";
import { Dropdown } from "antd";
import Link from "next/link";
import React from "react";

export const Action = () => {
  const items = [
    {
      label: (
        <Link
          className="font-inter font-medium capitalize my-2 lg:my-0 tracking-[0.06em] text-primary"
          href="/buyform"
        >
          buy form
        </Link>
      ),
      key: "0",
    },
  ];

  return (
    <>
      <div
        className="fixed bottom-[7%] p-2 rounded-full bg-secondary shadow-md
         hover:bg-primary flex items-center justify-center right-10 w-auto z-50"
      >
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
          placement="topRight"
          arrow={true}
          overlayClassName="mb-16"
        >
          <a
            onClick={(e) => e.preventDefault()}
            className="text-primary text-3xl flex items-center hover:text-secondary"
          >
            <Icon icon="mdi:interaction-double-tap" className="" />
            <p className="text-base">Actions</p>
          </a>
        </Dropdown>
      </div>
    </>
  );
};
