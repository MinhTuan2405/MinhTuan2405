"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import CVHeader from "@/components/cv-header"
import CVSidebar from "@/components/cv-sidebar"
import CVAbout from "@/components/cv-about"
import CVEducation from "@/components/cv-education"
import CVSkills from "@/components/cv-skills"
import CVExperience from "@/components/cv-experience"
import CVProjects from "@/components/cv-projects"
import CVFooter from "@/components/cv-footer"

export default function CVPage() {
  const [activeSection, setActiveSection] = useState("about")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sections = {
    about: <CVAbout />,
    education: <CVEducation />,
    skills: <CVSkills />,
    experience: <CVExperience />,
    projects: <CVProjects />,
  }

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-shift relative" suppressHydrationWarning>
      {/* Subtle background overlay for depth */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.6_0.15_265/0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.65_0.12_200/0.06),transparent_50%)]" />
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 glass-button p-4 rounded-full shadow-elevated-lg hover-glow transition-smooth overflow-hidden"
        aria-label="Toggle menu"
        suppressHydrationWarning
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse effect when menu is open */}
        {mobileMenuOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-accent/20"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        )}
        
        <motion.div
          initial={false}
          animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-10"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </motion.div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-50 glass-backdrop"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute left-0 top-0 h-full w-72 glass-modal p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <CVSidebar 
                activeSection={activeSection} 
                setActiveSection={handleSectionChange}
                isMobile={true}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <CVSidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          isMobile={false}
        />

        {/* Main Content */}
        <main className="flex-1 min-w-0 flex flex-col">
          <CVHeader />

          <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {sections[activeSection as keyof typeof sections]}
              </motion.div>
            </AnimatePresence>
          </div>

          <CVFooter />
        </main>
      </div>
    </div>
  )
}
