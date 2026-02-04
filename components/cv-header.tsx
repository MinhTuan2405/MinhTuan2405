"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function CVHeader() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="glass-navbar sticky top-0 z-40 transition-glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground truncate">
                Nguyen Ha Minh Tuan
              </h1>
              <span className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                Data Engineer | Analytics Engineer
              </span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              Building scalable data architectures and pipelines for the future
            </p>
          </div>
          
          {/* Theme Toggle Button */}
          {mounted && (
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="glass-button p-2.5 sm:p-3 rounded-xl hover:shadow-elevated hover-glow transition-smooth shrink-0 relative overflow-hidden"
              aria-label="Toggle theme"
            >
              {/* Glow effect overlay */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: theme === "dark" 
                    ? "radial-gradient(circle, oklch(0.7 0.18 200 / 0.15) 0%, transparent 70%)"
                    : "radial-gradient(circle, oklch(0.55 0.22 265 / 0.15) 0%, transparent 70%)"
                }}
              />
              
              <motion.div
                initial={false}
                animate={{ 
                  rotate: theme === "dark" ? 0 : 180,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.4, 0, 0.2, 1],
                  scale: {
                    duration: 0.2,
                    repeat: 1,
                    repeatType: "reverse"
                  }
                }}
                className="relative z-10"
              >
                <motion.div
                  animate={{
                    filter: theme === "dark" 
                      ? "drop-shadow(0 0 8px oklch(0.7 0.18 200 / 0.6))"
                      : "drop-shadow(0 0 8px oklch(0.55 0.22 265 / 0.6))"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-accent" />
                  ) : (
                    <Moon className="w-5 h-5 text-primary" />
                  )}
                </motion.div>
              </motion.div>
            </motion.button>
          )}
        </div>
      </div>
    </motion.header>
  )
}
