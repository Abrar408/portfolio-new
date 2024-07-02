import Image from "next/image";
import linkedInIcon from "../../public/icons/linked_in.svg";
import githubIcon from "../../public/icons/github.svg";
import emailIcon from "../../public/icons/email.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex min-h-[calc(100vh-48px)] flex-col-reverse p-10 sm:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-white text-[80px] font-bold">ABRAR ALI</h1>
        <p className="text-white text-[50px]">
          {`full-stack`}
          <span className="font-bold text-lime">/</span>backend engineer
        </p>
        <p className="text-light_gray justify-center text-lg">
          seasoned backend developer with a flair for creating stunning
          frontends.
        </p>
        <div className="flex space-x-9">
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
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-lime"></div>
      </div>
    </div>
  );
};

export default Hero;
