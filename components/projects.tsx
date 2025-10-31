"use client"

import Image from "next/image"
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
      image: "/voice-assistant-ai-interface-microphone.jpg",
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
    >
      <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
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
                <div className="relative rounded-xl overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={project.image || "/placeholder.svg?height=300&width=400&query=AI%20voice%20assistant"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent group-hover:to-accent transition-all">
                    {project.title}
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed">{project.description}</p>

                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-foreground font-medium rounded-full text-sm border border-primary/20 hover:border-primary/50 hover:from-primary/20 hover:to-accent/20 transition-all hover:shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all hover:translate-y-[-2px] group/link"
                  >
                    View on GitHub
                    <svg
                      className="w-5 h-5 transition-transform group-hover/link:translate-x-1"
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

        <div className="mt-16 p-8 bg-gradient-to-r from-secondary/50 to-accent/5 rounded-xl border border-border/50 text-center hover:border-border transition-colors shadow-lg">
          <p className="text-foreground/70 mb-4 font-medium">
            More projects coming soon! I'm actively working on exciting AI/ML solutions.
          </p>
          <p className="text-sm text-foreground/50">Check my GitHub for the latest updates and contributions.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
