"use client";

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion";
// import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Concept() {

  const { ref } = useSectionInView('Concept');

  return (
    <section className="p-2 flex items-center py-16 scroll-mt-12"
             id="concept"
             ref={ref} >
      <div className="maw-w-[1240px] m-auto md:grid grid-cols-3 gap-8 sm:mx-36">
         <motion.div className="col-span-2"
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.125 }}>
            <h2 className="uppercase text-xl tracking-widest text-red-400">
              Le concept
            </h2>
            <h3 className=" font-bold text-3xl sm:text-4xl py-4">
              Qui suis-je ?
            </h3>
            {/* <SectionHeading>Qui suis-je ?</SectionHeading> */}

            <p className="py-2 sm:text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem 
              deserunt debitis nesciunt animi, nemo optio asperiores ea inventore 
              impedit delectus sunt dicta veritatis recusandae beatae corporis vitae 
              magnam voluptatibus repellat enim unde cupiditate. Temporibus vero qui 
              hic accusamus molestias id.
            </p>
            <p className="py-2 sm:text-lg text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque asperiores 
              cumque a maxime. Aut distinctio doloremque saepe ratione, dignissimos 
              cupiditate placeat, in expedita, praesentium vel alias voluptatum tempore 
              corrupti! Temporibus ducimus officia rerum, magnam sit nam perspiciatis 
              veritatis recusandae odit.
            </p>
            <p className="py-2 sm:text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, et!
            </p>
         </motion.div>
         <motion.div className="w-full h-full shadow-xl shadow-gray-400 rounded-xl
                        flex items-center justify-center p-4 "
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.130 }}>
          <Image 
            src="/massage4.jpg"
            alt="image"
            width={1700}
            height={50}
            quality={95}
            priority={true}
            className="rounded-xl h-full object-cover"/>
         </motion.div>
      </div>
    </section>
  )
}