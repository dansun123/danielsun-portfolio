"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Book, Award, Gamepad2, Mountain } from "lucide-react"

const timeline = [
  { year: "2005", event: "Got my first GameBoy with Pokemon Emerald - my gateway into technology", icon: Gamepad2 },
  { year: "2010", event: "Won first place in a statewide chess tournament", icon: Award },
  { year: "2015", event: "Learned Java in AP Computer Science, coded my own Minesweeper", icon: Book },
  { year: "2016", event: "Qualified for Math Olympiad Program (MOP) and won Fish tournament", icon: Award },
  { year: "2018", event: "Got accepted into MIT - dream come true!", icon: Book },
  { year: "2019", event: "Interned at Akuna Capital as Quantitative Trading Intern", icon: Calendar },
  { year: "2020", event: "Started web development journey, built first website", icon: Book },
  { year: "2022", event: "Graduated from MIT with B.S. in Computer Science", icon: Award },
]

const interests = [
  "Dancing", "Singing", "Climbing & Urban Exploring", "Ninja Warrior",
  "Poker", "Learning New Things", "Books & Reading", "Dogs"
]

const funFacts = [
  "I record every action of my day in Google Calendar with color codes",
  "My first name was almost 'Bright' (Bright Sun)",
  "Learned I was lactose intolerant after drinking 3 glasses of milk daily for 18 years",
  "I can solve a Rubik's Cube blindfolded",
  "I've climbed buildings which led to some interesting police encounters"
]

export default function About() {
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
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From gaming enthusiast to MIT graduate, here&apos;s my journey into tech and beyond
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-2xl font-heading font-semibold mb-4">My Story</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  I&apos;m the Co-founder & CEO of MathDash (YC W24), where we&apos;re building the future of 
                  math education with personalized AI coaching. I graduated from MIT in 2022 with degrees 
                  in Computer Science and Mathematics.
                </p>
                <p>
                  Since then, I&apos;ve created projects like Interstellar, DJZoomer, Partyy, and QuickMaths. 
                  Each project taught me invaluable lessons about managing teams, building relationships 
                  with users, selling enterprise products, and developing production-ready databases.
                </p>
                <p>
                  My professional experience includes trading at Jane Street Capital where I built models 
                  and traded on the options desk, and leading engineering at Kalshi Trading where I built 
                  systems trading over $100k daily. I&apos;ve raised $2M from Google Ventures and other investors 
                  for MathDash, achieving 90% AIME qualification rates among our students.
                </p>
                <p>
                  I&apos;m particularly interested in projects with social impact, education, and games. 
                  Currently based in San Francisco with MathDash, I frequently travel to New York and San Diego, and I&apos;m 
                  always open to exploring interesting projects and collaborations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                Location
              </h3>
              <p className="text-muted-foreground">
                Based in Boston, MA<br />
                Frequently in NYC & San Diego
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Book className="h-5 w-5 mr-2 text-primary" />
                Education
              </h3>
              <p className="font-medium">MIT</p>
              <p className="text-sm text-muted-foreground">
                B.S. Computer Science & Engineering<br />
                Class of 2022
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Mountain className="h-5 w-5 mr-2 text-primary" />
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.slice(0, 4).map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted text-sm rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">My Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="relative flex items-start mb-8"
                >
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
                  <div className="ml-20 bg-card p-4 rounded-lg border hover-lift flex-1">
                    <div className="flex items-center mb-2">
                      <Icon className="h-5 w-5 text-primary mr-2" />
                      <span className="font-semibold text-primary">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground">{item.event}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Fun Facts & Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-card p-6 rounded-lg border"
          >
            <h3 className="text-2xl font-heading font-semibold mb-4">Fun Facts</h3>
            <ul className="space-y-3">
              {funFacts.map((fact, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">{fact}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-card p-6 rounded-lg border"
          >
            <h3 className="text-2xl font-heading font-semibold mb-4">Things I Love</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                &ldquo;I dream of finding inspiration, equality and justice for all, 
                and one day being able to dunk basketballs and do muscle ups!&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}