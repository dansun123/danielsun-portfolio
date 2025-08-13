"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Trophy,
  Brain,
  Target,
  Star,
  Zap,
  BookOpen,
  Users,
  Rocket,
  TrendingUp,
  Building2,
  Sparkles,
  Fish,
  DollarSign,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const experience = [
  {
    company: "MathDash",
    position: "Co-founder & CEO",
    location: "San Francisco, CA",
    dateRange: "January 2024 - Present",
    points: [
      "Building the best way to learn math",
      "Personalized explanations for every problem so students can never get stuck",
      "YC W24, backed by Google Ventures",
    ],
  },
  {
    company: "Jane Street Capital",
    position: "Quantitative Trader",
    location: "New York, NY",
    dateRange: "September 2022 - December 2023",
    points: [
      "Built models and traded on the options desk",
      "Wrote code to improve efficiency of trading systems",
      "Led internship activities and coached mock trading to teach quantitative finance",
    ],
  },
  {
    company: "Kalshi Trading",
    position: "Trader and Head of Engineering",
    location: "New York, NY",
    dateRange: "June 2021 - August 2022",
    points: [
      "Built liquidity-provision system to trade over $100k each day while managing risk",
      "Ran promotions, growing the user base from 0 to over 10,000",
    ],
  },
];

const education = [
  {
    school: "Massachusetts Institute of Technology",
    degree: "Bachelor's Degree of Science in Computer Science and Mathematics",
    location: "Cambridge, MA",
    year: "September 2018 - June 2022",
    gpa: null,
    coursework: [
      "6.867 Graduate Machine Learning",
      "6.437 Graduate Inference and Information",
      "6.046 Design and Analysis of Algorithms",
      "6.031 Elements of Software Construction",
      "6.033 Computer Systems Engineering",
      "18.404 Theory of Computation",
    ],
  },
  {
    school: "Canyon Crest Academy",
    degree: "High School Diploma",
    location: "San Diego, CA",
    year: "August 2014 - June 2018",
    gpa: "4.0/4.0 Unweighted, 4.8 Weighted, ACT: 36/36",
    coursework: [],
  },
];

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      "Python",
      "TypeScript",
      "Java",
      "C++",
      "SQL",
      "OCaml",
      "JavaScript",
    ],
    color: "text-blue-600",
    icon: Code2,
  },
  {
    name: "Web & Mobile",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "Tailwind CSS",
      "MongoDB",
    ],
    color: "text-green-600",
    icon: Zap,
  },
  {
    name: "AI & Data Science",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "Data Analysis",
      "NLP",
    ],
    color: "text-purple-600",
    icon: Brain,
  },
  {
    name: "Finance & Trading",
    skills: [
      "Options Trading",
      "Quantitative Analysis",
      "Risk Management",
      "Market Making",
      "Algorithmic Trading",
    ],
    color: "text-orange-600",
    icon: Target,
  },
  {
    name: "Leadership & Teaching",
    skills: [
      "Curriculum Development",
      "Public Speaking",
      "Team Management",
      "Mentoring",
      "Event Planning",
    ],
    color: "text-pink-600",
    icon: Users,
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Linux", "LaTeX", "Figma", "Vercel"],
    color: "text-red-600",
    icon: Star,
  },
];

const awards = [
  {
    title: "USA Math Olympiad Summer Program (MOP)",
    description: "Top 50 USA Math Olympiad scorers nationwide",
    year: "2016",
    category: "Mathematics",
    icon: Trophy,
  },
  {
    title: "3x USA Math Olympiad Qualifier",
    description: "Top 250 USA Math students nationwide",
    year: "2016-2018",
    category: "Mathematics",
    icon: Brain,
  },
  {
    title: "3x USA Physics Olympiad Semifinalist",
    description: "Top 100 USA Physics Olympiad scorers nationwide",
    year: "2016-2018",
    category: "Physics",
    icon: Zap,
  },
  {
    title: "Regeneron Science Talent Search",
    description: "Top 300 research projects nationwide",
    year: "2018",
    category: "Research",
    icon: BookOpen,
  },
  {
    title: "USABO and USANCO Finalist",
    description: "Olympiad Finalist for Biology and Chemistry Olympiads",
    year: "2017",
    category: "Biology and Chemistry",
    icon: Target,
  },
  {
    title: "Y Combinator W24",
    description: "Selected for prestigious startup accelerator with MathDash",
    year: "2024",
    category: "Entrepreneurship",
    icon: Star,
  },
];

const projects = [
  {
    name: "MathDash",
    description: "Personalized math training platform",
    highlights: [
      "Building the best way to learn math",
      "Personalized explanations for every problem so you never get stuck",
      "YC W24, backed by Google Ventures",
    ],
    category: "Entrepreneurship",
  },
  {
    name: "MIT Web.Lab",
    description:
      "Co-President & Academic Chair of MIT's premier web development course",
    highlights: [
      "Taught 900+ students",
      "Developed MERN stack curriculum",
      "Led 20+ staff members",
    ],
    category: "Leadership",
  },
  {
    name: "MIT Poker Club",
    description: "President, taught game theory and probability",
    highlights: [
      "Taught 15.S50 Sloan course",
      "Founded education initiative, teaching poker theory to 1000+ students",
      "Founded Collegiate Series of Poker, the first college-level poker tournament",
    ],
    category: "Leadership",
  },
  {
    name: "Interstellar",
    description:
      "Social forum for MIT students to share course information and connect",
    highlights: [
      "HackLodge 2020 winner",
      "1000+ student users",
      "Full-stack development",
    ],
    category: "Development",
  },
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState("overview");

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
            My <span className="gradient-text">Achievements & Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            From Math Olympiad to YC founder - a journey through competitive
            mathematics, MIT education, quantitative finance, and building the
            future of education.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-lg border p-1">
            {["overview", "experience", "education", "skills"].map((tab) => (
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
          {/* Overview Section */}
          {activeTab === "overview" && (
            <div className="space-y-12">
              {/* Awards & Achievements Grid */}
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center justify-center">
                  <Trophy className="h-6 w-6 mr-2 text-primary" />
                  Awards & Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {awards.map((award, index) => {
                    const Icon = award.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-card p-4 rounded-lg border hover-lift group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm mb-1">
                              {award.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mb-2">
                              {award.description}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs bg-muted px-2 py-0.5 rounded">
                                {award.category}
                              </span>
                              <span className="text-xs text-primary">
                                {award.year}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Key Projects & Leadership */}
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center justify-center">
                  <Star className="h-6 w-6 mr-2 text-primary" />
                  Key Projects & Leadership
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-card p-6 rounded-lg border hover-lift"
                    >
                      <div className="mb-3">
                        <h3 className="text-lg font-semibold mb-1">
                          {project.name}
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.description}
                      </p>
                      <div className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-xs">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Work Experience Highlights */}
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 mr-2 text-primary" />
                  Professional Journey
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-lg border hover-lift"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Rocket className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">MathDash</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Co-founder & CEO
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Building personalized AI-powered math education
                          platform • YC W24 • Google Ventures backed
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-6 rounded-lg border hover-lift"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Jane Street</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Quantitative Trader
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Options desk trading • Built models & trading systems
                          • Coached mock trading
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-lg border hover-lift"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Kalshi</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Trader & Head of Engineering
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Built $100k+/day trading system • Grew userbase from 0
                          to 10,000+
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Fun Achievements */}
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 mr-2 text-primary" />
                  Fun Achievements & Competitions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-5 rounded-lg border hover-lift group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Target className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm">
                        American Ninja Warrior
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Selected as contestant from 100,000+ applicants • Competed
                      on national television
                    </p>
                    <div className="mt-2">
                      <span className="text-xs bg-red-500/10 text-red-600 px-2 py-0.5 rounded">
                        Athletics
                      </span>
                      <span className="text-xs text-primary ml-2">2021-22</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-5 rounded-lg border hover-lift group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Fish className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm">
                        MOP Fish Champion
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Won the legendary card game tournament at Math Olympiad
                      Summer Program • Beat 50+ top math minds
                    </p>
                    <div className="mt-2">
                      <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded">
                        Strategy Games
                      </span>
                      <span className="text-xs text-primary ml-2">2016</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-5 rounded-lg border hover-lift group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm">
                        Figgie Tournament Winner
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Winner of Jane Street&apos;s trading competition • 1000+
                      participants
                    </p>
                    <div className="mt-2">
                      <span className="text-xs bg-green-500/10 text-green-600 px-2 py-0.5 rounded">
                        Trading Games
                      </span>
                      <span className="text-xs text-primary ml-2">2023</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          )}

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
                      <p className="text-lg text-muted-foreground">
                        {job.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {job.location}
                      </p>
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
                      <p className="text-lg text-muted-foreground">
                        {edu.degree}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.location}
                      </p>
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
                      USA Math Olympiad Summer Program - Top 50 USA Math
                      Olympiad scorers nationwide (2016)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      3x USA Math Olympiad Qualifier - Top 250 USA Math students
                      nationwide (2016-18)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      3x USA Physics Olympiad - Top 100 USA Physics Olympiad
                      Scorers nationwide (2016-18)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      Regeneron Science and Talent Search - Top 300 research
                      projects nationwide (2018)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">
                      USABO and USANCO Finalist (2017)
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Leadership Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="bg-card p-6 rounded-lg border"
              >
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Leadership Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">
                      MIT Web.Lab - Co-President & Academic Chair
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Cambridge, MA | Sep 2020 - Jan 2022
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        • Developed curriculum for MIT&apos;s annual website
                        development class, covering the MERN stack
                      </li>
                      <li>
                        • Instructed over 400 students January 2022 (in-person),
                        500 students in January 2021 (remote)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      MIT Poker Club - President
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Cambridge, MA | Sep 2018 - Present
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        • Taught 15.S50, the Sloan Poker Theory course over IAP
                      </li>
                      <li>
                        • Restructured internal meetings to greatly improve
                        efficiency of club
                      </li>
                      <li>
                        • Founded education initiative for hundreds of MIT
                        students
                      </li>
                    </ul>
                  </div>
                </div>
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
                    {category.icon && (
                      <category.icon
                        className={cn("h-5 w-5 mr-2", category.color)}
                      />
                    )}
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

              {/* Personal Interests & Activities */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="md:col-span-2 bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-primary" />
                  Personal Interests & Activities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-medium mb-2">Competitive Pursuits</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• American Ninja Warrior</li>
                      <li>• Poker Strategy</li>
                      <li>• Basketball</li>
                      <li>• Math Competitions</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Creative Projects</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Building Webapp Games</li>
                      <li>• Educational Content</li>
                      <li>• UI/UX Design</li>
                      <li>• Problem Writing</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Mission & Values</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Education Equity</li>
                      <li>• Social Impact</li>
                      <li>• Mentoring Youth</li>
                      <li>• Building Community</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
