"use client";
import { Highlight } from "./ui/Hero_highlight";

import { GlareCard } from "./ui/Glare_card";

const About = () => {
  return (
    <div className="container flex min-h-[100vh] flex-col items-start justify-center text-white">
      <div className="group">
        <h2 className="-mb-20 text-[140px] font-bold text-white group-hover:-my-10">
          About Me<span className="text-web_red">.</span>
        </h2>
        <p className="mt-10 text-4xl font-semibold">
          {"I'm a software engineer who loves creating products for the "}
          <span className="text-web_red">World Wide Web.</span>
        </p>
      </div>
      <div className="space-y-10 rounded-lg px-32 py-20">
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
