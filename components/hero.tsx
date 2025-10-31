"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

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
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40 -top-40 -right-40 transition-all duration-300"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40 bottom-0 -left-40" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 mb-8 bg-primary/5 px-4 py-2 rounded-full border border-primary/30 hover:border-primary/70 transition-colors backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
              Hi, I'm an
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
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
                className="neon-edge neon-edge-glow relative group inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#projects"
                className="neon-edge neon-edge-glow relative group inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-sm text-foreground/50 uppercase tracking-widest">Connect With Me</span>
              <div className="flex gap-4">
                <a
                  href="mailto:fizzywayne2025@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-all duration-300 text-foreground/70 hover:text-primary neon-edge-glow"
                  title="Email me"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-all duration-300 text-foreground/70 hover:text-primary neon-edge-glow"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/50 hover:bg-accent/20 transition-all duration-300 text-foreground/70 hover:text-accent neon-edge-glow"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative group w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-cyan-500/20 to-purple-600/40 rounded-3xl blur-3xl opacity-40 group-hover:opacity-90 transition-all duration-300" />

              {/* Main canvas area - now wider rectangle */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-primary/60 group-hover:border-primary/90 shadow-[0_0_20px_rgba(0,200,255,0.4)] transition-all duration-300 h-96 backdrop-blur-sm bg-gradient-to-b from-blue-950/60 via-cyan-900/40 to-purple-950/60 flex items-center justify-center">
                {/* Animated 3D-inspired geometric shape */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  {/* Outer torus-like shape with gradient */}
                  <div
                    className="absolute w-80 h-48 rounded-full border-8 border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-30 blur-xl animate-spin"
                    style={{ animationDuration: "8s" }}
                  />
                  <div
                    className="absolute w-64 h-40 rounded-full border-8 border-transparent bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 opacity-20 blur-lg animate-spin"
                    style={{ animationDuration: "6s", animationDirection: "reverse" }}
                  />

                  {/* Inner glowing orb */}
                  <div className="absolute w-48 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-40 blur-2xl" />
                  <div className="absolute w-32 h-16 rounded-full bg-gradient-to-br from-primary to-accent opacity-60 blur-xl" />
                </div>

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/60 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Animated corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/50 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/50 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />

                {/* Center text */}
                <div className="text-center relative z-10">
                  <div className="text-white text-4xl sm:text-5xl font-bold mb-2 tracking-wide">
                    {/* Placeholder for center text */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
