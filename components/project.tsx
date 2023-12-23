import React from "react"
import AnimatedText from "./animText"
import Image from "next/image"
import Cards from "./animCard"

const data = [
  {
    Image: "/art.webp",
    logo: "/logo2.svg",
    title: "Creata Ultimate AI tool",
    link: "https://creata-ai.vercel.app/",
    hash: "L7ATBC}6m+%i0cE0o#b|~Cv~9Do="
  },
  {
    Image: "/art2.avif",
    logo: "/lotus.png",
    title: "Lazymind Mediatation App",
    link: "https://lazymind-25a7a.web.app/",
    hash: "LUFFy#WAM|s;_4RjWAoLD%M{WBWB"
  },
  {
    Image: "/logo.png",
    logo: "/logo.png",
    title: "Realtime Online Game",
    link: "https://maxo.netlify.app/",
    hash: "L90r1Df2hfd@g~eUeVf~hffmhegM"
  }
]

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center m-8 ">
      <AnimatedText
        title="Projects"
        className="text-6xl font-semibold my-16 dark:text-orange-500"
      />
      <div className="flex justify-between items-center gap-16">
        {data.map((item, index) => {
          return (
            <Cards
              hash={item.hash}
              key={index}
              logo={item.logo}
              src={item.Image}
              title={item.title}
              link={item.link}
              index={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Project
