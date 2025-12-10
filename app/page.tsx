"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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

  const sections = {
    about: <CVAbout />,
    education: <CVEducation />,
    skills: <CVSkills />,
    experience: <CVExperience />,
    projects: <CVProjects />,
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <CVSidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main Content */}
        <main className="flex-1">
          <CVHeader />

          <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {sections[activeSection as keyof typeof sections]}
            </motion.div>
          </div>

          <CVFooter />
        </main>
      </div>
    </div>
  )
}
