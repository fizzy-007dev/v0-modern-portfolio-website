"use client"

import { useState } from "react"
import Link from "next/link"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [logoHovered, setLogoHovered] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl relative overflow-hidden">
            <span
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
              className="inline-flex items-center transition-all duration-300"
            >
              <span
                className={`text-cyan-400 font-bold transition-all duration-300 ${
                  logoHovered ? "opacity-0 w-0" : "opacity-100"
                }`}
              >
                YA
              </span>
              <span
                className={`text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text font-bold transition-all duration-300 ${
                  logoHovered ? "opacity-100 ml-2" : "opacity-0 w-0"
                }`}
              >
                YUVA ADITYA V
              </span>
            </span>
          </Link>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
