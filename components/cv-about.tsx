"use client"

import { motion } from "framer-motion"

export default function CVAbout() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="space-y-8 sm:space-y-10"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
          About
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Dedicated to completing my Bachelor's degree and leveraging core Data Engineering competencies to excel in a
          Fresher position. Committed to long-term professional growth, aiming to advance to a Senior Data Engineer role
          specialized in Cloud Computing, Distributed Systems, and scalable data architectures.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
        {[
          { label: "Projects", value: "3+" },
          { label: "Experience", value: "1yr" },
          { label: "Skills", value: "15+" },
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
            className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center cursor-default group relative overflow-hidden"
          >
            {/* Shimmer effect on hover */}
            <motion.div
              className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle at 50% 50%, oklch(0.65 0.18 200 / 0.1) 0%, transparent 70%)"
              }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="text-2xl sm:text-3xl font-bold text-gradient inline-block"
                whileHover={{ 
                  scale: 1.15,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
              >
                {metric.value}
              </motion.div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                {metric.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
