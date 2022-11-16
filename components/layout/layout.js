import React from "react";
import { Navbar } from "../navigation/nav";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <main className="mt-16 z-0 w-full relative">{children}</main>
      </div>
    </>
  );
};

export default Layout;
