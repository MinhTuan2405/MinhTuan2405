"use client"

import { motion } from "framer-motion"

export default function CVEducation() {
  const education = {
    school: "University of Information Technology | UIT - HCMVNU",
    major: "Information Technology",
    degree: "Bachelor's Degree",
    period: "2023 - 2027",
    gpa: "3.3/4.0 (at present)",
    language: "English",
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.section variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground mb-6">Education</h2>

      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-primary/5 to-transparent border border-border/30 rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{education.school}</h3>
            <p className="text-accent mt-1">{education.major}</p>
          </div>
          <span className="text-sm text-muted-foreground bg-secondary/20 px-3 py-1 rounded-full">
            {education.period}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Degree:</span>
            <p className="text-foreground font-medium">{education.degree}</p>
          </div>
          <div>
            <span className="text-muted-foreground">GPA:</span>
            <p className="text-foreground font-medium">{education.gpa}</p>
          </div>
          <div className="col-span-2">
            <span className="text-muted-foreground">Foreign Language:</span>
            <p className="text-foreground font-medium">{education.language}</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
