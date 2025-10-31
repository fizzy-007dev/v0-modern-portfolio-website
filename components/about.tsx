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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full" />
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
                className={`text-lg text-slate-300 leading-relaxed transition-all duration-700 ${
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
              className={`p-6 bg-slate-800/50 rounded-xl border border-cyan-500/30 hover:border-cyan-400/60 shadow-lg hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Education
              </h3>
              <p className="text-slate-300 font-medium">B.Tech in Computer Science (AI & ML)</p>
              <p className="text-cyan-400 font-semibold">VIT Chennai</p>
              <p className="text-sm text-slate-400 mt-2">Fresher</p>
            </div>

            <div
              className={`p-6 bg-slate-800/50 rounded-xl border border-pink-500/30 hover:border-pink-400/60 shadow-lg hover:shadow-pink-500/20 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Focus Areas
              </h3>
              <ul className="space-y-3 text-slate-300">
                {["Artificial Intelligence", "Machine Learning", "Data Science"].map((item) => (
                  <li key={item} className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                    <span className="w-2.5 h-2.5 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full shadow-sm shadow-cyan-400" />
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
