"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Fuggles } from 'next/font/google'

const fuggles = Fuggles({
  subsets: ['latin'],
  weight: "400"
})

export default function Intro() {

  const { ref } = useSectionInView('Home', 0.5);

  return (
    <section
      className={`${fuggles.className} mb-2 sm:mb-0 flex`}
      id="home"
      ref={ref}>

      <div className="relative flex sm:mt-0 mt-10">
        <Image
          src="/perle.jpeg"
          alt="image"
          width={1700}
          height={50}
          quality={95}
          priority={true}
          style={{ maxHeight: '930px'}}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute flex justify-center items-center inset-y-0 inset-x-0">
          <div className="text-center flex flex-col">
            <motion.span className="font-bold px-2 py-2 text-white text-5xl sm:text-8xl"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}>
              Wélina
            </motion.span>
            <motion.span className="font-bold uppercase text-2xl sm:text-4xl text-white sm:mt-8"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}>
              Massage - détente - bien-être
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
