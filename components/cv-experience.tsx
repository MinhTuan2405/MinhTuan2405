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
    <motion.section variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground mb-6">Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/5 to-transparent border border-border/30 rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                <p className="text-accent mt-1">{exp.company}</p>
              </div>
              <span className="text-sm text-muted-foreground bg-secondary/20 px-3 py-1 rounded-full whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

            <ul className="space-y-2">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                  <span className="text-accent mt-1">→</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
