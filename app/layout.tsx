import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Kushagra Gupta - Software Developer",
  description:
    "Portfolio of Kushagra Gupta, a passionate Software Developer from New Delhi, India. Crafting clean code and creative solutions.",
  keywords: "Kushagra Gupta, Software Developer, Web Developer, Python, React, JavaScript, Portfolio",
  authors: [{ name: "Kushagra Gupta" }],
  openGraph: {
    title: "Kushagra Gupta - Software Developer",
    description: "Portfolio of Kushagra Gupta, a passionate Software Developer from New Delhi, India.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>{children}</body>
    </html>
  )
}
