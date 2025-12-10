"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

interface CVSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function CVSidebar({ activeSection, setActiveSection }: CVSidebarProps) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ]

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-gradient-to-b from-primary/5 to-primary/[0.02] border-r border-border/30 backdrop-blur-sm sticky top-0 h-screen p-8 gap-12">
      {/* Navigation */}
      <nav className="flex flex-col gap-4 pt-8">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`text-left py-2 px-3 rounded-lg transition-all duration-300 ${
              activeSection === item.id
                ? "text-accent font-semibold bg-accent/10"
                : "text-muted-foreground hover:text-foreground"
            }`}
            whileHover={{ x: 4 }}
          >
            {item.label}
          </motion.button>
        ))}
      </nav>

      {/* Contact Info */}
      <div className="mt-auto space-y-4 text-sm">
        <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
          <MapPin className="w-4 h-4" />
          <span>Ho Chi Minh City</span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
          <Phone className="w-4 h-4" />
          <span>034 2089 493</span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
          <Mail className="w-4 h-4" />
          <a href="mailto:tuannguyen.02042005@gmail.com" className="hover:text-accent transition-colors">
            tuannguyen.02042005@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 pt-4">
          <motion.a
            href="https://www.linkedin.com/in/minhtuan2405dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary/20 text-muted-foreground hover:text-accent hover:bg-accent/20 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://github.com/MinhTuan2405"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary/20 text-muted-foreground hover:text-accent hover:bg-accent/20 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </aside>
  )
}
