"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, MapPin, Send, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/dansun123",
    icon: Github,
    username: "@dansun123",
    color: "hover:text-gray-900 dark:hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-sun-440493171/",
    icon: Linkedin,
    username: "Daniel Sun",
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/DanielS99540544",
    icon: Twitter,
    username: "@DanielS99540544",
    color: "hover:text-sky-500",
  },
  {
    name: "Email",
    href: "mailto:daniel@mathdash.com",
    icon: Mail,
    username: "daniel@mathdash.com",
    color: "hover:text-red-600",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const mailtoLink = `mailto:daniel@mathdash.com?subject=${encodeURIComponent(
      formData.subject || "Contact from Portfolio"
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I&apos;m always excited to connect with fellow developers, potential collaborators, 
            or anyone interested in discussing technology and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-card p-8 rounded-lg border">
              <h2 className="text-2xl font-heading font-semibold mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 mr-2 text-primary" />
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Project Collaboration"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Location */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                Location
              </h3>
              <p className="text-muted-foreground">
                Currently based in <span className="font-medium">San Francisco, California</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Frequently traveling to New York and San Diego
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Open to remote opportunities worldwide
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        target={link.name !== "Email" ? "_blank" : undefined}
                        rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                        className={`flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-all group ${link.color}`}
                      >
                        <div className="flex items-center">
                          <Icon className="h-5 w-5 mr-3" />
                          <div>
                            <p className="font-medium">{link.name}</p>
                            <p className="text-sm text-muted-foreground">{link.username}</p>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          →
                        </span>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <h3 className="text-xl font-semibold">Available for Opportunities</h3>
              </div>
              <p className="text-muted-foreground">
                I&apos;m currently open to:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Full-time positions in software engineering
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Interesting project collaborations
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Consulting on education technology
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Speaking engagements and mentorship
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you have a project in mind, need technical expertise, or just want to chat 
              about technology and innovation, I&apos;m always happy to connect!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}