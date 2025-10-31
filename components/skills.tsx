"use client"

import { useEffect, useState } from "react"

const RadialProgress = ({ percentage, skillName }: { percentage: number; skillName: string }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage)
    }, 300)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="flex flex-col items-center gap-4 group">
      <div className="relative w-32 h-32">
        {/* Background circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(15, 23, 42, 0.8)"
            strokeWidth="3"
            className="transition-all duration-300"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out drop-shadow-lg"
            style={{
              filter: `drop-shadow(0 0 8px rgba(0, 217, 255, ${(animatedPercentage / 100) * 0.8}))`,
            }}
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d9ff" />
              <stop offset="50%" stopColor="#ff006e" />
              <stop offset="100%" stopColor="#00d9ff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            {animatedPercentage}%
          </span>
          <span className="text-xs text-slate-400 mt-1">Proficiency</span>
        </div>
      </div>

      {/* Skill name below */}
      <div className="text-center">
        <h3 className="text-base font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors text-pretty">
          {skillName}
        </h3>
      </div>
    </div>
  )
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "Python", level: 90 },
    { name: "MySQL", level: 75 },
    { name: "HTML", level: 70 },
    { name: "Machine Learning", level: 75 },
    { name: "Data Analysis", level: 80 },
    { name: "Problem Solving", level: 85 },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full" />
          <p className="text-lg text-slate-300 mt-4">
            Continuously exploring AI, Machine Learning, and Data Science tools
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <RadialProgress percentage={skill.level} skillName={skill.name} />
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-slate-800/50 rounded-xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all shadow-lg hover:shadow-cyan-500/20">
          <p className="text-slate-300 leading-relaxed text-center">
            Beyond these core skills, I'm also exploring deep learning frameworks, computer vision, NLP, and cloud.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
