import React from "react"
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo
} from "react-icons/rx"

import { FaMailBulk, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="relative z-100 w-full h-full bg-black text-white shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <a href="https://www.github.com/Aermax">
              <p className="hover:text-orange-500 flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
            </a>

            <a href="https://www.linkedin.com/in/siddhantshelke">
              <p className="hover:text-orange-500 flex flex-row items-center my-[15px] cursor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <a href="https://instagram.com/sidshelke26">
              <p className="hover:text-orange-500 flex flex-row items-center my-[15px] cursor-pointer">
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </a>

            <a href="https://twitter.com/sidshelke26">
              <p className="hover:text-orange-500 flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </p>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaMailBulk />
              <span className="text-[15px] ml-[6px]">Email</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                sidshelke26@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          By Siddhant Shelke
        </div>
      </div>
    </div>
  )
}

export default Footer
