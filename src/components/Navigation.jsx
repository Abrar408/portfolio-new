import Link from "next/link";
import React from "react";
import { FlipWords } from "./ui/Flip_words";

const Navigation = () => {
  const words = ["is an art 🎨", "is beautiful 😍", "gives headaches 😵"];
  return (
    <div className="flex h-12 py-4 text-lg font-light text-white">
      <div className="flex-1">
        {/* <span className="font-bold text-web_red">{"<"}</span> */}
        {/* <div className="flex items-center rounded-xl bg-web_red px-2">
          programming
        </div> */}
        <span className="items-center rounded-lg bg-web_red px-2 pb-1 font-bold leading-[1px]">
          programming
        </span>
        <FlipWords words={words} className="text-white" />
        {/* <span className="font-bold text-web_red">{">"}</span> */}
      </div>
      <div className="flex items-center space-x-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Projects</Link>
        <Link href={"/"}>About</Link>
        <div className="group flex h-6 cursor-pointer items-center justify-center">
          <p className="font-semibold text-web_red">Connect</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
