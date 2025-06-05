"use client"

import { motion } from "framer-motion"
import { FaDownload, FaFileAlt, FaChartBar, FaUsers, FaMoneyBillWave } from "react-icons/fa"
import Link from "next/link"

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      {/* Header */}
      <header className="bg-emerald-900 p-4 sticky top-0 z-50">
        <nav className="container mx-auto">
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-6 text-sm sm:text-base md:text-lg">
            <li>
              <Link href="/" className="hover:text-emerald-300 transition-colors px-2 py-1">
                Home
              </Link>
            </li>
            {["About", "Experience", "Education", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`/#${item.toLowerCase()}`} className="hover:text-emerald-300 transition-colors px-2 py-1">
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/download" className="text-emerald-300 border-b-2 border-emerald-300 px-2 py-1">
                Templates
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="py-20 bg-emerald-950">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-8 text-white"
            >
              Digital Media Planning & Buying Templates
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-12 max-w-3xl mx-auto text-center text-emerald-200"
            >
              Download professional templates to streamline your digital media planning and buying processes. These
              resources are designed to help marketers create effective campaigns and optimize their media spend.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Media Planning Template */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-emerald-800 rounded-lg p-4 hover:bg-emerald-700 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-600 p-2 rounded-full mr-3">
                    <FaChartBar className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-L font-semibold text-white">Media Planning Template</h3>
                    <p className="text-emerald-300 text-sm">Excel Format • 2.5 MB</p>
                  </div>
                </div>
                <p className="text-emerald-200 mb-4 text-sm">
                  A comprehensive template for planning your digital media campaigns across multiple channels. Includes
                  budget allocation, timeline planning, and channel strategy sections.
                </p>
                <div className="space-y-1 mb-4">
                  <div className="flex items-center text-emerald-100 text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Channel mix planning worksheet
                  </div>
                  <div className="flex items-center text-emerald-100 text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Budget allocation calculator
                  </div>
                  <div className="flex items-center text-emerald-100 text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Campaign timeline planner
                  </div>
                </div>
                <a
                  href="/files/media-planning-template.xlsx"
                  download
                  className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  <FaDownload className="mr-2" />
                  Download Template
                </a>
              </motion.div>

              {/* Media Buying Guide */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-emerald-800 rounded-lg p-4 hover:bg-emerald-700 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-600 p-2 rounded-full mr-3">
                    <FaMoneyBillWave className="text-white text-" />
                  </div>
                  <div>
                    <h3 className="text-L font-semibold text-white">Media Buying Guide</h3>
                    <p className="text-emerald-300 text-sm">PDF Format • 8 MB</p>
                  </div>
                </div>
                <p className="text-emerald-200 mb-4 text-sm">
                  A detailed guide on digital media buying strategies, negotiation tactics, and optimization techniques.
                  Learn how to maximize your ROI across different platforms.
                </p>
                <div className="space-y-1 mb-4">
                  <div className="flex items-center text-emerald-100 text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Platform-specific buying strategies
                  </div>
                  <div className="flex items-center text-emerald-100 text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Negotiation tactics and best practices
                  </div>
                  <div className="flex items-center text-emerald-100 text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Performance optimization techniques
                  </div>
                </div>
                <a
                  href="/files/media-buying-guide.pdf"
                  download
                  className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  <FaDownload className="mr-2" />
                  Download Guide
                </a>
              </motion.div>

              {/* Campaign Performance Tracker */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-emerald-800 rounded-lg p-4 hover:bg-emerald-700 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-600 p-2 rounded-full mr-3">
                    <FaFileAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Campaign Performance Tracker</h3>
                    <p className="text-emerald-300 text-sm">Excel Format • 3.2 MB</p>
                  </div>
                </div>
                <p className="text-emerald-200 mb-4 text-sm">
                  Track and analyze your campaign performance with this comprehensive dashboard template. Visualize key
                  metrics and identify optimization opportunities.
                </p>
                <div className="space-y-1 mb-4">
                  <div className="flex items-center text-emerald-100 text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    KPI tracking dashboard
                  </div>
                  <div className="flex items-center text-emerald-100 text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Automated performance charts
                  </div>
                  <div className="flex items-center text-emerald-100 text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Weekly and monthly reporting templates
                  </div>
                </div>
                <a
                  href="/files/campaign-performance-tracker.xlsx"
                  download
                  className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  <FaDownload className="mr-2" />
                  Download Tracker
                </a>
              </motion.div>

              {/* Audience Targeting Framework */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-emerald-800 rounded-lg p-4 hover:bg-emerald-700 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-600 p-2 rounded-full mr-3">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Audience Targeting Framework</h3>
                    <p className="text-emerald-300 text-sm">PowerPoint Format • 5.8 MB</p>
                  </div>
                </div>
                <p className="text-emerald-200 mb-4 text-sm">
                  A structured framework for developing detailed audience targeting strategies. Includes persona
                  development templates and targeting matrices for different platforms.
                </p>
                <div className="space-y-1 mb-4">
                  <div className="flex items-center text-emerald-100 text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Audience persona templates
                  </div>
                  <div className="flex items-center text-emerald-100 text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Platform-specific targeting matrices
                  </div>
                  <div className="flex items-center text-emerald-100 text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Audience overlap analysis tools
                  </div>
                </div>
                <a
                  href="/files/audience-targeting-framework.pptx"
                  download
                  className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  <FaDownload className="mr-2" />
                  Download Framework
                </a>
              </motion.div>
            </div>

            {/* Additional Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <div className="bg-emerald-800 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-3">Need Custom Templates?</h3>
                <p className="text-emerald-200 mb-4 text-sm">
                  Looking for customized media planning and buying templates for your specific industry or campaign
                  needs? I can create tailored solutions to help optimize your digital marketing efforts.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900 py-4 text-center text-sm sm:text-base">
        <p>&copy; {new Date().getFullYear()} Ye Htet Aung. All rights reserved.</p>
      </footer>
    </div>
  )
}
