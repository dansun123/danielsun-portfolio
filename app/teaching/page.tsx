"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  Users,
  Award,
  GraduationCap,
  Calendar,
} from "lucide-react";

const teachingExperience = [
  {
    role: "Education Lead",
    course: "Math Coaching & Curriculum Development",
    institution: "MathDash",
    period: "2022-Present",
    description:
      "Personally guide students to improve at math through customized curriculum and one-on-one coaching. Focus on developing mathematical intuition and problem-solving skills.",
    highlights: [
      "Coached 2 students who made the IMO (International Mathematical Olympiad) team",
      "Developed personalized learning paths that help students genuinely enjoy mathematics",
      "Created clear, engaging curriculum that students are excited to work through",
    ],
  },
  {
    role: "President & Lead Instructor",
    course: "MIT WebLab - Web Development Class",
    institution: "MIT",
    period: "2023-2024",
    description:
      "Led MIT's premier undergraduate web development class, designing curriculum and lecturing for over 1000 students.",
    highlights: [
      "Redesigned curriculum to focus on modern web technologies and best practices",
      "Delivered engaging lectures that made complex concepts accessible",
      "Mentored teaching staff and coordinated course logistics",
    ],
  },
  {
    role: "President & Education Lead",
    course: "Poker Theory & Game Theory",
    institution: "MIT Poker Club",
    period: "2023-2024",
    description:
      "Founded education initiative to teach poker theory and game theory concepts to members.",
    highlights: [
      "Developed comprehensive curriculum covering probability, expected value, and decision theory",
      "Created interactive workshops combining theory with practical application",
      "Built community of strategic thinkers applying game theory to real-world problems",
    ],
  },
  {
    role: "MATHCOUNTS Coach & Founder",
    course: "Competition Mathematics",
    institution: "Multiple Schools",
    period: "2018-2022",
    description:
      "Founded and coached two MATHCOUNTS programs, training middle school students for state and national competitions.",
    highlights: [
      "Teams consistently placed top 5 in California State competitions",
      "Won California State Championship as a competitor",
      "Developed problem-solving strategies that helped students excel in competitions",
    ],
  },
];

const teachingPhilosophy = {
  title: "My Teaching Philosophy",
  quote:
    "Students only need two things to learn: a clear curriculum that they are excited to work through, and a way to get clear explanations whenever they get stuck. I want to provide this for every student.",
  principles: [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Clear & Exciting Curriculum",
      description:
        "Learning should be an adventure. I design curriculum that is crystal clear in its progression while being genuinely exciting for students to explore.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Accessible Support",
      description:
        "Every student deserves clear explanations when they need them. I ensure no one stays stuck - providing immediate, understandable guidance whenever confusion arises.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Joy in Learning",
      description:
        "When students have the right resources and support, learning becomes joyful. I help students discover genuine enthusiasm for their subjects.",
    },
  ],
};

const resources = [
  {
    title: "MathDash Courses",
    type: "Problem-Solving Training",
    description:
      "Comprehensive videos, interactive lessons, textbook, problem sets and solutions for competition mathematics training",
    students: "100+ students",
    rating: 4.9,
  },
  {
    title: "WebLab Curriculum",
    type: "Full-Stack Web Development",
    description:
      "Complete web development curriculum from HTML/CSS basics to advanced React and Node.js",
    students: "1000+ students",
    rating: 4.8,
  },
  {
    title: "Game Theory Fundamentals",
    type: "Interactive Workshop Series",
    description:
      "Practical game theory concepts applied through poker strategy and decision-making",
    students: "150+ students",
    rating: 4.7,
  },
];

export default function Teaching() {
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
            <span className="gradient-text">Teaching</span> & Mentoring
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about education and helping others discover the joy of
            learning
          </p>
        </motion.div>

        {/* Teaching Image - Reduced Emphasis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/point.JPG"
              alt="Daniel teaching"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Teaching Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-card rounded-lg border p-8">
            <h2 className="text-2xl font-heading font-semibold mb-4 text-center">
              {teachingPhilosophy.title}
            </h2>
            <p className="text-lg text-center text-muted-foreground italic max-w-3xl mx-auto">
              &quot;{teachingPhilosophy.quote}&quot;
            </p>
          </div>
        </motion.div>

        {/* Teaching Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-heading font-semibold mb-8 text-center">
            Teaching Experience
          </h2>
          <div className="space-y-6">
            {teachingExperience.map((experience, index) => (
              <motion.div
                key={experience.course}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-lg border p-6 hover-lift"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{experience.role}</h3>
                    <p className="text-primary font-medium">
                      {experience.course}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {experience.institution}
                    </p>
                  </div>
                  <span className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0">
                    <Calendar className="h-4 w-4 mr-1" />
                    {experience.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {experience.description}
                </p>
                <ul className="space-y-2">
                  {experience.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Educational Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-heading font-semibold mb-8 text-center">
            Educational Resources Created
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="bg-card rounded-lg border p-6 hover-lift"
              >
                <div className="mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm text-primary mb-2">{resource.type}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {resource.students}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-heading font-semibold mb-6 text-center">
              Student Feedback
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-lg p-6">
                <p className="text-muted-foreground italic mb-4">
                  &quot;MathDash has truly transformed my son&apos;s excitement
                  towards math. The platform you guys have created makes
                  learning enjoyable and engaging.&quot;
                </p>
                <p className="font-semibold">- Jack, MathDash Parent</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <p className="text-muted-foreground italic mb-4">
                  &quot;This guy is really good at explaining concepts that I
                  did not understand before. I actually get it now. The lecture
                  on building a Snake game website in one hour was super
                  fun.&quot;
                </p>
                <p className="font-semibold">- Evan, MIT WebLab Student</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <p className="text-muted-foreground italic mb-4">
                  &quot;MathDash has changed my life! I really like math now and
                  I look forward to my weekly training sessions. Daniel and
                  Akshaj are really nice :)&quot;
                </p>
                <p className="font-semibold">- Ishanvi, MathDash Student</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <p className="text-muted-foreground italic mb-4">
                  &quot;My son and daughter like your lessons very much, and
                  qualified for AIME this year. I appreciate your confidence,
                  good planning, and hard work!&quot;
                </p>
                <p className="font-semibold">- Henry, MathDash Parent</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-card p-8 rounded-lg border">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Interested in Learning Together?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to share knowledge and help others on
              their learning journey. Whether you need tutoring, mentoring, or
              educational resources, I&apos;d love to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
