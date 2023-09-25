import React from "react"


type SectionHeadingPorps = {
    children: React.ReactNode;
}

export default function SectionHeading({
    children }: SectionHeadingPorps) {
  return (
    <h3 className="text-3xl font-medium 
                   capitalize mb-8 text-center">
        {children}
    </h3>
  )
}