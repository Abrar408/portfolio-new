import Image from "next/image";
import profilePicture from "../../public/profile/pic_8.png";

import { WobbleCard } from "./ui/Wobble_card";

const Hero = () => {
  return (
    <div className="flex min-h-[calc(100vh-48px)] flex-col-reverse p-10 sm:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-[110px] font-bold text-web_red group-hover:-my-10">
          ABRAR ALI
        </h1>
        <p className="text-3xl font-semibold uppercase text-white">
          full
          <span className="font-bold text-web_red">-</span>stack developer
        </p>
        <p className="justify-center text-lg text-web_light_gray">
          seasoned backend developer with a flair for creating stunning
          frontend.
        </p>
        {/* <div className="mt-2 flex space-x-9">
          <Link href={"/"}>
            <Image
              src={linkedInIcon}
              alt="linked-in logo"
              height={30}
              width={30}
              className="cursor-pointer"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={githubIcon}
              alt="github logo"
              height={30}
              width={30}
              className="cursor-pointer"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={emailIcon}
              alt="email icon"
              height={30}
              width={30}
              className="cursor-pointer"
            />
          </Link>
        </div> */}
      </div>
      <div className="flex flex-1 items-center justify-center">
        <WobbleCard>
          <Image
            src={profilePicture}
            alt="profile picture"
            // height={3000}
            // width={3000}
            fill={true}
            className="mt-6 scale-x-[-1.8] transform cursor-pointer"
            priority={true}
          />
        </WobbleCard>
      </div>
    </div>
  );
};

export default Hero;
