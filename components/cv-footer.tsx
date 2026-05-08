"use client"

import { motion } from "framer-motion"
import type { FooterContent } from "@/lib/cv-content-types"

interface CVFooterProps {
  content: FooterContent
}

export default function CVFooter({ content }: CVFooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="glass-navbar mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 text-center text-xs sm:text-sm text-muted-foreground">
        <p>
          © {content.year} {content.owner}. {content.text}
        </p>
      </div>
    </motion.footer>
  )
}
