"use client"

import { cn } from "../lib/utils"
import { useState } from "react"

const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

interface AnimatedTextProps {
  title: string
  className?: string
}

export default function AnimatedText({ title, className }: AnimatedTextProps) {
  const [text, setText] = useState(title)

  const handleMouseOver = (e: any) => {
    let word: string[] = []
    let iteration = 0
    let interval: any
    clearInterval(interval)
    interval = setInterval(() => {
      word = e.target.innerText
        .split("")
        .map((letter: string, index: number) => {
          if (iteration > index) {
            return title[index]
          }
          return letters[Math.floor(Math.random() * letters.length)]
        })

      if (iteration >= title.length) {
        clearInterval(interval)
      }

      iteration += 1 / 3
      setText(word.join(""))
    }, 20)
  }

  return (
    <>
      <h1
        onMouseOver={handleMouseOver}
        className={cn("header-text uppercase text-9xl", className)}
      >
        {text}
      </h1>
    </>
  )
}
