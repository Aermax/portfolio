import React from "react"
import AnimatedText from "./animText"
import Link from "next/link"
import { ModeToggle } from "./darkMode"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter
} from "@/components/ui/drawer"

import { FaBars } from "react-icons/fa"

import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className="z-[50] left-0 fixed top-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-25 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-25 bg-white dark:bg-gray-900 flex items-center justify-between p-4 px-16  gap-3 ">
      <div className="text-3xl font-bold flex gap-1 hover:text-orange-500">
        <AnimatedText
          className="text-3xl font-bold hover:text-orange-500"
          title="SIDDHANT"
        ></AnimatedText>
        <span className="text-4xl font-extrabold transform rotate-90 text-orange-500">
          ⌁
        </span>
      </div>

      <div className="md:flex hidden items-center justify-between text-xl font-semibold gap-3">
        <div>
          <Link scroll className="hover:text-orange-500" href="#about">
            About
          </Link>
        </div>
        <div>
          <Link scroll className="hover:text-orange-500" href="#Projects">
            Projects
          </Link>
        </div>
        <div>
          <Link scroll className="hover:text-orange-500" href="#skills">
            Skills
          </Link>
        </div>
        <div>
          <Link
            scroll
            className="hover:bg-orange-500 transition-colors text-white bg-black dark:bg-white dark:text-black  rounded-md py-2 px-4"
            href="mailto:sidshelke26@gmail.com"
          >
            Contact
          </Link>
        </div>
        <ModeToggle />
      </div>
      <div className="flex gap-2 items-center justify-evenly md:hidden">
        <ModeToggle />
        <div>
          <Link
            scroll
            className="hover:bg-orange-500 transition-colors text-white bg-black dark:bg-white dark:text-black  rounded-md py-2 px-4"
            href="mailto:sidshelke26@gmail.com"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
