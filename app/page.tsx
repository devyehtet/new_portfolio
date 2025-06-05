"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaChartLine,
  FaBullseye,
  FaUsers,
  FaSearchDollar,
} from "react-icons/fa"
import { sendEmail } from "./actions"

export default function Home() {
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(formData)

    setFormStatus(result)
    setIsSubmitting(false)

    if (result.success) {
      event.currentTarget.reset()
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-emerald-950 text-white">
      <header className="bg-emerald-900 p-4 sticky top-0 z-50">
        <nav className="container mx-auto">
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-6 text-sm sm:text-base md:text-lg">
            {["About", "Experience", "Education", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-emerald-300 transition-colors px-2 py-1">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <Link href="/download" className="hover:text-emerald-300 transition-colors px-2 py-1">
                Templates
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        {/* About Section */}
        <section id="about" className="text-center py-12 sm:py-16 md:py-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <Image
              src="/YHA.jpeg?height=200&width=200"
              alt="Ye Htet Aung"
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-emerald-500"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4"
          >
            Ye Htet Aung
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl text-emerald-400 mb-3 sm:mb-4"
          >
            Digital Marketing Manager
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base"
          >
            Digital Marketing Expert with extensive experience in crafting and executing data-driven strategies.
            Specialized in campaign optimization, performance marketing, and delivering measurable results across
            multiple platforms.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center space-x-4 sm:space-x-6"
          >
            {[
              { Icon: FaGithub, href: "https://github.com/devyehtet", label: "GitHub" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/y3htetaung/", label: "LinkedIn" },
              { Icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61559225011515", label: "Facebook" },
              { Icon: FaEnvelope, href: "mailto:info@yehtet.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl hover:text-emerald-400 transition-colors"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-emerald-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-16"
            >
              Experience
            </motion.h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-emerald-800 p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Digital Marketing Manager</h3>
                  <p className="text-emerald-300">2021 - Present</p>
                </div>
                <p className="text-emerald-200 mb-4">XYZ Digital Agency, Chiang Mai</p>
                <ul className="list-disc pl-5 space-y-2 text-emerald-100">
                  <li>Led digital marketing strategies for 15+ clients across various industries</li>
                  <li>
                    Increased client conversion rates by an average of 35% through data-driven campaign optimization
                  </li>
                  <li>Managed a team of 5 specialists and coordinated cross-functional projects</li>
                  <li>Developed comprehensive media planning and buying strategies with 25% improved ROI</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-emerald-800 p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Digital Marketing Specialist</h3>
                  <p className="text-emerald-300">2018 - 2021</p>
                </div>
                <p className="text-emerald-200 mb-4">ABC Marketing Solutions, Bangkok</p>
                <ul className="list-disc pl-5 space-y-2 text-emerald-100">
                  <li>Executed paid advertising campaigns across Google, Facebook, and LinkedIn platforms</li>
                  <li>Optimized campaign performance resulting in 40% reduction in cost-per-acquisition</li>
                  <li>Conducted market research and competitor analysis to inform strategic decisions</li>
                  <li>Created detailed media plans and buying strategies for clients in retail and hospitality</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-emerald-800 p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Marketing Coordinator</h3>
                  <p className="text-emerald-300">2016 - 2018</p>
                </div>
                <p className="text-emerald-200 mb-4">Global Reach Inc., Singapore</p>
                <ul className="list-disc pl-5 space-y-2 text-emerald-100">
                  <li>Assisted in the development and implementation of marketing campaigns</li>
                  <li>Managed social media accounts and created engaging content</li>
                  <li>Coordinated with media buying agencies to optimize advertising spend</li>
                  <li>Analyzed campaign metrics and prepared performance reports</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-emerald-950">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-16"
            >
              Education
            </motion.h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-emerald-800 p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Master of Digital Marketing</h3>
                  <p className="text-emerald-300">2015 - 2016</p>
                </div>
                <p className="text-emerald-200">University of Digital Arts, Bangkok</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-emerald-800 p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Bachelor of Business Administration</h3>
                  <p className="text-emerald-300">2011 - 2015</p>
                </div>
                <p className="text-emerald-200">Chiang Mai University, Thailand</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-semibold text-center mb-8">Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-emerald-800/50 p-4 rounded-lg text-center">
                  <p className="font-semibold">Google Ads Certification</p>
                  <p className="text-emerald-300 text-sm mt-1">Google</p>
                </div>
                <div className="bg-emerald-800/50 p-4 rounded-lg text-center">
                  <p className="font-semibold">Meta Blueprint Certification</p>
                  <p className="text-emerald-300 text-sm mt-1">Meta</p>
                </div>
                <div className="bg-emerald-800/50 p-4 rounded-lg text-center">
                  <p className="font-semibold">Digital Marketing Specialist</p>
                  <p className="text-emerald-300 text-sm mt-1">HubSpot Academy</p>
                </div>
                <div className="bg-emerald-800/50 p-4 rounded-lg text-center">
                  <p className="font-semibold">Advanced Media Planning</p>
                  <p className="text-emerald-300 text-sm mt-1">IAB</p>
                </div>
                <div className="bg-emerald-800/50 p-4 rounded-lg text-center">
                  <p className="font-semibold">Programmatic Buying Specialist</p>
                  <p className="text-emerald-300 text-sm mt-1">The Trade Desk</p>
                </div>
                <div className="bg-emerald-800/50 p-4 rounded-lg text-center">
                  <p className="font-semibold">Analytics Certification</p>
                  <p className="text-emerald-300 text-sm mt-1">Google</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-emerald-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-16"
            >
              Skills
            </motion.h2>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Technical Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Technical Skills</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Media Planning", level: 95 },
                      { name: "Media Buying", level: 90 },
                      { name: "Google Ads", level: 85 },
                      { name: "Facebook Ads Manager", level: 90 },
                      { name: "SEO", level: 80 },
                      { name: "Data Analysis", level: 85 },
                    ].map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-emerald-300">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-emerald-800/30 rounded-full h-2.5">
                          <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Professional Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Professional Skills</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "Campaign Strategy", icon: <FaChartLine className="text-emerald-400 text-3xl mb-2" /> },
                      {
                        name: "Target Audience Analysis",
                        icon: <FaBullseye className="text-emerald-400 text-3xl mb-2" />,
                      },
                      { name: "Client Communication", icon: <FaUsers className="text-emerald-400 text-3xl mb-2" /> },
                      {
                        name: "Budget Optimization",
                        icon: <FaSearchDollar className="text-emerald-400 text-3xl mb-2" />,
                      },
                    ].map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-emerald-800/50 p-4 rounded-lg flex flex-col items-center text-center"
                      >
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Tools & Platforms</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Google Analytics",
                        "Meta Business Suite",
                        "SEMrush",
                        "Ahrefs",
                        "Mailchimp",
                        "HubSpot",
                        "DV360",
                        "The Trade Desk",
                        "Google Campaign Manager",
                      ].map((tool) => (
                        <span key={tool} className="bg-emerald-800 px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-emerald-950">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-8"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-12 max-w-2xl mx-auto text-center"
            >
              Based in Chiang Mai, Thailand. Open to new opportunities and collaborations.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-emerald-400 text-2xl mr-4 mt-1">📍</div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-emerald-200">Chiang Mai, Thailand</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-emerald-400 text-2xl mr-4 mt-1">📞</div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-emerald-200">+66 (0) 941-567-809</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-emerald-400 text-2xl mr-4 mt-1">✉️</div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-emerald-200">info@yehtet.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Available For:</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-emerald-800 px-3 py-1 rounded-full text-sm">Freelance Projects</span>
                    <span className="bg-emerald-800 px-3 py-1 rounded-full text-sm">Consulting</span>
                    <span className="bg-emerald-800 px-3 py-1 rounded-full text-sm">Speaking Engagements</span>
                    <span className="bg-emerald-800 px-3 py-1 rounded-full text-sm">Workshops</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-emerald-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 text-emerald-900 bg-emerald-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-emerald-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 text-emerald-900 bg-emerald-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-emerald-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 text-emerald-900 bg-emerald-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-emerald-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 text-emerald-900 bg-emerald-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 text-white font-bold py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
                {formStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-md text-center ${
                      formStatus.success
                        ? "bg-green-900/50 text-green-400 border border-green-700"
                        : "bg-red-900/50 text-red-400 border border-red-700"
                    }`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900 py-4 text-center text-sm sm:text-base">
        <p>&copy; {new Date().getFullYear()} Ye Htet Aung. All rights reserved.</p>
      </footer>
    </div>
  )
}
