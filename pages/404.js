import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import fof from "../assets/lf30_editor_qlorvzrr-150x150.gif";

const FourOhFour = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex justify-center items-center py-10 px-6">
      <div className="flex flex-col items-center justify-center">
        <Image src={fof} alt="404" layout="intrinsic" />
        <button onClick={() => router.back()}>back to home clown</button>
      </div>
    </div>
  );
};

export default FourOhFour;
