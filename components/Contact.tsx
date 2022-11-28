import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h-screen relative flex flex-col items-center justify-center"
    >
      <h4 className="absolute top-32 text-2xl uppercase text-gray-500 tracking-[15px]">
        Contact Me
      </h4>

      <form action="!#" className="w-96 space-y-4">
        <input
          type="text"
          className="w-full h-12 pl-5 bg-transparent border border-[#FFA500] outline-none rounded-md"
          placeholder="Your Name"
        />
        <input
          type="text"
          className="w-full h-12 pl-5 bg-transparent border border-[#FFA500] outline-none rounded-md"
          placeholder="Your Place Name"
        />
        <input
          type="email"
          className="w-full h-12 pl-5 bg-transparent border border-[#FFA500] outline-none rounded-md"
          placeholder="Your Email"
        />
        <input
          type="submit"
          className="w-full h-12 bg-[#FFA500] rounded-md text-lg uppercase cursor-pointer"
          value="Submit"
        />
      </form>

      <footer className="absolute bottom-10">
        <Link href="#hero" className="flex flex-row items-center">
          <img
            src="/images/profile.jpg"
            alt=""
            className="w-12 h-12 object-cover rounded-full"
          />{" "}
          <span className="ml-4 text-lg">Vadlamudi Vamsi</span>
        </Link>
      </footer>
    </motion.div>
  );
}

export default Contact;
