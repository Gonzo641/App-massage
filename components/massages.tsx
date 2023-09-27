// "use client";

// import React from "react"
// import { servicesData } from "@/lib/data"
// import Service from "./service";
// import { useSectionInView } from "@/lib/hooks";

// export default function Massages() {

//   const { ref } = useSectionInView('Massages', 0.5);

//   return (
//     <section ref={ref} id="massages" className="scroll-mt-20">
//       <h3 className="font-bold text-3xl text-center sm:text-4xl py-4 sm:pb-12 last:pb-8">
//         Massages
//       </h3>
//       <div>
//         {
//           servicesData.map((service, index) => (
//             <React.Fragment key={index}>
//                 <Service {...service} />
//             </React.Fragment>
//           ))
//         }
//       </div>
//     </section>
//   );
// };

