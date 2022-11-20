import React from "react";
import { Footer } from "../footer/footer";
import { Navbar } from "../navigation/nav";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <main className="mt-16 z-0 w-full relative">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
