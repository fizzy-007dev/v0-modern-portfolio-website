"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Github, Linkedin } from "lucide-react"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-mesh" />
        <div
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 -top-40 -right-40 transition-all duration-300"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30 bottom-0 -left-40" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 mb-8 bg-primary/10 px-4 py-2 rounded-full border border-primary/30 hover:border-primary/50 transition-colors">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
              Hi, I'm an
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
                AI/ML Engineer
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground/70 mb-8 leading-relaxed max-w-lg font-light">
              I'm a passionate Computer Science student at VIT Chennai specializing in Artificial Intelligence and
              Machine Learning. I craft intelligent solutions using Python and modern AI technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/50 text-primary rounded-xl font-semibold hover:bg-primary/5 hover:border-primary transition-all duration-300"
              >
                View My Work
              </a>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-sm text-foreground/50 uppercase tracking-widest">Connect With Me</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary/10 transition-colors text-foreground/70 hover:text-primary"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary/10 transition-colors text-foreground/70 hover:text-primary"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Profile Image with Enhanced Design */}
          <div
            className={`transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-300" />

              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl group-hover:border-primary/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent z-10" />
                <Image
                  src="/professional-portrait-young-indian-man-computer-sc.jpg"
                  alt="Yuva Aditya V"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-lg border border-primary/20 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-xs text-foreground/70 uppercase tracking-wide">Projects</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-card rounded-2xl p-4 shadow-lg border border-accent/20 backdrop-blur-sm">
                <div className="text-2xl font-bold text-accent">AI/ML</div>
                <div className="text-xs text-foreground/70 uppercase tracking-wide">Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
