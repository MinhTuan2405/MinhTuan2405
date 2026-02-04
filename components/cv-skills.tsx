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
                background: "radial-gradient(circle at 30% 50%, oklch(0.65 0.18 200 / 0.12) 0%, transparent 70%)"
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="glass-button px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-accent hover:shadow-elevated transition-smooth cursor-default relative overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Badge glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "radial-gradient(circle at 50% 50%, oklch(0.65 0.18 200 / 0.15) 0%, transparent 70%)"
                      }}
                    />
                    <span className="relative z-10">{skill}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
