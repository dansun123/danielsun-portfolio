"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Lightbulb, Rocket, Trophy } from "lucide-react"
import { motion } from "framer-motion"

const achievements = [
  { icon: Rocket, text: "YC W24 Founder" },
  { icon: Trophy, text: "MIT CS & Math '22" },
  { icon: Code, text: "Ex-Jane Street Trader" },
  { icon: Lightbulb, text: "USA Math Olympiad" },
]

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/images/profile-waterfall.jpg"
                  alt="Daniel Sun"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Hi, I&apos;m <span className="gradient-text">Daniel Sun</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Co-founder & CEO of MathDash | YC W24 | Building the future of math education
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift"
              >
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>

          {/* Achievement Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="bg-card p-6 rounded-lg border hover-lift"
                >
                  <Icon className="h-8 w-8 text-primary mb-3" />
                  <p className="font-medium">{achievement.text}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">
              About Me
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">
                I&apos;m a recent MIT graduate with a B.S. in Computer Science and Engineering. 
                My journey in tech started late but has been incredibly rewarding - from 
                learning web development in 2020 to creating multiple successful projects 
                that solve real problems.
              </p>
              <p className="mb-4">
                I&apos;ve worked as a Quantitative Trading Intern at Akuna Capital, developed 
                features for trading models, and conducted research at MIT Quest for Intelligence. 
                My technical expertise spans full-stack development, machine learning, and 
                data science.
              </p>
              <p>
                Beyond coding, I&apos;m passionate about education, social impact, and games. 
                I love dancing, climbing, and continuously learning new things. Currently 
                based in Boston, I frequently travel to New York and San Diego.
              </p>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/about"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn more about me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border hover-lift">
                <h3 className="text-xl font-semibold mb-2">Interstellar</h3>
                <p className="text-muted-foreground mb-4">
                  Social forum for MIT students to share information relevant to classwork, 
                  including useful links, due dates, and connecting with classmates.
                </p>
                <Link href="/projects" className="text-primary hover:underline">
                  View Project →
                </Link>
              </div>
              <div className="bg-card p-6 rounded-lg border hover-lift">
                <h3 className="text-xl font-semibold mb-2">QuickMaths</h3>
                <p className="text-muted-foreground mb-4">
                  Gamified platform for improving arithmetic skills and speed, making 
                  math practice engaging and fun for learners of all levels.
                </p>
                <Link href="/projects" className="text-primary hover:underline">
                  View Project →
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
