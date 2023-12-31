import Concept from "@/components/concept"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Intro from "@/components/intro"
// import Massages from "@/components/massages"
// import Produits from "@/components/produits"
import Salon from "@/components/salon"
import SectionDivider from "@/components/section-divider"
import Skills from "@/components/skills"
import Tarifs from "@/components/tarifs"
import React from "react"


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      {/* <SectionDivider /> */}
      <Concept />
      <SectionDivider />
      <Salon />
      <SectionDivider />
      {/* <Massages /> */}
      <Skills />
      <SectionDivider />
      <Tarifs />
      <SectionDivider />
      {/* <Produits /> */}
      <Contact />
      <Footer />
    </main>
  )
}
