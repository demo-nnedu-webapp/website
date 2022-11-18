import React from "react";

export const PrimaryButton = ({ children }) => {
  return (
    <button
      className="bg-secondary w-auto lg:w-fit px-5 py-3 
    rounded-md font-inter tracking-[0.06em] text-base font-medium text-primary
    hover:bg-primary hover:text-white"
    >
      {children}
    </button>
  );
};
