import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Logo } from "../logo/logo";
import { useDispatch, useSelector } from "react-redux";
import { changeLocation } from "../../redux/index";

export const Footer = () => {
  const router = useRouter();

  const schoolTab = useSelector((state) => state.locationReducer.location);

  const dispatch = useDispatch();

  return (
    <>
      <footer className="bg-accent relative px-6 p-4 lg:p-4 flex flex-col gap-8 items-center justify-center h-[58rem] md:h-[28rem]">
        <div className="w-full max-w-[70rem]">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-y-8 lg:gap-4">
            <div className="col-span-2 w-full">
              <Logo width={180} white={true} height={50} />
            </div>
            <div className="col-span-6 grid grid-cols-1 gap-y-8 lg:gap-4 md:grid-cols-4 w-full">
              <div className="flex flex-col gap-y-3 lg:gap-4">
                <h3 className="text-xl font-bold font-inter text-white tracking-[0.06em]">
                  About
                </h3>
                <div>
                  <Link href="/about" passHref legacyBehavior>
                    <a
                      className="font-montserrat tracking-[0.06em] font-normal
                     text-sm text-white hover:text-secondary"
                    >
                      The Directorate
                    </a>
                  </Link>
                </div>
                <div>
                  <Link
                    href="/about#pastdirectors"
                    passHref
                    legacyBehavior
                    scroll={false}
                  >
                    <a
                      className="font-montserrat tracking-[0.06em] font-normal
                     text-sm text-white hover:text-secondary"
                    >
                      Past Directorate
                    </a>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-y-3 lg:gap-4">
                <h3 className="text-xl font-bold font-inter text-white tracking-[0.06em]">
                  Schools
                </h3>
                {/* <div>
                  <Link
                    href={{
                      pathname: "/school",
                      
                    }}
                    passHref
                    legacyBehavior
                  >
                    <a
                      className="font-montserrat tracking-[0.06em] font-normal
                     text-sm text-white hover:text-secondary"
                    >
                      NNPS
                    </a>
                  </Link>
                </div> */}
                <div>
                  <Link href="/" passHref legacyBehavior>
                    <a
                      className="font-montserrat tracking-[0.06em] font-normal
                     text-sm text-white hover:text-secondary"
                    >
                      NNSS
                    </a>
                  </Link>
                </div>
                {/* <div>
                  <Link href="/" passHref legacyBehavior>
                    <a
                      className="font-montserrat tracking-[0.06em] font-normal
                     text-sm text-white hover:text-secondary"
                    >
                      NNMS
                    </a>
                  </Link>
                </div> */}
              </div>

              <div className="flex flex-col gap-y-3 lg:gap-4">
                <h3 className="text-xl font-bold font-inter text-white tracking-[0.06em]">
                  Links
                </h3>
                <div>
                  <Link href="/admission" passHref legacyBehavior>
                    <a
                      className="font-montserrat tracking-[0.06em] font-normal
                     text-sm text-white hover:text-secondary"
                    >
                      Get Form
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="#" passHref legacyBehavior>
                    <a
                      className="font-montserrat tracking-[0.06em] font-normal
                     text-sm text-white hover:text-secondary"
                    >
                      Admissions
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/blog" passHref legacyBehavior>
                    <a
                      className="font-montserrat tracking-[0.06em] font-normal
                     text-sm text-white hover:text-secondary"
                    >
                      Blog
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="#" passHref legacyBehavior>
                    <a
                      className="font-montserrat tracking-[0.06em] font-normal
                     text-sm text-white hover:text-secondary"
                    >
                      Privacy Policy
                    </a>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-y-3 lg:gap-4">
                <h3 className="text-xl font-bold font-inter text-white tracking-[0.06em]">
                  Contact
                </h3>
                <div>
                  <Link href="/contact#map" passHref legacyBehavior>
                    <a
                      className="font-montserrat tracking-[0.06em] font-normal
                     text-sm text-white hover:text-secondary flex flex-col items-start gap-y-2 justify-start"
                    >
                      <Icon
                        icon="material-symbols:location-on-rounded"
                        width={28}
                        height={28}
                      />
                      Directorate of Naval EducationHead Quarters 7th Floor 1-3
                      Moloney Street,Lagos.
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="mailto:contact@nnedu.org" passHref legacyBehavior>
                    <a
                      className="font-montserrat tracking-[0.06em] font-normal
                     text-sm text-white hover:text-secondary"
                    >
                      <Icon
                        icon="material-symbols:mail-rounded"
                        width="28"
                        height="28"
                      />
                      contact@nnedu.org
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[70rem] mt-16 bg-secondary p-4"></div>
      </footer>
    </>
  );
};
