"use client";

import React from "react"
import { skillsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";


const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

export default function Skills() {

    const { ref } = useSectionInView('Massages');

  return (
    <section ref={ref} id="massages" className="mb-20 scroll-mt-28 text-center">
        <h3 className="font-bold text-3xl text-center sm:text-4xl py-4 sm:pb-12">
        Massages
        </h3>
        <ul className="flex flex-wrap justify-center
        gap-2 text-lg text-gray-800">
            {skillsData.map((skill, index) => (
                <motion.li className="bg-white borderBlack
                rounded-xl px-5 py-3" 
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                  }}
                custom={index}
                >{skill}
                </motion.li>
            ))}
        </ul>
        <p className=" font-semibold text-gray-500 flex justify-center pt-4 italic">
          (Tous les soins apportés, sont des techniques traditionelles de relaxation 
          qui ne présentent aucun caractère médical, sexuel ou érotique)
        </p>
    </section>
  )
}