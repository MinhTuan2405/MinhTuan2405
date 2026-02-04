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
    <motion.section variants={containerVariants} initial="hidden" animate="visible" className="space-y-8 sm:space-y-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Education</h2>

      <motion.div
        variants={itemVariants}
        className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover-lift relative overflow-hidden group"
        whileHover={{ y: -8 }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"
          style={{
            background: "linear-gradient(90deg, transparent, oklch(0.8 0.15 200 / 0.08), transparent)"
          }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at 20% 50%, oklch(0.65 0.18 200 / 0.12) 0%, transparent 70%)"
          }}
        />
        
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">{education.school}</h3>
              <p className="text-accent mt-1 text-sm sm:text-base">{education.major}</p>
            </div>
            <motion.span
              className="text-xs sm:text-sm text-muted-foreground glass-light px-3 py-1.5 rounded-full self-start"
              whileHover={{ scale: 1.05 }}
            >
              {education.period}
            </motion.span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Degree:</span>
              <p className="text-foreground font-medium mt-1">{education.degree}</p>
            </div>
            <div>
              <span className="text-muted-foreground">GPA:</span>
              <p className="text-foreground font-medium mt-1">{education.gpa}</p>
            </div>
            <div className="sm:col-span-2">
              <span className="text-muted-foreground">Foreign Language:</span>
              <p className="text-foreground font-medium mt-1">{education.language}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
