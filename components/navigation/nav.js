import { Icon } from "@iconify/react";
import React from "react";
import { Logo } from "../logo/logo";
import { Navitems } from "./navitems/navitems";
import menuAlt04 from "@iconify/icons-ci/menu-alt-04";
import { useDispatch, useSelector } from "react-redux";
import { showdropdown, hidedropdown } from "../../redux";

export const Navbar = () => {
  const mm = useSelector((state) => state.locationReducer.dropdownMenu);
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    if (mm === false) {
      dispatch(showdropdown(mm));
    } else {
      dispatch(hidedropdown(mm));
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 bg-white left-0 h-[63px] 
      px-6 py-2 z-[100] flex w-full items-center justify-center shadow-md"
      >
        <div className="w-full max-w-[70rem]">
          <div className="w-full flex justify-between items-center">
            <div>
              <Logo width={180} height={50} />
            </div>

            <div className="flex gap-4 items-center">
              <div className="hidden lg:flex items-center gap-x-5">
                <Navitems />
              </div>
              <button
                className="lg:hidden flex"
                onClick={() => toggleMobileMenu()}
              >
                <Icon
                  icon={menuAlt04}
                  width={30}
                  height={30}
                  className="text-primary"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <>
        {mm && (
          <>
            <div
              className="w-full h-auto lg:hidden z-50 fixed bg-white 
              transition-[.5s] border-b-4 border-secondary top-[3.9rem] left-0"
            >
              <div className="flex flex-col gap-4 px-6 p-4">
                <Navitems />
              </div>
            </div>
          </>
        )}
      </>
    </>
  );
};
