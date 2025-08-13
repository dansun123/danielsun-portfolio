"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Calendar, Code } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Interstellar",
    subtitle: "HackLodge 2020 Boston",
    description: "Created a social forum for MIT students to share information relevant to classwork. Students can share useful links, due dates, and connect with friends in their classes.",
    link: "https://interstellar.live",
    github: null,
    date: "2020",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "Education",
    featured: true,
    image: "/images/projects/interstellar.png",
  },
  {
    title: "QuickMaths",
    subtitle: "Personal Project",
    description: "Built for advancing math education by offering a gamified way for people to improve their arithmetic skills and speed to breeze through the boring parts of math.",
    link: "http://quickmaths.live/",
    github: null,
    date: "2020",
    technologies: ["React", "JavaScript", "CSS", "Game Design"],
    category: "Education",
    featured: true,
    image: "/images/projects/quickmaths.png",
  },
  {
    title: "Partyy",
    subtitle: "Personal Project",
    description: "Built for improving song recognition so I could more quickly understand song references in conversations with friends.",
    link: "http://partyy.life/",
    github: null,
    date: "2020",
    technologies: ["React", "Spotify API", "Node.js"],
    category: "Entertainment",
    featured: false,
    image: "/images/projects/partyy.png",
  },
  {
    title: "DJZoomer",
    subtitle: "Personal Project",
    description: "Built for studying song lyrics so I wouldn't embarrass myself while singing the wrong lyrics in front of friends during karaoke sessions.",
    link: "https://djzoomer.herokuapp.com/",
    github: null,
    date: "2020",
    technologies: ["React", "Lyrics API", "Heroku"],
    category: "Entertainment",
    featured: false,
    image: "/images/projects/djzoomer.png",
  },
  {
    title: "CardBox",
    subtitle: "Work in Progress",
    description: "A sandbox mode interface for playing any card game online. Design and create your own rules in our custom programming language to make your own games.",
    link: null,
    github: null,
    date: "2020-Present",
    technologies: ["React", "WebSocket", "Game Engine", "Custom DSL"],
    category: "Gaming",
    featured: true,
    image: "/images/projects/cardbox.png",
  },
]

const categories = ["All", "Education", "Entertainment", "Gaming"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

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
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I&apos;ve built to solve real problems and explore new technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full font-medium transition-all",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border hover:bg-muted"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={cn(
                "bg-card rounded-lg border overflow-hidden hover-lift group",
                project.featured && "md:col-span-2 lg:col-span-1"
              )}
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                {project.featured && (
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-3">
                    Featured
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-muted-foreground hover:text-primary"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Link>
                    )}
                  </div>
                  <span className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-card p-8 rounded-lg border">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Interested in collaborating?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to work on interesting projects, especially those 
              focused on social impact, education, and innovative technology solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift"
            >
              <Code className="mr-2 h-5 w-5" />
              Let&apos;s Build Something Together
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}