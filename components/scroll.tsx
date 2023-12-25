import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import Cards from "./animCard"
import AnimatedText from "./animText"

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ["70%", "-85%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={targetRef}
      className="relative   hidden md:flex flex-row h-[300vh] bg-neutral-900"
    >
      <motion.div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ opacity }}>
          <AnimatedText
            title="Projects"
            className="text-3xl md:text-6xl font-semibold my-16 text-white"
          />
        </motion.div>
        <motion.div
          style={{ x }}
          className="flex justify-between items-center gap-16"
        >
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
        </motion.div>
      </motion.div>
    </section>
  )
}

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
