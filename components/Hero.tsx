import Image from "next/image";
import React from "react";
import profileImg from "../public/images/profile.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name's Vadlamudi Vamsi", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  });
  
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden space-y-8">
      <BackgroundCircles />
      <Image
        src={profileImg}
        alt="profile-image"
        className="relative w-52 h-52 rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-lg uppercase text-gray-500 pb-4 tracking-[6px]">
          React Frontend Developer
        </h2>
        <h1 className="text-4xl lg:xl:6xl font-semibold scroll-px-10">
          <span>{text}</span>
          <Cursor cursorColor="#FFA500" />
        </h1>

        <div className="pt-5 space-x-2 sm:space-x-3 md:space-x-4">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#educations">
            <button className="heroButton">Educations</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
