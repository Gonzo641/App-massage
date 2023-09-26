"use client";

import React from "react"
import Image from "next/image";
import { tarifsData } from "@/lib/data"
import Tarif from "./tarif";
import { useSectionInView } from "@/lib/hooks";

export default function Soins() {

  const { ref } = useSectionInView('Tarifs', 0.5);

  return (
    <section ref={ref} className="w-full py-16 flex flex-col items-center my-16 bg-[#a9b3b2] scroll-mt-12"
             id="tarifs" >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 sm:mx-36 ">
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
        <div>
          <h3 className=" text-center text-black font-bold text-3xl sm:text-4xl py-4 mb-6">
            Tarifs
          </h3>
          <div>
            {
              tarifsData.map((tarif, index) => (
                <React.Fragment key={index}>
                    <Tarif {...tarif} />
                </React.Fragment>
              ))
            }
          </div>
          <p className=" font-semibold text-gray-700 text-center flex justify-center pt-4 italic">
          (Les forfaits sont payables en 2 chèques. Ils sont possible sont cessibles
          et ont une dirée de validité de 1 an à compté du 1er massage)
        </p>
        <p className=" font-semibold text-gray-700 text-center flex justify-center pt-4">
          Tous les prix sont indiqués toutes taxes comprises
        </p>
        </div>  
      </div>
      <div className="flex justify-center pt-8">
        <p className=" font-semibold text-center text-gray-700 pt-4">
            Bon cadeau <span className="text-black">(valable sur une durée de 1an, valeur minimum de 35€) </span>
             prenez soin de vos proches, offrez leur un moment de détente.
        </p>
      </div>
    </section>
  );
};