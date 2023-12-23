"use client"
import Image from "next/image"
import Navbar from "../components/navbar"
import Hero from "../components/Hero"
import AnimatedText from "../components/animText"
import Project from "../components/project"
import Skills from "../components/Skills"
import Footer from "../components/Footer"
import Contact from "../components/contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center relative top-[100px] w-[95%]  h-[100vh] text-center mx-9">
        <Image
          className="rounded-lg object-cover"
          src="/bg2.avif"
          alt="image"
          fill
        />
        <Image
          className="  rotate-180 delay-300 absolute transform  translate-y-32 z-10 "
          src="/arrow.svg"
          width={50}
          height={50}
          alt="img"
          draggable={false}
        />
        {/* <div className="absolute text-[150px] translate-y-32 z-10 font-extrabold transform rotate-90">
          ⌁
        </div> */}
        <div className="hover:text-orange-500 transition-all absolute transform -rotate-90 translate-y-32 translate-x-4 z-10">
          Scroll
        </div>
        <div className="absolute w-full h-full blur-3xl z-1 bg-[rgba(255,255,255,0.1)]"></div>
        <Hero />
      </div>
      <div id="Projects" className="relative top-[100px] ">
        <Project />
      </div>
      <Skills />
      {/* <Contact /> */}
      <Footer />
    </>
  )
}
