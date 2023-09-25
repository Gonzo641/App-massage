"use client";

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion";
import { soinsData } from "@/lib/data"


type SoinsProps = (typeof soinsData)[number];

export default function Soin({ title, description, price, duration}: SoinsProps) {
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1]);
  
  return (
    <motion.div
    ref={ref}
    style={{
        scale: scaleProgress,
        opacity: opacityProgress,
    }}
    className="mb-3 sm:mb-8">

      <section className="max-w-[75rem] sm:h-[10rem] h-[17rem]
                      border border-black/5  sm:pr-8 
                      p-2 rounded-xl pt-6 sm:pt-0 bg-gray-100
                      hover:bg-[rgba(231,210,153,255)] transition relative">
        <h4 className="text-xl text-red-600 font-semibold">
          {title}
        </h4>

        <p className="mt-2 leading-relaxed text-gray-700">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 absolute bottom-2 left-2">
          <p className="bg-red-600 px-3 
                          py-1 text-[0.7rem] uppercase tracking-wider
                          text-white rounded-full">
            Prix: {price}
          </p>

          <p className="bg-red-400 px-3 
                        py-1 text-[0.7rem] uppercase tracking-wider
                        text-white rounded-full">
            Durée: {duration}
          </p>
        </div>

      </section>
    </motion.div>
  )
}