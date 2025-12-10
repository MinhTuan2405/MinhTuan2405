"use client"

import { motion } from "framer-motion"

export default function CVSkills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "SQL"],
    },
    {
      title: "Data Technologies",
      skills: ["Dagster", "Apache Spark", "Apache Kafka", "DBT", "Docker", "Apache Hive", "Trino"],
    },
    {
      title: "Data Engineering",
      skills: ["Data modeling", "OLAP", "ETL/ELT", "Data analysis"],
    },
    {
      title: "Software",
      skills: ["FastAPI", "ExpressJS"],
    },
    {
      title: "Others",
      skills: ["Git", "Linux"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground mb-6">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="bg-card border border-border/30 rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium hover:bg-accent/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
