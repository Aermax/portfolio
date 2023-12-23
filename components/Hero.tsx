"use client"
import React, { useState } from "react"
import AnimatedText from "./animText"

const Hero = () => {
  return (
    <div className="absolute z-10 text-8xl w-full transform -translate-y-32 flex flex-col items-start p-4">
      INTO THE{" "}
      <span className="font-semibold text-orange-500">
        <AnimatedText
          title="INCREDEBLE"
          className="font-semibold text-orange-500"
        />
      </span>
    </div>
  )
}

export default Hero
