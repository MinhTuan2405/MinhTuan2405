"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import type { ProjectsContent } from "@/lib/cv-content-types"

interface CVProjectsProps {
  content: ProjectsContent
}

export default function CVProjects({ content }: CVProjectsProps) {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section variants={containerVariants} initial="hidden" animate="visible" className="space-y-8 sm:space-y-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">{content.title}</h2>

      <div className="space-y-4 sm:space-y-6">
        {content.items.map((project, index) => (
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
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {project.role} • Team size: {project.teamSize}
                  </p>
                </div>
                <motion.span
                  className="text-xs sm:text-sm text-muted-foreground glass-light px-3 py-1.5 rounded-full self-start whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.period}
                </motion.span>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-xs sm:text-sm font-semibold text-foreground mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="glass-button text-primary px-2.5 py-1 rounded-full text-xs font-medium relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Badge glow on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: "radial-gradient(circle at 50% 50%, oklch(0.65 0.18 200 / 0.15) 0%, transparent 70%)"
                        }}
                      />
                      <span className="relative z-10">{tech}</span>
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mb-4 pb-4 border-b border-border/20">
                <p className="text-xs sm:text-sm font-semibold text-foreground mb-2">Outcome:</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
              </div>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-smooth text-sm relative group/link"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute -inset-2 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at 0% 50%, oklch(0.65 0.18 200 / 0.08) 0%, transparent 100%)"
                  }}
                />
                <Github className="w-4 h-4 relative z-10" />
                <span className="relative z-10">View on GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
