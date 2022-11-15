import React, { useState } from "react";
import { Logo } from "../logo/logo";
import { Navlinks } from "./navlinks/navlinks";
import { Icon } from "@iconify/react";
import menuAlt04 from "@iconify/icons-ci/menu-alt-04";

const Navbar = () => {
  const initialState = false;
  const [mobileMenu, setMobileMenu] = useState(initialState);

  const toggleMobileMenu = () => {
    setMobileMenu(() => !mobileMenu);
  };

  return (
    <>
      <nav className="fixed top-0 bg-white left-0 h-[63px] px-6 py-2 z-[100] flex w-full items-center justify-center shadow-md">
        <div className="flex w-full items-center justify-between">
          <div className="">
            <Logo width={180} height={50} />
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-x-5">
              <Navlinks />
            </div>

            <button
              className="lg:hidden flex"
              onClick={() => toggleMobileMenu()}
            >
              <Icon
                icon={menuAlt04}
                width={36}
                height={36}
                className="text-primary"
              />
            </button>
          </div>
        </div>
      </nav>
      <>
        {mobileMenu && (
          <>
            <div
              className="w-full h-auto lg:hidden z-50 fixed bg-white 
            transition-[.5s] top-[3.9rem] left-0 border-b-4 border-secondary"
            >
              <div className="flex flex-col gap-4 px-6 p-4">
                <Navlinks />
              </div>
            </div>
          </>
        )}
      </>
    </>
  );
};

export { Navbar };
