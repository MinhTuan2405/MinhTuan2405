"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"

export default function CVProjects() {
  const projects = [
    {
      title: "EnsemTrust: Fake news detection",
      period: "10/2025 - 12/2025",
      description:
        "Building a complete data platform using the Lakehouse architecture, Ensemble Learning models to accurately classify news articles as genuine or fake and enabling analysis for reporting",
      technologies: [
        "Dagster",
        "Apache Spark",
        "MinIO",
        "LightGBM",
        "SVM",
        "Logistic Regression",
        "Metabase",
        "Streamlit",
      ],
      outcome:
        "Provided a data platform for news storage and reporting served through Metabase, and a Streamlit application that receives news input and responds whether it is fake or true, verifying its credibility.",
      role: "Data Engineer",
      teamSize: "3",
      github: "https://github.com/MinhTuan2405/EnsemTrust",
    },
    {
      title: "[AIDE] linkedIn_job_dataplatform",
      period: "8/2025 - 10/2025",
      description:
        "Building a data platform analyzing 100,000+ LinkedIn job postings (2023–2024), providing insights into hiring trends and workforce demand",
      technologies: ["Dagster", "DBT", "Apache Spark", "PostgreSQL", "MinIO", "Metabase"],
      outcome:
        "Analyzed recruitment and salary trends by company, industry, skill, and location to support job seekers, employers, and training institutions and served analytics through Metabase.",
      role: "Data Engineer",
      teamSize: "1",
      github: "https://github.com/MinhTuan2405/linkedIn_job_datapl4tform",
    },
    {
      title: "BikeStoreShop Backend API",
      period: "11/2025 - 12/2025",
      description:
        "Building a RESTful API server for bicycle store management system with 54 endpoints, handling product management, order processing, customer management, and business analytics",
      technologies: [
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "Alembic",
        "JWT",
        "Pytest",
        "Pydantic",
        "Uvicorn",
      ],
      outcome:
        "Delivered a complete backend system with authentication/authorization, product catalog management, order processing, customer relationship management, and 13 comprehensive business analytics endpoints for sales reporting and insights.",
      role: "Backend Developer",
      teamSize: "2",
      github: "https://github.com/MinhTuan2405/LightWeightBikeStore"
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground mb-6">Projects</h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gradient-to-r from-accent/5 to-transparent border border-border/30 rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.role} • Team size: {project.teamSize}
                </p>
              </div>
              <span className="text-sm text-muted-foreground bg-secondary/20 px-3 py-1 rounded-full whitespace-nowrap">
                {project.period}
              </span>
            </div>

            <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="mb-4">
              <p className="text-sm font-semibold text-foreground mb-2">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-primary/10 text-accent text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4 pb-4 border-b border-border/20">
              <p className="text-sm font-semibold text-foreground mb-2">Outcome:</p>
              <p className="text-sm text-muted-foreground">{project.outcome}</p>
            </div>

            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              whileHover={{ x: 4 }}
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">View on GitHub</span>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
