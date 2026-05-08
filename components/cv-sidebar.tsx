"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import type { SidebarContent } from "@/lib/cv-content-types"

interface CVSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  content: SidebarContent
  isMobile?: boolean
}

export default function CVSidebar({ activeSection, setActiveSection, content, isMobile = false }: CVSidebarProps) {
  const sidebarClasses = isMobile
    ? "flex flex-col gap-12 h-full"
    : "hidden lg:flex flex-col w-64 glass sticky top-0 h-screen p-8 gap-12"

  return (
    <aside className={sidebarClasses}>
      {/* Navigation */}
      <nav className={`flex flex-col gap-3 ${isMobile ? "" : "pt-8"}`}>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-3">
          {content.brand}
        </h2>
        {content.navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            initial={isMobile ? { opacity: 0, x: -20 } : false}
            animate={isMobile ? { opacity: 1, x: 0 } : false}
            transition={isMobile ? { delay: index * 0.05 } : undefined}
            className={`relative text-left py-2.5 px-3 rounded-xl transition-smooth overflow-hidden ${
              activeSection === item.id
                ? "text-accent font-semibold glass-button shadow-elevated"
                : "text-muted-foreground hover:text-foreground"
            }`}
            whileHover={{ x: 4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Active indicator glow */}
            {activeSection === item.id && (
              <motion.div
                layoutId={isMobile ? "mobile-nav-indicator" : "nav-indicator"}
                className="absolute inset-0 rounded-xl"
                style={{
                  background: "radial-gradient(circle at 0% 50%, oklch(0.65 0.18 200 / 0.15) 0%, transparent 100%)"
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              />
            )}
            
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "radial-gradient(circle at 0% 50%, oklch(0.65 0.18 200 / 0.08) 0%, transparent 100%)"
              }}
            />
            
            <span className="relative z-10">{item.label}</span>
          </motion.button>
        ))}
      </nav>

      {/* Contact Info */}
      <div className="mt-auto space-y-4 text-sm">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 px-3">
          Contact
        </h2>
        <div className="flex items-center gap-3 px-3 text-muted-foreground hover:text-foreground transition-smooth group">
          <MapPin className="w-4 h-4 shrink-0 group-hover:text-accent transition-smooth" />
          <span className="text-sm">{content.contact.location}</span>
        </div>
        <div className="flex items-center gap-3 px-3 text-muted-foreground hover:text-foreground transition-smooth group">
          <Phone className="w-4 h-4 shrink-0 group-hover:text-accent transition-smooth" />
          <span className="text-sm">{content.contact.phone}</span>
        </div>
        <div className="flex items-center gap-3 px-3 text-muted-foreground hover:text-foreground transition-smooth group">
          <Mail className="w-4 h-4 shrink-0 group-hover:text-accent transition-smooth" />
          <a 
            href={`mailto:${content.contact.email}`}
            className="hover:text-accent transition-smooth text-sm break-all"
          >
            {content.contact.email}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 pt-6 px-3">
          <motion.a
            href={content.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-button text-muted-foreground hover:text-accent hover:shadow-elevated transition-smooth"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={content.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-button text-muted-foreground hover:text-accent hover:shadow-elevated transition-smooth"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </aside>
  )
}
