import { Link } from "@remix-run/react";
import logo from "../../assets/png/dnedlogo.png";
import logoWhite from "../../assets/png/logowhite.png";

export const Logo = ({ width, height, white }) => {
  return (
    <>
      <Link to="/">
        {white ? (
          <img src={logoWhite} alt="dnedlogo" width={width} height={height} />
        ) : (
          <img src={logo} alt="dnedlogo" width={width} height={height} />
        )}
      </Link>
    </>
  );
};
