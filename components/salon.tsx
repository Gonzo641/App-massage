"use client";

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Salon() {

  const { ref } = useSectionInView('Salon');

  return (
    <section ref={ref} className="w-full md:h-screen p-2 flex items-center pt-16 sm:pt-0 bg-[#a9b3b2] my-16"
             id="salon" >
    <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 sm:mx-36 ">
        <motion.div className="w-full h-full shadow-xl shadow-gray-400 rounded-xl
                        flex items-center justify-center p-4 bg-white"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.130 }}>
            <Image 
            src="/massage6.jpg"
            alt="image"
            width={1700}
            height={50}
            quality={95}
            priority={true}
            className="rounded-xl h-full object-cover"/>
       </motion.div>
       <motion.div className="col-span-2"
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.125 }}>
          <h3 className=" font-bold text-3xl sm:text-4xl py-4 text-black mt-10 sm:mt-0">
            Le Salon
          </h3>

          <p className="py-2 sm:text-lg text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem 
            deserunt debitis nesciunt animi, nemo optio asperiores ea inventore 
            impedit delectus sunt dicta veritatis recusandae beatae corporis vitae 
            magnam voluptatibus repellat enim unde cupiditate. Temporibus vero qui 
            hic accusamus molestias id.
          </p>
          <p className="py-2 sm:text-lg text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque asperiores 
            cumque a maxime. Aut distinctio doloremque saepe ratione, dignissimos 
            cupiditate placeat, in expedita, praesentium vel alias voluptatum tempore 
            corrupti! Temporibus ducimus officia rerum, magnam sit nam perspiciatis 
            veritatis recusandae odit.
          </p>
          <p className="py-2 sm:text-lg text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, et!
          </p>
          <p className="py-2 sm:text-lg text-black font-bold">
            Rendez-vous par mail via l'espace Contact ou par téléphone
          </p>
          <p className="py-2 sm:text-lg text-black font-bold">
            Abélard Véronique 06.81.81.39.92
          </p>
          <p className="py-2 sm:text-lg text-black font-bold">
            Adresse: 62 avenue d'Espagne 64600 Anglet
          </p>
       </motion.div>
    </div>
  </section>
  )
}