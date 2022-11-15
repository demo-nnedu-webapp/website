import React from "react";
import { Navbar } from "../navigation/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-full min-h-screen w-full">
        <Navbar />
        <main className="mt-16">{children}</main>
      </div>
    </>
  );
};

export { Layout };
