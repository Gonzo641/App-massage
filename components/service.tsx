"use client";

import { useRef } from "react"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { servicesData } from "@/lib/data"


type ServiceProps = (typeof servicesData)[number];


export default function Service({ title, description, price, duration, imageUrl}: ServiceProps) {

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
        <section className="bg-gray-100 max-w-[75rem]
                            lg:h-[22rem] md:h-[30rem] sm:h-[45rem] h-auto
                            border border-black/5
                            overflow-hidden sm:pr-8 rounded-lg
                            hover:bg-gray-200 transition md:mb-12">
            <div className="md:grid grid-cols-3">
                <div className="col-span-2 pt-4 pb-7 px-5 sm:pl-10 
                                sm:pr-2 sm:pt-10">
                    <h3 className="text-2xl font-semibold text-[#272823]">
                        {title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                        {description}
                    </p>
                    <div className="flex flex-wrap mt-4 gap-2">
                        <p className="bg-red-600 px-3 
                                        py-1 text-[0.7rem] uppercase tracking-wider
                                        text-white rounded-full">
                        {price}
                        </p>
                        <p className="bg-red-400 px-3 
                                        py-1 text-[0.7rem] uppercase tracking-wider
                                        text-white rounded-full">
                        {duration}
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                <Image 
                    src={imageUrl} 
                    alt="Massage" 
                    quality={95}
                    className="w-[28.25rem] rounded-xl shadow-2xl"/>
                </div>
            </div>
        </section>
    </motion.div>
  )
}