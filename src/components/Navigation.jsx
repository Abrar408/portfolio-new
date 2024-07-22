import Link from "next/link";
import React from "react";
import { FlipWords } from "./ui/Flip_words";

const Navigation = () => {
  const words = ["is an art 🎨", "is beautiful 😍", "gives headaches 😵"];
  return (
    <div className="flex h-12 py-4 text-lg font-light text-white">
      <div className="flex-1">
        <span className="text-white">{"<"}</span>
        <span className="text-web_green"> programming</span>
        <FlipWords words={words} className="text-white" />
        <span className="text-white">{">"}</span>
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
