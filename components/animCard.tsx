"use client"

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

interface Props {
  src: string
  logo: string
  index: number
  title: string
  link: string
}

const Cards = ({ src, logo, index, title, link }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const animationDelay = 0.5
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Link target="_blank" href={link}>
        <div className="relative w-[300px] h-[500px] rounded-md parent">
          <Image
            className="card-img object-cover rounded-md"
            src={src}
            fill
            alt="skill image"
          />
          <div className="w-[200px] h-[200px] bg-white flex flex-col justify-center rounded-md items-center p-2 child absolute transform top-1/2 left-1/2 -translate-x-[50%]">
            <Image
              className="rounded-md"
              src={logo}
              width={100}
              height={100}
              alt="skill image"
            />
            <div className=" font-semibold p-2 text-center ">{title}</div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default Cards
