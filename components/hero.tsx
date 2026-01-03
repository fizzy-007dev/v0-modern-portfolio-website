"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { ArrowRight, Github, Linkedin, Mail, Upload, User } from "lucide-react"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [profileImage, setProfileImage] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

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
          className="absolute w-96 h-96 bg-primary/20 rounded-full opacity-50 -top-40 -right-40 transition-all duration-300 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full opacity-50 bottom-0 -left-40 blur-3xl" />
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

          {/* Your Space Section */}
          <div
            className={`transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative group w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/50 via-blue-600/30 to-pink-500/40 rounded-3xl opacity-30 group-hover:opacity-80 transition-all duration-300 blur-xl" />

              {/* Outer rotating shapes - CHANGE: smoother continuous rotation with longer durations */}
              <div className="absolute inset-0 flex items-center justify-center opacity-70">
                <div
                  className="w-64 h-64 border-2 border-primary/60 rounded-full blur-sm"
                  style={{ animation: "spin 20s linear infinite" }}
                />
                <div
                  className="absolute w-80 h-80 border-2 border-accent/50 rounded-full blur-sm"
                  style={{ animation: "spin 25s linear infinite reverse" }}
                />
              </div>

              {/* Replaced inner gradient sphere with an interactive profile circle and upload button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-48 h-48 rounded-full flex items-center justify-center relative pointer-events-auto"
                  style={{
                    animation: "float-smooth 6s ease-in-out infinite",
                  }}
                >
                  {/* Neon Circle Outline */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-primary/50"
                    style={{
                      boxShadow: "0 0 30px rgba(0, 217, 255, 0.4), inset 0 0 15px rgba(0, 217, 255, 0.2)",
                    }}
                  />

                  {/* Image/Placeholder Container */}
                  <div className="w-44 h-44 rounded-full overflow-hidden bg-secondary/30 backdrop-blur-md flex items-center justify-center group/profile border border-white/10">
                    {profileImage ? (
                      <img
                        src={profileImage || "/placeholder.svg"}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-20 h-20 text-foreground/20 group-hover/profile:text-primary/50 transition-colors" />
                    )}

                    {/* Upload Overlay */}
                    <label className="absolute inset-0 bg-black/60 opacity-0 group-hover/profile:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer">
                      <Upload className="w-8 h-8 text-white mb-2" />
                      <span className="text-xs text-white font-medium">Upload Photo</span>
                      <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    </label>
                  </div>
                </div>
              </div>

              {/* Floating particles - CHANGE: smoother orbital motion */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full blur-sm"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.25}s`,
                    backgroundColor: i % 3 === 0 ? "#00d9ff" : i % 3 === 1 ? "#ff006e" : "#0099ff",
                    boxShadow: i % 3 === 0 ? "0 0 15px #00d9ff" : i % 3 === 1 ? "0 0 15px #ff006e" : "0 0 15px #0099ff",
                    animation: "orbit-smooth 8s ease-in-out infinite",
                  }}
                />
              ))}

              {/* Animated corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/70 rounded-tl-lg pointer-events-none" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/70 rounded-tr-lg pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/70 rounded-bl-lg pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/70 rounded-br-lg pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
