import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 max-w-7xl mx-auto p-5 z-20 xl:items-center flex items-center justify-between">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
      >
        <SocialIcon network="github" fgColor="gray" bgColor="transparent" />
        <SocialIcon network="linkedin" fgColor="gray" bgColor="transparent" />
        <SocialIcon network="instagram" fgColor="gray" bgColor="transparent" />
        <SocialIcon network="snapchat" fgColor="gray" bgColor="transparent" />
        <SocialIcon network="home" />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        className="flex items-center"
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="m-4 text-gray-400 text-md hidden lg:block">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
