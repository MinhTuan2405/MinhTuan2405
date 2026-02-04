"use client"

import { motion } from "framer-motion"

export default function CVSkills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Data Technologies",
      skills: ["Dagster", "Apache Spark", "Apache Kafka", "DBT", "Docker", "Apache Hive", "Trino"],
    },
    {
      title: "Data Engineering",
      skills: ["Data modeling", "OLAP", "ETL/ELT"],
    },
    {
      title: "Data Analysis",
      skills: ["PowerBI", "DAX", "MDX"], 
    },
    {
      title: "Software",
      skills: ["FastAPI", "ExpressJS", "React"],
    },
    {
      title: "Automation",
      skills: ["n8n", "API", "Worklow"],
    },
    {
      title: "Others",
      skills: ["Git", "Linux", "Bash Script"],
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
    <motion.section variants={containerVariants} initial="hidden" animate="visible" className="space-y-8 sm:space-y-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover-lift"
          >
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="glass-button px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-accent hover:shadow-elevated transition-smooth cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
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
