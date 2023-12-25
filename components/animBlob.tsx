"use client"

import { cn } from "../lib/utils"
//bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400
//bg-gradient-to-r from-green-300 via-blue-500 to-purple-600

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedBlobProps {
  className?: string
}

export const AnimatedBlob = ({ className }: AnimatedBlobProps) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMove = (e: any) => {
      setPosition({
        x: e.clientX - 12,
        y: e.clientY - 12
      })
    }

    // const scrollMove = (e: any) => {
    //   setPosition({
    //     x: e.pageX,
    //     y: e.pageY
    //   })
    // }

    window.addEventListener("mousemove", mouseMove)
    // window.addEventListener("scroll", scrollMove)
    console.log(position)
    return () => {
      // removeEventListener("scroll", scrollMove)
      removeEventListener("mousemove", mouseMove)
    }
  }, [position])

  const variants = {
    initial: {
      opacity: 0
    },
    default: {
      x: position.x,
      y: position.y,
      opacity: 1,
      transition: {
        duration: 0.1
      }
    },
    exit: {
      opacity: 0
    }
  }

  return (
    <>
      <motion.div
        variants={variants}
        animate="default"
        id="blob"
        className={cn(
          "z-50 pointer-events-none fixed top-0 left-0 h-[24px] w-[24px] rounded-full bg-gradient-to-r from-orange-300 via-blue-500 to-blue-600",
          className
        )}
      ></motion.div>
      {/* <div className="h-full w-full absolute transform -translate-y-[100%] z-[-1] backdrop-blur-[150px]"></div> */}
    </>
  )
}
