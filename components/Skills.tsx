import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data
} from "../constants"
import React from "react"
import SkillDataProvider from "./SkillDataProvider"
import SkillText from "./SkillText"
import AnimatedText from "./animText"

const Skills = () => {
  return (
    <section
      id="skills"
      className="h-[100vh] rounded-lg my-4 text-orange-500 w-full flex flex-col items-center justify-center gap-3 relative overflow-hidden pb-80 py-20 top-[75px]"
      style={{ transform: "scale(0.9" }}
    >
      <AnimatedText
        title="Skills"
        className="text-6xl my-4 font-semibold text-black dark:text-orange-500"
      />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
