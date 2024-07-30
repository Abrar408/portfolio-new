import Image from "next/image";
import gitIcon from "../../public/icons/git.png";
import javascriptIcon from "../../public/icons/javascript.png";
import mongodbIcon from "../../public/icons/mongodb.png";
import mysqlIcon from "../../public/icons/mysql.png";
import nestIcon from "../../public/icons/nest.png";
import nextjsIcon from "../../public/icons/nextjs.png";
import reactIcon from "../../public/icons/react.png";
import typescriptIcon from "../../public/icons/typescript.png";
import htmlIcon from "../../public/icons/html.png";

const About = () => {
  return (
    <div className="container flex min-h-[100vh] flex-col items-start justify-center text-white">
      <div className="group">
        <h2 className="-mb-20 text-[140px] font-bold text-white group-hover:-my-10">
          About Me<span className="text-web_red">.</span>
        </h2>
        <p className="mt-10 text-4xl font-semibold">
          {"I'm a software developer who loves creating products for the "}
          <span className="text-web_red">World Wide Web.</span>
        </p>
      </div>
      <div className="flex h-full w-full flex-1 gap-10">
        <div className="h-full flex-[40%]">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            reprehenderit velit sequi officia sint veritatis omnis sapiente
            itaque voluptatibus consequatur!
          </p>
          <h2 className="w-fit rounded-lg bg-web_red p-2 text-2xl font-semibold">
            Tech Stack
          </h2>
          <div className="grid grid-cols-3 place-items-center gap-y-10">
            <Image
              src={javascriptIcon}
              alt="phone icon"
              height={80}
              width={80}
              className="cursor-pointer"
            />
            <Image
              src={typescriptIcon}
              alt="phone icon"
              height={80}
              width={80}
              className="cursor-pointer"
            />
            <Image
              src={gitIcon}
              alt="phone icon"
              height={80}
              width={80}
              className="cursor-pointer"
            />
            <Image
              src={nestIcon}
              alt="phone icon"
              height={80}
              width={80}
              className="h-full cursor-pointer"
            />

            <Image
              src={mongodbIcon}
              alt="phone icon"
              height={80}
              width={80}
              className="cursor-pointer"
            />
            <Image
              src={mysqlIcon}
              alt="phone icon"
              height={80}
              width={80}
              className="h-full cursor-pointer"
            />
            <Image
              src={nextjsIcon}
              alt="phone icon"
              height={80}
              width={80}
              className="cursor-pointer rounded-full bg-white"
            />
            <Image
              src={reactIcon}
              alt="phone icon"
              height={80}
              width={80}
              className="cursor-pointer"
            />
            <Image
              src={htmlIcon}
              alt="phone icon"
              height={60}
              width={60}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="h-full flex-[60%] rounded-lg bg-web_dark_green p-10 text-justify text-2xl">
          <h2 className="mb-10 text-start text-2xl font-semibold">
            Weaving<span className="text-web_red"> Digital Wonders</span>
          </h2>
          <p className="">
            {`Diving headfirst into the world of web development, I've transformed my passion for problem-solving into crafting seamless digital experiences`}
            <span className="text-web_red">.</span>
            {` As a full-stack developer, I'm not just building websites; I'm weaving the fabric of the internet with threads of creativity and innovation`}
            <span className="text-web_red">.</span>
          </p>

          <p className="mt-4">
            {`My unique approach combines a keen eye for design with a deep understanding of technology, enabling me to create solutions that are both beautiful and functional`}
            <span className="text-web_red">.</span>
            {` But my journey doesn't stop at coding—it's about pushing boundaries, staying ahead of the curve, and continuously honing my craft`}
            <span className="text-web_red">.</span>
          </p>

          <p className="mt-4">
            {`Welcome to my digital realm, where every project is a testament to my dedication to turning`}
            <span className="text-web_red"> visions into reality</span>
            {`, one line of code at a time`}
            <span className="text-web_red">.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
