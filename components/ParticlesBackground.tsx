"use client"

import { motion } from "framer-motion"

const floatingTexts = [
  { text: "###", color: "text-green-400" },
  { text: "$$$", color: "text-blue-400" },
  { text: "root@", color: "text-green-500" },
  { text: "0xDEAD", color: "text-cyan-400" },
  { text: "sudo", color: "text-lime-400" },
  { text: "nmap", color: "text-emerald-400" },
  { text: "{ }", color: "text-blue-300" },
  { text: "&&", color: "text-green-300" },
  { text: "//", color: "text-cyan-300" },
]

const random = (min: number, max: number) => Math.random() * (max - min) + min

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {floatingTexts.map((item, i) => (
        <motion.span
          key={i}
          className={`absolute font-mono text-5xl md:text-8xl font-bold opacity-60 ${item.color}`}
          style={{
            left: `${random(5, 90)}vw`,
            top: `${random(5, 90)}vh`,
            filter: "blur(0.5px)",
          }}
          animate={{
            y: [0, random(-100, 100)],
            x: [0, random(-100, 100)],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: random(12, 22),
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: random(0, 10),
          }}
        >
          {item.text}
        </motion.span>
      ))}
    </div>
  )
} 