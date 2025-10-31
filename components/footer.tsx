"use client"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-gradient-to-b from-white to-blue-50/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-foreground/50 font-medium">© {currentYear} Yuva Aditya V. All Rights Reserved.</p>
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
                className="text-foreground/50 hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-lg transition-all hover:translate-y-[-2px]"
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
