"use client"

import { motion } from "framer-motion"

export default function CVExperience() {
  const experiences = [
      {
      position: "Analytics Engineer",
      company: "HIPTECH SOLUTION",
      location: "Ho Chi Minh City",
      period: "01/2026 - present",
      highlights: [
        "Learned about modern data tools and workflows, applying them to complete assigned tasks",
        "Supported the data engineering team by implementing pipeline features and fixes as assigned",
        "Develop data pipeline and analysis data by using dbt, dagster and related tools",
        "Visulize data, discover the potentinal metrics on PowerBI and related tools"
      ],
    },
    {
      position: "Data Engineer Intern",
      company: "HIPTECH SOLUTION",
      location: "Ho Chi Minh City",
      period: "10/2025 - 01/2026",
      highlights: [
        "Learned about modern data tools and workflows, applying them to complete assigned tasks",
        "Supported the data engineering team by implementing pipeline features and fixes as assigned",
        "Developed module Text-to-SQL to communicate with the datalakehouse on the MinIO",
      ],
    },
    {
      position: "Software Engineer Intern",
      company: "MOSO team",
      location: "Remote",
      period: "08/2024 - 01/2025",
      highlights: [
        "Learned about teamwork workflows and software development processes",
        "Studied and practiced backend technologies such as Node.js, JavaScript, and networking, CI/CD",
      ],
    },
  ]

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
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Experience</h2>

      <div className="space-y-4 sm:space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover-lift"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">{exp.position}</h3>
                <p className="text-accent mt-1 text-sm sm:text-base">{exp.company}</p>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground glass-light px-3 py-1.5 rounded-full self-start whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground mb-4">{exp.location}</p>

            <ul className="space-y-2.5 sm:space-y-3">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-3 text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                  <span className="flex-1">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
