import React from "react";
import Marquee from "react-easy-marquee";
import styled from "styled-components";

const StyledMarquee = styled(Marquee)`
  cursor: pointer;
  height: 30rem;
`;

export const HomeMarquee = () => {
  return (
    <div className="border-l-4 border-r-4 border-secondary">
      <StyledMarquee duration={20000} reverse={true} pauseOnHover={true} height={40}>
        <p className="font-montserrat text-white tracking-[0.06em] font-normal">
          UPDATE: JSS One students of Nigerian Navy Military School Ikot Ntuen
          are to resume on 25 September 2022... NNMS 2022/2023 ADMISSIONS LIST
          NOW OUT
        </p>
      </StyledMarquee>
    </div>
  );
};
