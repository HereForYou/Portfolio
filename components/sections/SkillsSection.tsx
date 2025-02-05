import Image from "next/image"
import { Skill, skills } from "../skillsConfit"

const SkillItem = ({ skill }: { skill: Skill }) => {
  return (
    <div
      key={skill.title}
      className="flex items-center justify-start gap-4 dark:text-white text-black rounded-lg bg-gray-100 p-4 hover:cursor-pointer hover:scale-105 transition-all"
    >
      {
        <Image
          src={skill.url || skill.icon}
          alt="skill"
          className="!h-10"
          height={40}
          width={40}
        />
      }
      <span className="text-xl">{skill.title}</span>
    </div>
  )
}

const SkillsSection = () => {
  return (
    <section className="relative h-full bg-white dark:bg-[#161d1f] overflow-hidden py-14 px-10 lg:px-[5%] dark:text-white text-black">
      <h1 className="text-3xl md:text-5xl text-center mb-5 font-bold">
        Skills, Technologies and Tools
      </h1>

      {/* Main Skills */}
      <div className="space-y-2 mb-8">
        <h2 className="text-xl md:text-2xl text-center font-medium">
          Main Stack
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
          {skills
            .filter((item) => item.category === "main")
            .map((skill) => {
              return <SkillItem key={skill.title} skill={skill} />
            })}
        </div>
      </div>

      {/* RPC */}
      <div className="space-y-2 mb-8">
        <h2 className="text-xl md:text-2xl text-center font-medium">
          Solana RPC Providers
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
          {skills
            .filter((item) => item.category === "rpc")
            .map((skill) => {
              return <SkillItem key={skill.title} skill={skill} />
            })}
        </div>
      </div>

      {/* DEXes */}
      <div className="space-y-2 mb-8">
        <h2 className="text-xl md:text-2xl text-center font-medium">DEXes</h2>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
          {skills
            .filter((item) => item.category === "dex")
            .map((skill) => {
              return <SkillItem key={skill.title} skill={skill} />
            })}
        </div>
      </div>

      {/* Programming Languages */}
      <div className="space-y-2 mb-8">
        <h2 className="text-xl md:text-2xl text-center font-medium">
          Programming Languages
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
          {skills
            .filter((item) => item.category === "language")
            .map((skill) => {
              return <SkillItem key={skill.title} skill={skill} />
            })}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
