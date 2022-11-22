import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import Schools from "../../../../assets/schools.svg";

export const SecondarySchool = () => {
  const schoolData = [
    {
      location: "ojo",
      logo: Schools,
      name: "NNSS",
    },
    {
      location: "abeokuta",
      logo: Schools,
      name: "NNSS",
    },
    {
      location: "calabar",
      logo: Schools,
      name: "NNSS",
    },
    {
      location: "porthacort",
      logo: Schools,
      name: "NNSS",
    },
    {
      location: "ogbomosho",
      logo: Schools,
      name: "NNSS",
    },
    {
      location: "imeri",
      logo: Schools,
      name: "NNSS",
    },
    {
      location: "kuje",
      logo: Schools,
      name: "NNSS",
    },
    {
      location: "okura",
      logo: Schools,
      name: "NNSS",
    },
  ];

  return (
    <div className="mt-6">
      <div
        className="grid grid-cols-2 w-full gap-6 lg:gap-8 
      md:grid-cols-3 justify-items-center place-items-center lg:grid-cols-4"
      >
        {schoolData.map((i, index) => {
          return (
            <div key={index}>
              <div>
                <Image
                  src={i.logo}
                  layout="intrinsic"
                  alt="schoollogo"
                  className="w-auto h-auto"
                  width={150}
                  height={150}
                  priority={100}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3
                  className="text-center font-bold font-inter text-2xl
                 text-primary tracking-[0.06em]"
                >
                  {i.name}
                </h3>
                <p
                  className="text-center font-montserrat uppercase 
                tracking-[0.09em] text-primary font-medium"
                >
                  {i.location}
                </p>
                <Link href="/" key={index} passhref legacyBehavior>
                  <a
                    className="text-center font-montserrat capitalize 
                  tracking-[0.09em] text-accent hover:text-secondary font-semibold"
                  >
                    visit website
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
