"use client"
import React, { useState } from "react"
import AnimatedText from "./animText"

const Hero = () => {
  return (
    <div className=" absolute z-10 md:text-8xl text-4xl w-full transform -translate-y-32 flex flex-col items-start p-4">
      Ideas into{" "}
      <span className="font-semibold text-orange-500">
        <AnimatedText
          title="Reality"
          className="uppercase font-semibold text-orange-500 text-8xl md:text-8xl"
        />
      </span>
    </div>
  )
}

export default Hero
