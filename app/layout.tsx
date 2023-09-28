import './globals.css'
import type { Metadata } from 'next'
import Header from "@/components/header"
import { Raleway } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'


const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Véronique | Institut',
  description: 'Institut de massage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className='!scroll-smooth'>
      <body className={`${raleway.className} bg-stone-100 
      text-gray-950 relative`}>
        {/* <div className='bg-[#c4b5fd] absolute top-[-6rem] 
        -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] 
        rounded-full blur-[10rem] sm:w-[68.75rem]'>
        </div>
        <div className='bg-[#bfdbfe] absolute top-[-1rem] 
        -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg::left-[-28rem] 
        xl:left-[-15rem] 2xl:left[-5rem]'>
        </div> */}
      
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      
      
      </body>
    </html>
  )
}
