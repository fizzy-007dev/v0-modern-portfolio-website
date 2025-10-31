"use client"

import type React from "react"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full mx-auto mb-4" />
          <p className="text-lg text-slate-300">
            I'm always interested in hearing about new opportunities and projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Get In Touch</h3>
              <p className="text-slate-300 leading-relaxed">
                Whether you have an interesting project, want to collaborate, or just want to say hi, feel free to reach
                out!
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.541-5.032-1.475.259.03.518.045.779.045 1.537 0 2.954-.525 4.078-1.407-1.435-.027-2.642-.966-3.066-2.28.201.03.402.046.611.046.299 0 .589-.04.867-.115-1.500-.3-2.633-1.623-2.633-3.203v-.041c.45.256.967.41 1.515.429-.882-.587-1.459-1.589-1.459-2.724 0-.597.161-1.158.442-1.64 1.617 1.981 4.032 3.289 6.76 3.424-.055-.239-.086-.487-.086-.744 0-1.81 1.47-3.279 3.279-3.279.943 0 1.797.398 2.396 1.037.747-.147 1.451-.42 2.087-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z",
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/in/yuva-aditya-6a255236b/",
                  text: "Connect with me",
                },
                {
                  icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                  label: "GitHub",
                  link: "https://github.com/fizzy-007dev/",
                  text: "View my repositories",
                },
                {
                icon:"M2 4a2 2 0 012-2h16a2 2 0 012 2v0l-10 7L2 4zm0 2.5l9.445 6.612a1 1 0 001.11 0L22 6.5V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6.5z",
                label: "Email",
                link: "mailto:fizzywayne2025@gmail.com",
                text: "Send me an email",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/50 transition-all hover:translate-x-1 group/contact border border-slate-700/50 hover:border-cyan-500/30"
                >
                  <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center group-hover/contact:bg-cyan-500/20 transition-all shadow-md group-hover/contact:shadow-cyan-500/20">
                    <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="font-semibold text-cyan-400 hover:text-pink-500 transition-colors">{item.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-slate-800/50 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-400/60 shadow-xl hover:shadow-cyan-500/20 transition-all"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-cyan-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-700/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-cyan-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-700/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-cyan-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-700/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className={`w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:translate-y-[-2px] relative overflow-hidden group/btn ${
                submitted ? "ring-2 ring-green-400" : ""
              }`}
            >
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <span className="relative">{submitted ? "✓ Message Sent!" : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
