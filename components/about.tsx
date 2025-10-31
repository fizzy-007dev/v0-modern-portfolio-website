"use client"

import { useEffect, useState } from "react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {[
              "I'm Yuva Aditya V, a fresher Computer Science student at VIT Chennai with a specialization in Artificial Intelligence and Machine Learning. My passion lies in developing AI-driven applications that solve real-world problems.",
              "With a strong foundation in Python programming and problem-solving, I'm continuously exploring emerging technologies in AI, ML, and Data Science. I'm driven by the challenge of building intelligent systems that can learn and adapt.",
              "When I'm not coding, you can find me exploring new ML research papers, contributing to open-source projects, or working on personal projects to sharpen my skills.",
            ].map((text, idx) => (
              <p
                key={idx}
                className={`text-lg text-foreground/75 leading-relaxed transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="space-y-8">
            <div
              className={`p-6 bg-gradient-to-br from-white to-blue-50/50 rounded-xl border border-transparent hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Education
              </h3>
              <p className="text-foreground/70 font-medium">B.Tech in Computer Science (AI & ML)</p>
              <p className="text-primary font-semibold">VIT Chennai</p>
              <p className="text-sm text-foreground/50 mt-2">Fresher</p>
            </div>

            <div
              className={`p-6 bg-gradient-to-br from-white to-accent/10 rounded-xl border border-transparent hover:border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                Focus Areas
              </h3>
              <ul className="space-y-3 text-foreground/70">
                {["Artificial Intelligence", "Machine Learning", "Data Science"].map((item) => (
                  <li key={item} className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                    <span className="w-2.5 h-2.5 bg-gradient-to-br from-primary to-accent rounded-full shadow-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
