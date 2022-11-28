import React from "react";
import aboutImg from "../public/images/profile.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col items-center z-10 justify-center"
    >
      <h1 className="absolute top-32 tracking-[15px] text-gray-500 uppercase text-2xl font-semibold">
        About
      </h1>
      <div className="flex flex-col items-center justify-evenly mt-16 md:flex-row px-10 md:max-w-4xl mx-auto ">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src="/images/profile.jpg"
          alt="about-image"
          className="w-56 h-56 md:w-64 md:h-72 md:rounded-xl object-cover rounded-full flex-shrink-0 xl:w-[300px] xl:h-[380px]"
        />

        <div className="mt-10 space-y-4 text-center md:pl-10">
          <h4 className="text-2xl font-medium text-center md:text-3xl">
            Here is a{" "}
            <span className="uppercase">
              little
            </span>{" "}
            background
          </h4>
          <p>
            I am Vamsi. I am Deaf 🧏. I live in Andhra Pradesh, India 🏠. I have been learning to ReactJS 📘. I interested to volley ball 🏐, cricket 🏏, coding 💻, football, travel.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
