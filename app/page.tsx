"use client"

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  MapPin,
  Sun,
  Moon,
  Download,
  Award,
  GraduationCap,
  Home,
  Send,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMysql,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiWhatsapp,
} from "react-icons/si"
import ParticlesBackground from "../components/ParticlesBackground"
import { motion, AnimatePresence } from "framer-motion"
import Head from "next/head"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Terminal Component
function Terminal() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [commandHistory, setCommandHistory] = useState([
    {
      command: "whoami",
      response: `Name: "Kushagra Gupta"
University: "Bennett University"
Degree: "B.Tech Computer Science Engineering"
Interests: ["Cybersecurity", "Web Dev", "DSA", "Music"]
`,
    },
  ])

  const commands = [
    { cmd: "Portfolio/About/", section: "about" },
    { cmd: "Portfolio/Education/", section: "education" },
    { cmd: "Portfolio/Experience/", section: "experience" },
    { cmd: "Portfolio/Skills/", section: "skills" },
    { cmd: "Portfolio/Projects/", section: "projects" },
    { cmd: "Portfolio/Certifications/", section: "certifications" },
    { cmd: "Portfolio/Achievements/", section: "achievements" },
    { cmd: "Portfolio/Contact/", section: "contact" },
    { cmd: "sudo apt install kushagra-resume", section: "resume" },
  ]

  useEffect(() => {
    setIsClient(true)
    setCurrentTime(new Date())
    
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(cursorInterval)
      clearInterval(timeInterval)
    }
  }, [])

  const executeCommand = (cmd: string, section: string) => {
    setCurrentCommand("")
    if (section === "resume") {
      // Resume download disabled
      return
    }
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const formatTime = (date: Date | null) => {
    if (!date) return ""
    return date.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg font-mono text-sm overflow-hidden shadow-2xl max-w-4xl mx-auto">
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="text-gray-300">kushagra@root: ~</span>
        </div>
        <div className="text-gray-400 text-xs">
          {isClient ? formatTime(currentTime) : ""}
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 bg-black">
        {/* Command History */}
        {commandHistory.map((item, index) => (
          <div key={index} className="mb-3">
            <div className="text-green-400">
              <span className="text-blue-400">kushagra@root</span>
              <span className="text-white">:</span>
              <span className="text-cyan-400">~</span>
              <span className="text-white">$ {item.command}</span>
            </div>
            <div className="text-gray-300 ml-4 mb-2 whitespace-pre-line">{item.response}</div>
          </div>
        ))}

        {/* Available Commands */}
        <div className="mt-4">
          <div className="text-cyan-400 mb-3"># Tip: Click a command to jump to that section.</div>
          <div className="grid grid-cols-1 gap-1">
            {commands.map((cmd, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                onClick={() => executeCommand(cmd.cmd, cmd.section)}
                className="cursor-pointer hover:bg-blue-900/20 p-2 rounded transition-all duration-200"
              >
                <span className="text-green-400">
                  <span className="text-blue-400">kushagra@root</span>
                  <span className="text-white">:</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-white">$ {cmd.cmd}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Command Line */}
        <div className="mt-4">
          <span className="text-green-400">
            <span className="text-blue-400">kushagra@root</span>
            <span className="text-white">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-white">$ {currentCommand}</span>
            {showCursor && <span className="text-white animate-pulse">|</span>}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [contactForm, setContactForm] = useState({ name: "", message: "" })
  const [expandedCertifications, setExpandedCertifications] = useState<string | null>(null)

  const devSkills = [
    { name: "Firebase", icon: <SiFirebase size={32} color="#FFCA28" /> },
    { name: "Python", icon: <SiPython size={32} color="#3776AB" /> },
    { name: "C++", icon: <SiCplusplus size={32} color="#00599C" /> },
    { name: "DSA", icon: <span className="text-3xl">💻</span> },
    { name: "HTML", icon: <SiHtml5 size={32} color="#E34F26" /> },
    { name: "CSS", icon: <SiCss3 size={32} color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript size={32} color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" /> },
    { name: "React", icon: <SiReact size={32} color="#61DAFB" /> },
    { name: "MySQL", icon: <SiMysql size={32} color="#4479A1" /> },
  ]
  const devSkillsLoop = [...devSkills, ...devSkills]

  const cyberSkills = [
    { name: "SIEM", icon: null },
    { name: "Bash", icon: null },
    { name: "Linux", icon: null },
    { name: "Wireshark", icon: null },
    { name: "Network Security", icon: null },
    { name: "Risk Assessment & Management", icon: null },
    { name: "Threat Detection & Analysis", icon: null },
    { name: "Incident Response", icon: null },
    { name: "Incident & Access Management", icon: null },
  ]
  const cyberSkillsLoop = [...cyberSkills, ...cyberSkills]

  const projects = [
    {
      title: "Predictive PestGuard",
      period: "Jan 2025 - May 2025",
      description:
        "Predictive Pest Guard combines machine learning, historical pest data, and real-time weather integration via the WeatherStack API to accurately forecast pest risks across regions and crops. The system provides early warnings and personalized recommendations to reduce crop loss and pesticide overuse.",
      tech: ["AI Integration", "Python", "TensorFlow", "React", "Scikit-learn", "WeatherStack API", "Vercel"],
      github: "https://github.com/anmolsalaria/predictive-pest-guard",
      demo: "https://predictive-pest-guard.vercel.app/",
      linkedin:
        "https://www.linkedin.com/posts/kushagra-gupta-a1b6b4291_predictivepestguard-agritech-aiforgood-activity-7320095341767241728-4w1m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbCs7cBi-7IAxysRr4H-VwsHwknspiZI5c",
      image: "/predictive-pestguard.png",
    },
    {
      title: "Web Vulnerability Scanner",
      period: "Apr 2025 - May 2025",
      description:
        "The Web Vulnerability Scanner automates the detection of basic security flaws, making it easier for developers to secure their applications early. It aims to bridge the gap between developers and cybersecurity practices, fostering a safer web environment.",
      tech: ["Security", "OWASP", "Web Scanning", "Vulnerability Assessment"],
      github: "https://github.com/Kushagra-Gupta-755/WebVulnScannner",
      demo: "https://web-vuln-scannner.vercel.app/",
      linkedin:
        "https://www.linkedin.com/posts/kushagra-gupta-a1b6b4291_cybersecurity-websecurity-python-activity-7343310027274792960-9raN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbCs7cBi-7IAxysRr4H-VwsHwknspiZI5c",
      image: "/web-vuln-scanner.png",
    },
    {
      title: "MoodSphere",
      period: "Ongoing",
      description:
        "MoodSphere, A mental health companion website that enables users to: Track daily moods, Get AI-driven self-care suggestions, Access anonymous peer support, Stay consistent with gamified wellness habits.",
      tech: ["React", "AI Integration", "Mental Health", "Gamification"],
      github: "#",
      demo: "#",
      linkedin:
        "https://www.linkedin.com/posts/kushagra-gupta-a1b6b4291_moodsphere-ozibookhiringchallenge-mentalhealthtech-activity-7345202762889969666-grlL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbCs7cBi-7IAxysRr4H-VwsHwknspiZI5c",
      image: "/moodsphere.png",
    },
  ]

  const certifications = {
    google: {
      title: "Google Cybersecurity Professional Certificates",
      cover: "/google-cybersecurity-thumbnail.png",
      certificates: [
        {
          title: "Google Cybersecurity Professional Certificate (Specialization)",
          issuer: "Google via Coursera",
          date: "Oct 23, 2024",
          description: "Full program completion. Awarded for successfully completing all required courses and assessments in the Google Cybersecurity Professional Certificate specialization.",
          verifyLink: "https://coursera.org/verify/professional-cert/J6EE6N0LOFO8",
          isSpecialization: true,
        },
        {
          title: "Foundations of Cybersecurity",
          issuer: "Google via Coursera",
          date: "Dec 27, 2023",
          description: "Overview of cybersecurity principles, security frameworks, and risk management.",
          verifyLink: "https://coursera.org/verify/4S44U8GY6LXV",
        },
        {
          title: "Play It Safe: Manage Security Risks",
          issuer: "Google via Coursera",
          date: "Jan 2, 2024",
          description: "Risk assessment, mitigation strategies, and securing digital assets.",
          verifyLink: "https://coursera.org/verify/PPZY365M3XJW",
        },
        {
          title: "Connect and Protect: Networks and Network Security",
          issuer: "Google via Coursera",
          date: "Jan 21, 2024",
          description: "Network protocols, firewalls, VPNs, and best practices for securing networks.",
          verifyLink: "https://coursera.org/verify/PVXAHQYCML32",
        },
        {
          title: "Tools of the Trade: Linux and SQL",
          issuer: "Google via Coursera",
          date: "Jun 28, 2024",
          description: "Linux system administration and SQL for managing and securing databases.",
          verifyLink: "https://coursera.org/verify/Y8EEFX9E8ENM",
        },
        {
          title: "Assets, Threats, and Vulnerabilities",
          issuer: "Google via Coursera",
          date: "Jul 16, 2024",
          description: "Identifying and analyzing security threats, vulnerabilities, and threat actors.",
          verifyLink: "https://coursera.org/verify/PYW2X8B8SP2Y",
        },
        {
          title: "Sound the Alarm: Detection and Response",
          issuer: "Google via Coursera",
          date: "Oct 21, 2024",
          description: "Incident detection, security monitoring, and incident response processes.",
          verifyLink: "https://coursera.org/verify/J4FHT1OUVVM4",
        },
        {
          title: "Automate Cybersecurity Tasks with Python",
          issuer: "Google via Coursera",
          date: "Oct 22, 2024",
          description: "Writing Python scripts to automate cybersecurity tasks and improve workflow efficiency.",
          verifyLink: "https://coursera.org/verify/R0KPV9XVZOWX",
        },
        {
          title: "Put It to Work: Prepare for Cybersecurity Jobs",
          issuer: "Google via Coursera",
          date: "Oct 23, 2024",
          description: "Career preparation, resume building, and interview tips for the cybersecurity field.",
          verifyLink: "https://coursera.org/verify/MA3XG80MGIR4",
        },
      ],
    },
    forage: {
      title: "Forage Virtual Job Simulations",
      cover: "/forage-logo-thumbnail.png",
      certificates: [
        {
          title: "Tata Group - Cybersecurity Analyst Job Simulation",
          issuer: "Forage",
          date: "Dec 25, 2024",
          description:
            "Focused on Identity and Access Management (IAM). Delivered documentation and strategic presentations with a consulting mindset. Completed practical tasks in IAM fundamentals, strategy assessment, crafting custom IAM solutions, and platform integration.",
          verifyLink:
            "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_wPgJmZ6mgkdwivf4Q_1735148896586_completion_certificate.pdf",
        },
        {
          title: "Mastercard - Cybersecurity Job Simulation",
          issuer: "Forage",
          date: "Jun 23, 2025",
          description:
            "Worked as an analyst for the Security Awareness Team. Identified phishing threats and developed targeted training protocols. Completed practical tasks in designing phishing email simulations and interpreting simulation results.",
          verifyLink:
            "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_wPgJmZ6mgkdwivf4Q_1750676536792_completion_certificate.pdf",
        },
        {
          title: "Deloitte Australia - Cyber Job Simulation",
          issuer: "Forage",
          date: "Jun 25, 2025",
          description:
            "Analyzed web activity logs to spot suspicious behavior. Assisted in managing a simulated cybersecurity breach. Completed practical tasks in cybersecurity analysis and incident response.",
          verifyLink:
            "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_wPgJmZ6mgkdwivf4Q_1750878092348_completion_certificate.pdf",
        },
        {
          title: "Datacom - Cybersecurity Job Simulation",
          issuer: "Forage",
          date: "Jun 28, 2025",
          description:
            "Investigated a simulated cyberattack and delivered a comprehensive security report. Conducted risk assessments and offered improvement recommendations. Completed practical tasks in APT breach analysis and cybersecurity risk assessment.",
          verifyLink:
            "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/gCW7Xki5Y3vNpBmnn/yTszJTvkHFBH6zAn3_gCW7Xki5Y3vNpBmnn_wPgJmZ6mgkdwivf4Q_1751134148204_completion_certificate.pdf",
        },
      ],
    },
    ibm: {
      title: "IBM Ethical Hacking Professional Certificates",
      cover: "/ibm-logo-thumbnail.jpeg",
      certificates: [
        {
          title: "Introduction to Ethical Hacking Principles",
          issuer: "SkillUp EdTech via Coursera",
          date: "Jun 29, 2025",
          description:
            "Comprehensive introduction to ethical hacking principles, methodologies, and cybersecurity fundamentals.",
          verifyLink: "https://coursera.org/verify/TN3UCN3B36US",
        },
      ],
    },
  }

  const education = [
    {
      degree: "B.Tech, Computer Science Engineering",
      institution: "Bennett University, Greater Noida, Uttar Pradesh",
      period: "2023 - 2027",
      description: "CGPA: 7.96 | Specialization: Cybersecurity",
    },
    {
      degree: "Senior Secondary (XII), CBSE - Science",
      institution: "K.R. Mangalam World School, Vikaspuri, New Delhi",
      period: "2023",
      description: "Percentage: 84.20%",
    },
  ]

  const achievements = [
    {
      title: "1st Place - Symphonic Assault (Unifest 2025)",
      event: "Unifest 2025 (Galgotias University)",
      date: "Mar 2025",
      description: "Achieved 1st place with band Orpheus in Symphonic Assault, an inter-university band competition at Unifest 2025 hosted by Galgotias University. Acknowledged for outstanding musical execution, originality, and group coordination.",
      image: "/1st Place - Symphonic Assault (Unifest 2025).jpg"
    },
    {
      title: "2nd Place - Rockmania (Uphoria 2025)",
      event: "Uphoria 2025 (Bennett University)",
      date: "Feb 2025",
      description: "Secured 2nd position with band Orpheus during Rockmania, a band performance competition held at Uphoria 2025, the Annual Cultural Fest of Bennett University. Recognized for exceptional stage performance and musical synergy.",
      image: "/2nd Place - Rockmania (Uphoria 2025).jpg"
    },
    {
      title: "Trinity College London - Grade 1 Electronic Keyboards",
      description:
        "Distinction Certificate, Issued by Trinity College London, associated with Delhi School Of Music - India.",
      date: "Jun 2019",
      type: "music",
      image: "/trinity-grade1-certificate.png",
    },
    {
      title: "Trinity College London - Grade Initial Electronic Keyboards",
      description:
        "Distinction Certificate, Issued by Trinity College London, associated with Delhi School Of Music - India.",
      date: "Feb 2019",
      type: "music",
      image: "/trinity-initial-certificate.png",
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Kushagra Gupta Portfolio</title>
        <meta property="og:title" content="Kushagra Gupta Portfolio" />
        <meta property="og:image" content="/kushagra-photo.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kushagra Gupta Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kushagra Gupta Portfolio" />
        <meta name="twitter:image" content="/kushagra-photo.jpg" />
      </Head>
      <ParticlesBackground />
    <div
      className={`min-h-screen transition-all duration-500 font-sans ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 text-gray-900"
      }`}
    >
      {/* Theme Toggle */}
      <motion.button
        onClick={() => setIsDarkMode(!isDarkMode)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full ${
          isDarkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-900/10 hover:bg-gray-900/20"
        } backdrop-blur-sm border ${isDarkMode ? "border-white/10" : "border-gray-900/10"} transition-all duration-300`}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>

      {/* Home Icon */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed top-6 left-6 z-50 p-3 rounded-full ${
          isDarkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-900/10 hover:bg-gray-900/20"
        } backdrop-blur-sm border ${isDarkMode ? "border-white/10" : "border-gray-900/10"} transition-all duration-300`}
      >
        <Home size={24} />
      </motion.button>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        {/* Hero Content - Centered Above Terminal */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center space-y-6 mb-12 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold">
              Hello, I'm{" "}
              <span
                className={`${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                }`}
              >
                Kushagra Gupta
              </span>
            </h1>
            <h2 className={`text-3xl md:text-4xl font-semibold mt-4 ${isDarkMode ? "text-white" : "text-black"}`}>
              Web Developer | Cybersecurity Enthusiast
            </h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className={`text-xl max-w-lg mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            A developer with a security mindset.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className={`text-lg font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}
          >
            Develop. Secure. Compose.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className={`flex items-center justify-center space-x-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            <MapPin size={20} />
            <span>New Delhi, India</span>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center space-x-4">
            <Link href="https://github.com/Kushagra-Gupta-755" target="_blank">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`p-3 rounded-full transition-colors ${
                  isDarkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-900/10 hover:bg-gray-900/20"
                } backdrop-blur-sm`}
              >
                <Github size={24} />
              </motion.div>
            </Link>
            <Link href="https://www.linkedin.com/in/kushagra-gupta-a1b6b4291/" target="_blank">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`p-3 rounded-full transition-colors ${
                  isDarkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-900/10 hover:bg-gray-900/20"
                } backdrop-blur-sm`}
              >
                <Linkedin size={24} />
              </motion.div>
            </Link>
            <Link href="https://leetcode.com/u/_Kushagra_Gupta_7/" target="_blank">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`p-3 rounded-full transition-colors ${
                  isDarkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-900/10 hover:bg-gray-900/20"
                } backdrop-blur-sm`}
              >
                <Code size={24} />
              </motion.div>
            </Link>
            <Link href="mailto:mail2kush13@gmail.com">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`p-3 rounded-full transition-colors ${
                  isDarkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-900/10 hover:bg-gray-900/20"
                } backdrop-blur-sm`}
              >
                <Mail size={24} />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center space-x-4">
            <Link href="#contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 border rounded-full transition-all duration-300 ${
                  isDarkMode
                    ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                    : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                CONTACT ME
              </motion.div>
            </Link>
            <div
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 opacity-60 cursor-not-allowed border-2 border-dashed ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-cyan-500 text-black border-blue-400"
                  : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-blue-600"
              }`}
              title="Resume download temporarily unavailable"
            >
              <Download size={20} />
              <span>RESUME</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Terminal Navigation - Centered Below Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <Terminal />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About</h2>
            <div
              className={`w-24 h-1 mx-auto mb-8 ${
                isDarkMode ? "bg-gradient-to-r from-blue-400 to-cyan-500" : "bg-gradient-to-r from-blue-600 to-cyan-600"
              }`}
            ></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div
                  className={`w-80 h-80 mx-auto rounded-full flex items-center justify-center backdrop-blur-sm border ${
                    isDarkMode
                      ? "bg-gradient-to-br from-blue-400/20 to-cyan-500/20 border-white/10"
                      : "bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-gray-900/10"
                  }`}
                >
                  <Image
                    src="/kushagra-photo.jpg"
                    alt="Kushagra Gupta"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                I'm an enthusiastic B.Tech Computer Science Engineering student at Bennett University, with a deep
                interest in cybersecurity and secure software development. My goal is to build a career where I can
                combine technical knowledge with an analytical mindset to defend digital systems and infrastructure.
              </p>
              <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                I'm currently exploring ethical hacking, vulnerability detection, and full-stack development, with
                hands-on experience from real-world cyber simulations and AI-driven projects. I believe in writing clean
                code, continuous learning, and using technology to create impact.
              </p>
              <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Alongside tech, I'm passionate about music, with over a decade of Keyboard playing experience. I find balance through music and believe that a
                curious, well-rounded mind builds the most resilient systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
            <div
              className={`w-24 h-1 mx-auto mb-8 ${
                isDarkMode ? "bg-gradient-to-r from-blue-400 to-cyan-500" : "bg-gradient-to-r from-blue-600 to-cyan-600"
              }`}
            ></div>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <GraduationCap className={`mt-1 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} size={24} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className={`font-semibold mb-1 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                      {edu.institution}
                    </p>
                    <p className={`text-base font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{edu.period}</p>
                    <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
            <div
              className={`w-24 h-1 mx-auto mb-8 ${
                isDarkMode ? "bg-gradient-to-r from-blue-400 to-cyan-500" : "bg-gradient-to-r from-blue-600 to-cyan-600"
              }`}
            ></div>
          </motion.div>

          {/* ShadowFox Security Internship Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`relative p-6 rounded-lg backdrop-blur-sm border transition-all duration-300 mt-6 select-none ${
              isDarkMode
                ? "bg-white/5 border-white/10 hover:bg-white/10"
                : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10"
            }`}
          >
            {/* Top right LinkedIn logo */}
            <a href="https://www.linkedin.com/company/shadowfoxinfo/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
              </svg>
            </a>
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-6">
              <img
                src="/358245f368dd458f96407156b51bd9f3.webp"
                alt="ShadowFox Security Logo"
                className="w-16 h-16 object-contain rounded-full border border-white/20 bg-white/10"
              />
              <div className="flex-1 text-left w-full">
                <h3 className="text-xl font-semibold mb-1">Cybersecurity Intern</h3>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base font-semibold text-blue-500">ShadowFox Security (Remote)</span>
                </div>
                <div className="text-sm font-medium text-gray-400 mb-2">Jul 2025 - Aug 2025 . 1 mo</div>
                <p className="text-sm leading-relaxed">
                  Participated in a hands-on cybersecurity internship with a strong focus on offensive security, vulnerability analysis, and penetration testing. Completed practical tasks involving reconnaissance, encrypted data cracking, payload creation, and wireless network attacks. Developed skills in tools like Wireshark, Nmap, Metasploit, and VeraCrypt while working in isolated VM environments. Gained real-world experience through labs on platforms like TryHackMe.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Forage Virtual Job Simulations Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`relative p-6 rounded-lg backdrop-blur-sm border transition-all duration-300 mt-6 cursor-pointer select-none ${
              isDarkMode
                ? "bg-white/5 border-white/10 hover:bg-white/10"
                : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10"
            }`}
            onClick={() => {
              const certSection = document.getElementById("certifications");
              if (certSection) {
                certSection.scrollIntoView({ behavior: "smooth" });
              }
              setExpandedCertifications("forage");
            }}
          >
            {/* Top right Go to Certifications button */}
            <button
              className="absolute top-4 right-3 px-3 py-2 rounded bg-blue-500 text-white text-sm font-bold shadow hover:bg-blue-600 transition"
              onClick={e => {
                e.stopPropagation();
                const certSection = document.getElementById("certifications");
                if (certSection) {
                  certSection.scrollIntoView({ behavior: "smooth" });
                }
                setExpandedCertifications("forage");
              }}
            >
              Go to Certifications
            </button>
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-6">
              <img
                src="/forage-logo-thumbnail.png"
                alt="Forage Virtual Job Simulations"
                className="w-16 h-16 object-contain rounded-full border border-white/20 bg-white/10"
              />
              <div className="flex-1 text-left w-full">
                <h3 className="text-xl font-semibold mb-1">Forage Virtual Job Simulations</h3>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base font-semibold text-blue-500">Tata Group | Mastercard | Deloitte | Datacom</span>
                </div>
               
                <p className="text-sm leading-relaxed">
                  Completed multiple virtual job simulations focused on cybersecurity analysis, security awareness, and risk assessment, gaining practical experience with real-world scenarios and industry tools.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills</h2>
            <div
              className={`w-24 h-1 mx-auto mb-8 ${
                isDarkMode ? "bg-gradient-to-r from-blue-400 to-cyan-500" : "bg-gradient-to-r from-blue-600 to-cyan-600"
              }`}
            ></div>
          </motion.div>
            {/* Development & Coding Skills */}
            <h3 className="text-2xl font-semibold mb-4 text-center">Development & Coding</h3>
            <div className="relative overflow-hidden mb-12">
              <motion.div
                className="flex space-x-6 pl-8"
                animate={{ x: [0, -100 * devSkillsLoop.length] }}
                transition={{
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                style={{ width: `${devSkillsLoop.length * 200}px` }}
              >
                {devSkillsLoop.map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex-shrink-0 min-w-[160px] w-40 h-32 p-4 text-center rounded-lg backdrop-blur-sm border transition-all duration-300 flex flex-col items-center justify-center ${
                      isDarkMode
                        ? "bg-white/5 border-white/10 hover:bg-white/10"
                        : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10"
                    }`}
                  >
                    <div className="mb-2">{skill.icon && skill.icon}</div>
                    <div className="font-semibold text-lg">{skill.name}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            {/* Cybersecurity Skills */}
            <h3 className="text-2xl font-semibold mb-4 text-center">Cybersecurity</h3>
          <div className="relative overflow-hidden">
            <motion.div
                className="flex space-x-6 pl-8"
                animate={{ x: [0, -100 * cyberSkillsLoop.length] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
                style={{ width: `${cyberSkillsLoop.length * 200}px` }}
            >
                {cyberSkillsLoop.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex-shrink-0 min-w-[160px] w-40 h-32 p-4 text-center rounded-lg backdrop-blur-sm border transition-all duration-300 flex flex-col items-center justify-center ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10"
                  }`}
                >
                    <div className="mb-2">{skill.icon && skill.icon}</div>
                    <div className="font-semibold text-lg">{skill.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
            <div
              className={`w-24 h-1 mx-auto mb-8 ${
                isDarkMode ? "bg-gradient-to-r from-blue-400 to-cyan-500" : "bg-gradient-to-r from-blue-600 to-cyan-600"
              }`}
            ></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className={`rounded-lg backdrop-blur-sm border transition-all duration-300 overflow-hidden ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10"
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Link href={project.demo} target="_blank">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`p-2 rounded-full transition-colors ${
                          isDarkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-900/10 hover:bg-gray-900/20"
                        }`}
                      >
                        <ExternalLink size={16} />
                      </motion.div>
                    </Link>
                  </div>
                  <p className={`text-sm mb-3 font-medium ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                    {project.period}
                  </p>
                  <p className={`mb-4 leading-relaxed text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded-full text-xs border ${
                          isDarkMode
                            ? "bg-blue-400/20 text-blue-300 border-blue-400/30"
                            : "bg-purple-600/20 text-purple-700 border-purple-600/30"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-6">
                    <Link href={project.github} target="_blank">
                      <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`p-3 rounded-full transition-colors ${
                          isDarkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-900/10 hover:bg-gray-900/20"
                        }`}
                      >
                        <Github size={20} />
                      </motion.div>
                    </Link>
                    <Link href={project.linkedin} target="_blank">
                      <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`p-3 rounded-full transition-colors ${
                          isDarkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-900/10 hover:bg-gray-900/20"
                        }`}
                      >
                        <Linkedin size={20} />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h2>
            <div
              className={`w-24 h-1 mx-auto mb-8 ${
                isDarkMode ? "bg-gradient-to-r from-blue-400 to-cyan-500" : "bg-gradient-to-r from-blue-600 to-cyan-600"
              }`}
            ></div>
          </motion.div>
            {Object.keys(certifications).length > 0 ? (
              <div className="flex flex-col gap-6">
                {Object.entries(certifications).map(([folderId, folder], index) => {
                  const certFolder: any = folder;
                  const isExpanded = expandedCertifications === folderId;
                  return (
              <motion.div
                key={folderId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                      className={`rounded-2xl shadow-xl border transition-all duration-300 overflow-hidden bg-white/5 border-white/10 hover:shadow-2xl hover:scale-[1.01] ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10"
                }`}
              >
                      {/* Only the header toggles the accordion */}
                      <div
                        className="flex items-center gap-4 p-6 cursor-pointer select-none"
                        onClick={() => setExpandedCertifications(isExpanded ? null : folderId)}
                        tabIndex={0}
                        role="button"
                        aria-expanded={isExpanded}
                        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setExpandedCertifications(isExpanded ? null : folderId) }}
                      >
                        <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                            src={certFolder.cover}
                            alt={certFolder.title}
                            fill
                            className="object-contain rounded-xl bg-white dark:bg-gray-900 p-2"
                      />
                    </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{certFolder.title}</h3>
                          <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{certFolder.certificates[0]?.description || "Professional certification folder."}</p>
                  </div>
                        <ChevronRight size={28} className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : "rotate-0"}`} />
                        </div>
                      <AnimatePresence>
                        {isExpanded && (
                      <motion.div
                            className=""
                          >
                            <div className="mb-4" />
                            <ul className="space-y-6 mb-6">
                              {certFolder.certificates.map((cert: any, idx: number) => (
                                <li key={idx} className={`border-b border-white/10 pb-4 last:border-b-0 last:pb-0 min-h-32 py-6 px-8 ${cert.isSpecialization ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-400/20 rounded-lg p-6' : ''}`}>
                                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <div>
                                      <h4 className={`text-lg font-semibold ${cert.isSpecialization ? 'text-blue-400' : ''}`}>{cert.title}</h4>
                                      <p className="text-sm text-gray-400">{cert.issuer}{cert.isSpecialization && ' (Specialization)'}</p>
                        </div>
                                    <div className="text-sm font-medium text-blue-500">{cert.date}</div>
                          </div>
                                  <p className="mt-2 text-gray-300 text-sm">{cert.description}</p>
                                  <a
                                    href={cert.verifyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center mt-2 text-blue-400 hover:underline gap-1 text-sm"
                                  >
                                    <ExternalLink size={16} /> Verify{cert.isSpecialization ? ' Specialization' : ''}
                                  </a>
                                </li>
                              ))}
                            </ul>
                </motion.div>
                        )}
                      </AnimatePresence>
              </motion.div>
                  )
                })}
          </div>
            ) : (
              <div className="text-center text-gray-400 py-12">No certifications to display yet.</div>
            )}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Achievements</h2>
            <div
              className={`w-24 h-1 mx-auto mb-8 ${
                isDarkMode ? "bg-gradient-to-r from-blue-400 to-cyan-500" : "bg-gradient-to-r from-blue-600 to-cyan-600"
              }`}
            ></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg backdrop-blur-sm border transition-all duration-300 overflow-hidden ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10"
                }`}
              >
                {/* Certificate Image */}
                {achievement.image && (
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={achievement.image || "/placeholder.svg"}
                      alt={achievement.title}
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105 p-4"
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <Award
                      className={`mt-1 ${
                        achievement.type === "music"
                          ? isDarkMode
                            ? "text-purple-400"
                            : "text-purple-600"
                          : isDarkMode
                            ? "text-blue-400"
                            : "text-blue-600"
                      }`}
                      size={24}
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p
                        className={`text-sm mb-2 font-medium ${
                          achievement.type === "music"
                            ? isDarkMode
                              ? "text-purple-400"
                              : "text-purple-600"
                            : isDarkMode
                              ? "text-blue-400"
                              : "text-blue-600"
                        }`}
                      >
                        {achievement.date}
                      </p>
                      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <div
              className={`w-24 h-1 mx-auto mb-8 ${
                isDarkMode ? "bg-gradient-to-r from-blue-400 to-cyan-500" : "bg-gradient-to-r from-blue-600 to-cyan-600"
              }`}
            ></div>
            <p className={`text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Let's connect and create something amazing together!
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <motion.a
                  href="mailto:mail2kush13@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-3 p-4 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10"
                  }`}
                >
                  <Mail size={24} className={isDarkMode ? "text-blue-400" : "text-blue-600"} />
                  <span>mail2kush13@gmail.com</span>
                </motion.a>

                <motion.a
                  href="tel:+919717559194"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-3 p-4 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10"
                  }`}
                >
                  <Phone size={24} className={isDarkMode ? "text-blue-400" : "text-blue-600"} />
                  <span>+91 9717559194</span>
                </motion.a>
              </div>

              {/* Contact Form */}
              <motion.div
                className={`p-6 rounded-lg backdrop-blur-sm border ${
                  isDarkMode ? "bg-white/5 border-white/10" : "bg-gray-900/5 border-gray-900/10"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                  <form action="https://formspree.io/f/mdkzjwaj" method="POST" className="space-y-4">
                  <div>
                    <input
                      type="text"
                        name="name"
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                      className={`w-full p-3 rounded-lg border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                          : "bg-gray-900/10 border-gray-900/20 text-gray-900 placeholder-gray-500 focus:border-blue-600"
                      } focus:outline-none focus:ring-2 focus:ring-blue-400/50`}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className={`w-full p-3 rounded-lg border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                          : "bg-gray-900/10 border-gray-900/20 text-gray-900 placeholder-gray-500 focus:border-blue-600"
                      } focus:outline-none focus:ring-2 focus:ring-blue-400/50`}
                    />
                  </div>
                  <div>
                    <textarea
                        name="message"
                      placeholder="Your Message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                      rows={4}
                      className={`w-full p-3 rounded-lg border transition-all duration-300 resize-none ${
                        isDarkMode
                          ? "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                          : "bg-gray-900/10 border-gray-900/20 text-gray-900 placeholder-gray-500 focus:border-blue-600"
                      } focus:outline-none focus:ring-2 focus:ring-blue-400/50`}
                    />
                  </div>
                  <div className="flex space-x-2">
                    <motion.button
                        type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                        isDarkMode
                          ? "bg-gradient-to-r from-blue-400 to-blue-500 text-black hover:shadow-lg hover:shadow-blue-400/25"
                          : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-600/25"
                      }`}
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </motion.button>
                    <motion.button
                        type="button"
                        onClick={() => {
                          window.open('https://wa.me/919717559194?text=Hi%20Kushagra%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!', '_blank');
                        }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                        isDarkMode
                          ? "bg-gradient-to-r from-green-400 to-green-500 text-black hover:shadow-lg hover:shadow-green-400/25"
                          : "bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg hover:shadow-green-600/25"
                      }`}
                    >
                        <SiWhatsapp size={20} />
                      <span>WhatsApp</span>
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>

            <div className="flex justify-center space-x-6">
              <Link href="https://github.com/Kushagra-Gupta-755" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`p-4 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10"
                  }`}
                >
                  <Github size={28} />
                </motion.div>
              </Link>
              <Link href="https://www.linkedin.com/in/kushagra-gupta-a1b6b4291/" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`p-4 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10"
                  }`}
                >
                  <Linkedin size={28} />
                </motion.div>
              </Link>
              <Link href="https://leetcode.com/u/_Kushagra_Gupta_7/" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`p-4 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10"
                  }`}
                >
                  <Code size={28} />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDarkMode ? "border-white/10" : "border-gray-900/10"}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            © 2025 Kushagra Gupta | Develop. Secure. Compose.
          </p>
        </div>
      </footer>
    </div>
    </>
  )
}
