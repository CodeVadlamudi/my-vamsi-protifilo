import React from 'react';
import { motion } from "framer-motion";

function EducationDiploma() {
  return (
    <article className="flex items-center flex-col rounded-lg space-y-6 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[700px] bg-[#282828] snap-center p-10 cursor-pointer">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        src="/images/profile.jpg"
        alt="educations image"
        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover object-center"
      />

      <div>
        <h4 className="text-3xl">Diploma</h4>
        <ul className="space-y-2 text-lg mt-5 text-gray-400">
          <li>Computer Science and Engineering</li>
          <li>JSS Polytechnic for the Differently Abled</li>
          <li>Mysuru, Karnataka</li>
          <li>2018</li>
        </ul>
      </div>
    </article>
  )
}

export default EducationDiploma