"use client"

import { cn } from "../lib/utils"
//bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400
//bg-gradient-to-r from-green-300 via-blue-500 to-purple-600

import { motion } from "framer-motion"
import { FaArrowUp } from "react-icons/fa"
import { useEffect, useState } from "react"

interface AnimatedBlobProps {
  className?: string
}

export const AnimatedBlob = ({ className }: AnimatedBlobProps) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    interacting: false
  })

  useEffect(() => {
    const mouseMove = (e: any) => {
      const interactable = e.target.closest(".interactable")
      const interacting = interactable !== null
      setPosition({
        x: e.clientX - 12,
        y: e.clientY - 12,
        interacting: interacting
      })
    }

    window.addEventListener("mousemove", mouseMove)
    console.log(position)
    return () => {
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
      scale: position.interacting ? 4 : 1,
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
          "z-50 flex items-center justify-center  pointer-events-none fixed top-0 left-0 h-[24px] w-[24px] rounded-full  bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500",
          className
        )}
      >
        <motion.div
          id="trailer-icon"
          className={cn(
            "relative transform rotate-45 text-black dark:text-white",
            position.interacting ? "opacity-1" : "opacity-0"
          )}
        >
          <FaArrowUp />
        </motion.div>
      </motion.div>
      {/* <div className="h-full w-full fixed transform -translate-y-[100%] z-[-1] backdrop-blur-[150px]"></div> */}
    </>
  )
}
