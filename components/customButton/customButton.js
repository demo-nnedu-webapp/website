import React from "react";

export const PrimaryButton = ({
  children,
  type,
  onClick,
  className,
  style,
}) => {
  return (
    <button
      className={`${className} bg-secondary w-auto lg:w-fit px-5 py-3 
      rounded-md font-inter tracking-[0.06em] text-base font-medium text-primary
      hover:bg-primary hover:border-secondary hover:border-2 hover:text-white`}
      type={type}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
