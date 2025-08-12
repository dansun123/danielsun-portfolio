"use client"

import { motion } from "framer-motion"
import { Download, Briefcase, GraduationCap, Code2, Award } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const experience = [
  {
    company: "MIT Quest for Intelligence",
    position: "Undergraduate Researcher",
    location: "Cambridge, MA",
    dateRange: "November 2019 - 2022",
    points: [
      "Working on predicting MOER indexes for clean energy use at MIT",
      "Developed machine learning models for energy optimization",
      "Collaborated with interdisciplinary team on sustainability initiatives"
    ],
  },
  {
    company: "Akuna Capital",
    position: "Quantitative Trading Intern",
    location: "Chicago, IL",
    dateRange: "June 2019 - August 2019",
    points: [
      "Studied options market making strategies in the Akuna education program",
      "Developed key features for D1 trading model",
      "Implemented algorithms to improve trading efficiency"
    ],
  },
  {
    company: "Credit Suisse",
    position: "Equity Derivatives Software Development Intern",
    location: "New York, NY",
    dateRange: "January 2019 - February 2019",
    points: [
      "Used NLP to develop chatbot parser for brokers to quote instruments",
      "Improved workflow automation for equity derivatives trading desk",
      "Collaborated with traders to understand business requirements"
    ],
  },
]

const education = [
  {
    school: "Massachusetts Institute of Technology",
    degree: "Bachelor of Science in Computer Science and Engineering (6-3)",
    location: "Cambridge, MA",
    year: "2018 - 2022",
    gpa: null,
    coursework: [
      "Machine Learning",
      "Inference and Information",
      "Algorithms",
      "Computer Systems",
      "Artificial Intelligence",
    ],
  },
  {
    school: "Canyon Crest Academy",
    degree: "High School Diploma",
    location: "San Diego, CA",
    year: "2014 - 2018",
    gpa: null,
    coursework: [],
  },
]

const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
    color: "text-blue-600",
  },
  {
    name: "Web Development",
    skills: ["React", "Node.js", "Express", "Next.js", "HTML/CSS", "REST APIs"],
    color: "text-green-600",
  },
  {
    name: "Data Science & ML",
    skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "Jupyter"],
    color: "text-purple-600",
  },
  {
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Redis", "SQLite", "ElasticSearch"],
    color: "text-orange-600",
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Heroku", "Linux", "Agile/Scrum"],
    color: "text-red-600",
  },
]

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience")

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
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            MIT Computer Science graduate with experience in quantitative trading and full-stack development
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift">
            <Download className="mr-2 h-5 w-5" />
            Download PDF Resume
          </button>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-lg border p-1">
            {["experience", "education", "skills"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-2 rounded-md font-medium capitalize transition-all",
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Experience Section */}
          {activeTab === "experience" && (
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg border hover-lift"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold flex items-center">
                        <Briefcase className="h-5 w-5 mr-2 text-primary" />
                        {job.position}
                      </h3>
                      <p className="text-lg text-muted-foreground">{job.company}</p>
                      <p className="text-sm text-muted-foreground">{job.location}</p>
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded">
                      {job.dateRange}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {/* Education Section */}
          {activeTab === "education" && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg border hover-lift"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                        {edu.school}
                      </h3>
                      <p className="text-lg text-muted-foreground">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded">
                      {edu.year}
                    </span>
                  </div>
                  {edu.coursework.length > 0 && (
                    <div>
                      <p className="font-medium mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-muted text-sm rounded"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-card p-6 rounded-lg border"
              >
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Achievements & Awards
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Math Olympiad Program (MOP) Qualifier - Top math students nationally
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Qualified for USA Math, Physics, Chemistry, and Biology Olympiads
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      First Place - Statewide Chess Tournament (2010)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      MOP Fish Tournament Winner - Card game championship
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          )}

          {/* Skills Section */}
          {activeTab === "skills" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg border hover-lift"
                >
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Code2 className={cn("h-5 w-5 mr-2", category.color)} />
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-muted text-sm rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Additional Skills */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="md:col-span-2 bg-card p-6 rounded-lg border"
              >
                <h3 className="text-lg font-semibold mb-4">Other Skills & Interests</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-medium mb-2">Soft Skills</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Team Leadership</li>
                      <li>• Product Development</li>
                      <li>• User Research</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Design</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Photoshop</li>
                      <li>• UI/UX Design</li>
                      <li>• Wireframing</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Interests</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Education Technology</li>
                      <li>• Social Impact</li>
                      <li>• Game Development</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}