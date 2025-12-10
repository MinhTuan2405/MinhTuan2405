"use client"

import { motion } from "framer-motion"

export default function CVAbout() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">About</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Dedicated to completing my Bachelor's degree and leveraging core Data Engineering competencies to excel in a
          Fresher position. Committed to long-term professional growth, aiming to advance to a Senior Data Engineer role
          specialized in Cloud Computing, Distributed Systems, and scalable data architectures.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-4 pt-4">
        {[
          { label: "Projects", value: "2+" },
          { label: "Experience", value: "1yr" },
          { label: "Skills", value: "15+" },
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-card border border-border/30 rounded-lg p-4 text-center hover:border-accent/50 transition-colors"
          >
            <div className="text-2xl font-bold text-accent">{metric.value}</div>
            <div className="text-sm text-muted-foreground">{metric.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
