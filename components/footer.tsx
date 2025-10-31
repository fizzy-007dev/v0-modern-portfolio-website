"use client"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-slate-400 font-medium">© {currentYear} Yuva Aditya V. All Rights Reserved.</p>
          <div className="flex gap-8">
            {[
              { name: "LinkedIn", link: "https://www.linkedin.com/in/yuva-aditya-6a255236b/" },
              { name: "GitHub", link: "https://github.com/fizzy-007dev/" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 px-4 py-2 rounded-lg border border-slate-700/50 hover:border-cyan-500/30 transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-cyan-500/20"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
