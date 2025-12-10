"use client"

import { motion } from "framer-motion"

export default function CVHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b border-border/30 backdrop-blur-sm sticky top-0 z-40 bg-background/95"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="flex items-baseline gap-2">
          <h1 className="text-4xl font-bold text-foreground">Nguyen Ha Minh Tuan</h1>
          <span className="text-lg text-muted-foreground">Data Engineer</span>
        </div>
        <p className="text-muted-foreground mt-2">Building scalable data architectures and pipelines for the future</p>
      </div>
    </motion.header>
  )
}
