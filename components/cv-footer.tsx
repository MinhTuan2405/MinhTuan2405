"use client"

import { motion } from "framer-motion"

export default function CVFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="glass-navbar mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 text-center text-xs sm:text-sm text-muted-foreground">
        <p>
          © {currentYear} Nguyen Ha Minh Tuan. All rights reserved. | Designed with React & Tailwind CSS
        </p>
      </div>
    </motion.footer>
  )
}
