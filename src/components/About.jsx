"use client";
import { Highlight } from "./ui/Hero_highlight";

import { GlareCard } from "./ui/Glare_card";

const About = () => {
  return (
    <div className="container flex min-h-[100vh] flex-col items-center justify-center text-white">
      <h2 className="my-20 text-[60px]">About me</h2>
      <div className="space-y-20">
        <GlareCard className="mx-40 p-10 text-2xl">
          <p className="text-justify">
            {`Hello! I'm Abrar, a web developer with a unique journey from electrical engineering to programming. My passion for code ignited during my degree, leading me to shift from circuits to crafting dynamic web experiences.`}
          </p>
        </GlareCard>
        <GlareCard className="mx-40 p-10 text-2xl">
          <p className="text-justify">
            {`With a strong foundation in problem-solving from my engineering background, I approach every project with meticulous attention to detail. My goal is to create seamless, user-friendly websites that not only look great but also provide an exceptional user experience. Let's `}
            <Highlight className="cursor-pointer text-black dark:text-white">
              connect
            </Highlight>
            {` and build something amazing together!`}
          </p>
        </GlareCard>
      </div>
    </div>
  );
};

export default About;
