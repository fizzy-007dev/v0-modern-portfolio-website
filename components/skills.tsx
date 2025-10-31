"use client"

import { useEffect, useState } from "react"

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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-lg text-foreground/70 mt-4">
            Continuously exploring AI, Machine Learning, and Data Science tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className={`group space-y-3 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-lg shadow-primary/50 transition-all duration-1000"
                  style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors shadow-lg">
          <p className="text-foreground/70 leading-relaxed text-center">
            Beyond these core skills, I'm also exploring deep learning frameworks, computer vision, NLP, and cloud
            technologies to expand my expertise in AI/ML development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
