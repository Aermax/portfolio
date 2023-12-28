import React from "react"
import AnimatedText from "./animText"

import Cards from "./animCard"
import { HorizontalScrollCarousel } from "./scroll"

const data = [
  {
    Image: "/meditate.jpg",
    logo: "/lotus.png",
    title: "Lazymind Mediatation App",
    link: "https://lazymind-25a7a.web.app/",
    hash: "LhJP.2NKt7s.~BNHNbjYNtNGS2ax"
  },
  {
    Image: "/ecom1.jpg",
    logo: "/ecom.png",
    title: "Eccomerce Website",
    link: "https://aerstore.vercel.app/",
    hash: "LGJa=s009F%N~Vx]00%M?E4otRM{"
  },

  {
    Image: "/logo.png",
    logo: "/logo.png",
    title: "Realtime Online Game",
    link: "https://maxo.netlify.app/",
    hash: "L90r1Df2hfd@g~eUeVf~hffmhegM"
  },
  {
    Image: "/art.webp",
    logo: "/logo2.svg",
    title: "Creata Ultimate AI tool",
    link: "https://creata-ai.vercel.app/",
    hash: "L7ATBC}6m+%i0cE0o#b|~Cv~9Do="
  }
]

const Project = () => {
  return (
    <div className="flex z-0 flex-col items-center justify-center relative bg-neutral-900 top-16">
      <div className="flex flex-col md:hidden justify-between items-center gap-16 ">
        <AnimatedText
          title="Projects"
          className="text-3xl md:text-6xl font-semibold my-16 text-white"
        />
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
      <HorizontalScrollCarousel />
    </div>
  )
}

export default Project
