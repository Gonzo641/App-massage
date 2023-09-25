"use client";

import React from "react"
import Image from "next/image";
import { soinsData } from "@/lib/data"
import Soin from "./soin";
import { useSectionInView } from "@/lib/hooks";

export default function Soins() {

  const { ref } = useSectionInView('Soins', 0.5);

  return (
    <section ref={ref} className="w-full py-16 flex items-center my-16 bg-red-300 scroll-mt-12"
             id="soins" >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 sm:mx-36 ">
        <div className="w-full h-full m-auto shadow-xl shadow-gray-400 rounded-xl
                        items-center justify-center p-4 bg-white hidden md:block">
          <Image 
              src="/massage4.jpg"
              alt="image"
              width={1700}
              height={50}
              quality={95}
              priority={true}
              className="rounded-xl h-full object-cover"/>
        </div>
        <div className="col-span-2">
          <h3 className=" text-center text-white font-bold text-3xl sm:text-4xl py-4 mb-6">
            Soins
          </h3>
          <div>
            {
              soinsData.map((soin, index) => (
                <React.Fragment key={index}>
                    <Soin {...soin} />
                </React.Fragment>
              ))
            }
          </div>
        </div>  
      </div>
    </section>
  );
};