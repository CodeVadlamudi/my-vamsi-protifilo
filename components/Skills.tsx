import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="h-screen relative flex flex-col justify-center items-center">
      <h4 className="absolute top-32 text-2xl uppercase text-gray-500 tracking-[15px]">
        Skills
      </h4>
      <div className="flex flex-col space-y-10">
        <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center justify-center space-x-10"
        >
          <img
            src="./images/html.png"
            alt="html logo"
            className="w-20 h-20 object-contain"
          />
          <img
            src="./images/css.png"
            alt="css logo"
            className="w-20 h-20 object-contain"
          />
          <img
            src="./images/bootstrap.png"
            alt="css logo"
            className="w-20 h-20 object-contain"
          />
        </motion.div>

        <motion.div
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
        className="flex items-center justify-center space-x-10">
          <img
            src="./images/tw.png"
            alt="html logo"
            className="w-20 h-20 object-contain"
          />
          <img
            src="./images/react.png"
            alt="css logo"
            className="w-20 h-20 object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
