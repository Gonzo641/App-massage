"use client";

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion";
import { tarifsData } from "@/lib/data"
import SectionDivider from "./section-divider";


type TarifsProps = (typeof tarifsData)[number];

export default function Tarif({ title, price}: TarifsProps) {
  
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

      <section className="max-w-[75rem] h-auto flex justify-between
                      flex-col lg:flex-row items-center
                      border border-black/5
                      p-2 rounded-xl pt-2 bg-gray-100
                      hover:bg-gray-200 transition relative">
        <h4 className="text-[#272823] font-semibold
                      flex items-center">
          {title}
        </h4>
        <motion.div
                className="bg-[#c6ad46] h-1 w-[15rem] hidden 2xl:block rounded-full"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}>
        </motion.div>
        <p className="px-3 sm:px-0 flex items-center text-red-600 font-bold
                        py-1 text-[0.7rem] uppercase tracking-wider">
          Prix: {price}
        </p>
      </section>
    </motion.div>
  )
}





// "use client";

// import { useRef } from "react"
// import { motion, useScroll, useTransform } from "framer-motion";
// import { tarifsData } from "@/lib/data"


// type TarifsProps = (typeof tarifsData)[number];

// export default function Tarif({ title, price}: TarifsProps) {
  
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//       target: ref,
//       offset: ["0 1", "1.33 1"]
//   });

//   const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1]);
//   const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1]);
  
//   return (
//     <motion.div
//     ref={ref}
//     style={{
//         scale: scaleProgress,
//         opacity: opacityProgress,
//     }}
//     className="mb-3 sm:mb-8">

//       <section className="max-w-[75rem] sm:h-[10rem] h-[17rem]
//                       border border-black/5  sm:pr-8 
//                       p-2 rounded-xl pt-6 sm:pt-0 bg-gray-100
//                       hover:bg-gray-200 transition relative">
//         <h4 className="text-xl text-[#272823] font-semibold">
//           {title}
//         </h4>

//         {/* <p className="mt-2 leading-relaxed text-gray-700">
//           {description}
//         </p> */}
        
//         <div className="flex flex-wrap gap-2 absolute bottom-2 left-2">
//           <p className="bg-red-600 px-3 
//                           py-1 text-[0.7rem] uppercase tracking-wider
//                           text-white rounded-full">
//             Prix: {price}
//           </p>

//           {/* <p className="bg-red-400 px-3 
//                         py-1 text-[0.7rem] uppercase tracking-wider
//                         text-white rounded-full">
//             Durée: {duration}
//           </p> */}
//         </div>

//       </section>
//     </motion.div>
//   )
// }