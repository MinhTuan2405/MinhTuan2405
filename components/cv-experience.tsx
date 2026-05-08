"use client"

import { motion } from "framer-motion"
import type { ExperienceContent } from "@/lib/cv-content-types"

interface CVExperienceProps {
  content: ExperienceContent
}

export default function CVExperience({ content }: CVExperienceProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.section variants={containerVariants} initial="hidden" animate="visible" className="space-y-8 sm:space-y-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">{content.title}</h2>

      <div className="space-y-4 sm:space-y-6">
        {content.items.map((exp, index) => (
          <motion.div
            key={index}
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
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">{exp.position}</h3>
                  <p className="text-accent mt-1 text-sm sm:text-base">{exp.company}</p>
                </div>
                <motion.span
                  className="text-xs sm:text-sm text-muted-foreground glass-light px-3 py-1.5 rounded-full self-start whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.period}
                </motion.span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground mb-4">{exp.location}</p>

              <ul className="space-y-2.5 sm:space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    <span className="text-accent mt-0.5 shrink-0">→</span>
                    <span className="flex-1">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
