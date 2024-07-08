import Link from "next/link";
import React from "react";
import { FlipWords } from "./ui/Flip_words";

const Navigation = () => {
  const words = [
    "programming is an art 🎨",
    "programming is beautiful 😍",
    "programming gives headaches 😵",
  ];
  return (
    <div className="flex h-12 bg-black py-4 text-lg font-light text-white">
      <div className="flex-1">
        <span className="text-lime">{"< "}</span>
        <FlipWords words={words} className="text-white" />
        <span className="text-lime">{">"}</span>
      </div>
      <div className="flex items-center space-x-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Projects</Link>
        <Link href={"/"}>About</Link>
        <div className="flex h-6 items-center justify-center rounded-xl border-2 border-lime p-4 text-lime">
          <p className="">connect</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
