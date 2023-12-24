"use client"
import Image from "next/image"
import Navbar from "../components/navbar"
import Hero from "../components/Hero"
import AnimatedText from "../components/animText"
import Project from "../components/project"
import Skills from "../components/Skills"
import Footer from "../components/Footer"
import Contact from "../components/contact"
import { Blurhash, BlurhashCanvas } from "react-blurhash"
import NEWIMG from "../components/newImg"
import BlurBG from "../components/blur-bg"
import About from "../components/about"
import { HorizontalScrollCarousel } from "../components/scroll"

const hash = "LaDSOlbxogfR~EawocfkS*bFa$fk"

export default function Home() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex justify-center items-center relative left-0 top-[75px] md:w-[95%]  md:h-[100vh] w-[87%] h-[90vh] text-center mx-9">
          <BlurBG
            hash="LaDSOlbxogfR~EawocfkS*bFa$fk"
            src="/bg2.avif"
            className="rounded-lg object-cover w-full h-full "
          />
          <Image
            className="hidden md:visible  rotate-180 delay-300 absolute transform  translate-y-32 z-10 "
            src="/arrow.svg"
            width={50}
            height={50}
            alt="img"
            draggable={false}
          />
          {/* <div className="absolute text-[150px] translate-y-32 z-10 font-extrabold transform rotate-90">
          ⌁
        </div> */}
          <div className="hidden md:visible  hover:text-orange-500 transition-all absolute transform -rotate-90 translate-y-32 translate-x-4 z-10">
            Scroll
          </div>
          <Hero />
          <About />
        </div>
      </div>
      <div id="Projects" className="relative top-[75px] w-full h-full z-10">
        <Project />
      </div>
      <div id="Projects" className="relative top-[75px] w-full h-full z-10 ">
        <Skills />
      </div>

      {/* <HorizontalScrollCarousel /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  )
}
