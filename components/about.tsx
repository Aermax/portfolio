"use client"
import React from "react"
import { motion } from "framer-motion"
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInScale
} from "../utils/motion"

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="rounded-md hover:text-transparent transition-all delay-75 p-4  text-left absolute top-1/2 md:left-1/2 transform md:-translate-y-5 left-0  lg:translate-x-64 lg:translate-y-32 text-white text-lg"
    >
      <motion.p variants={slideInFromRight(0.5)}>
        <motion.span className="text-orange-500">Crafting</motion.span> Digital
        Experiences
      </motion.p>
      <motion.p variants={slideInFromRight(1)}>
        Turning <motion.span className="text-orange-500">Pixels</motion.span>{" "}
        into Bridges between Humans
      </motion.p>

      <motion.p variants={slideInFromRight(1.5)}>
        From Concept{" "}
        <motion.span className="text-orange-500">Into </motion.span>
        Code
      </motion.p>
      <motion.p variants={slideInFromRight(2)}>
        Bringing Vision to{" "}
        <motion.span className="text-orange-500">Reality</motion.span>
      </motion.p>
    </motion.div>
  )
}

export default About
