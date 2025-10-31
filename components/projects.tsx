"use client"

import { useEffect, useState } from "react"

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "Voice Input AI Assistant",
      description:
        "An intelligent assistant built in Python using APIs to process voice commands and perform automated tasks. Developed and tested in PyCharm.",
      tags: ["Python", "API", "AI"],
      link: "https://github.com/fizzy-007dev",
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full" />
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative rounded-xl overflow-hidden border-2 border-cyan-500/30 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 h-80 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <img
                    src="/images/design-mode/image.png"
                    alt="Voice Assistant Waveform"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent group-hover:to-pink-400 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">{project.description}</p>

                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-slate-800/50 text-cyan-400 font-medium rounded-full text-sm border border-cyan-500/50 hover:border-cyan-400/80 hover:bg-slate-700/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all relative overflow-hidden group/tag"
                      >
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300" />
                        <span className="relative">{tag}</span>
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:translate-y-[-2px] group/link relative overflow-hidden"
                  >
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    <span className="relative">View on GitHub</span>
                    <svg
                      className="w-5 h-5 relative transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-800/50 rounded-xl border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-colors shadow-lg">
          <p className="text-slate-300 mb-4 font-medium">
            More projects coming soon! I'm actively working on exciting AI/ML solutions.
          </p>
          <p className="text-sm text-slate-400">Check my GitHub for the latest updates and contributions.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
