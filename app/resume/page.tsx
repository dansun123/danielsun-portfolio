"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Briefcase, GraduationCap, Code2, Award } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const experience = [
  {
    company: "MathDash",
    position: "Co-founder & CEO",
    location: "San Francisco, CA",
    dateRange: "January 2024 - Present",
    points: [
      "Building the best way to learn math - a math training platform that you cannot get stuck on",
      "90% AIME qualification rate",
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
    name: "Languages",
    skills: ["Python", "Java", "React", "TypeScript", "SQL", "C++", "OCaml"],
    color: "text-blue-600",
  },
  {
    name: "Web Development",
    skills: [
      "React",
      "NodeJS",
      "TypeScript",
      "Next.js",
      "HTML/CSS",
      "REST APIs",
    ],
    color: "text-green-600",
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "LaTeX", "Growth", "Docker", "AWS", "Linux"],
    color: "text-red-600",
  },
  {
    name: "Interests",
    skills: [
      "Education",
      "Building Webapp Games",
      "American Ninja Warrior",
      "Poker",
      "Basketball",
    ],
    color: "text-purple-600",
  },
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

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
          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src="/images/profile-professional.jpg"
                alt="Daniel Sun - Professional"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            MIT Computer Science graduate with experience in quantitative
            trading and full-stack development
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
                      American Ninja Warrior Contestant - Top 400 out of &gt;
                      100,000 applicants (2021-22)
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
                      MIT Poker Club - Co-President & Events Director
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
                <h3 className="text-lg font-semibold mb-4">
                  Other Skills & Interests
                </h3>
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
  );
}
