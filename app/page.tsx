"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Linkedin,
  Mail,
  Brain,
  Users,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  // Prevent hydration mismatch by ensuring client-only rendering for animations
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a simpler version without animations for initial server render
    return (
      <div className="min-h-screen">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 order-2 lg:order-1">
                <p className="text-lg text-muted-foreground mb-4">
                  Hello, I&apos;m
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Daniel <span className="gradient-text">Sun</span>
                </h1>
                <div className="space-y-2 mb-8">
                  <p className="text-xl sm:text-2xl font-semibold">
                    Building the future of math education
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Co-founder & CEO @ MathDash • YC W24
                  </p>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  MIT grad turned founder. Previously traded options at Jane
                  Street. Now helping students get excited about learning math.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/teaching"
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift transition-all"
                  >
                    Teaching & Mentoring
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-all"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="relative h-64 lg:h-80 order-1 lg:order-2">
                <Image
                  src="/images/Daniel_sitting2.jpeg"
                  alt="Daniel Sun"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - More balanced layout */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Right Side - Smaller Portrait Image (takes up 1/3) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-64 lg:h-96 order-1 lg:order-1"
            >
              <Image
                src="/images/gum_wall.jpeg"
                alt="Daniel Sun"
                fill
                className="object-cover rounded-2xl"
                priority
                quality={100}
              />
            </motion.div>
            {/* Left Side - Content (takes up 2/3) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 order-2 lg:order-1"
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-muted-foreground mb-4"
              >
                Hello, I&apos;m
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6"
              >
                Daniel <span className="gradient-text">Sun</span>
              </motion.h1>

              {/* Title/Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-2 mb-8"
              >
                <p className="text-xl sm:text-2xl font-semibold">
                  Building the future of math education
                </p>
                <p className="text-lg text-muted-foreground">
                  Co-founder & CEO @ MathDash • YC W24
                </p>
              </motion.div>

              {/* Quick Bio */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                MIT grad turned founder. Previously traded at Jane Street and
                built Kalshi MM. <br></br>
                Now helping students get excited about learning math.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Link
                  href="/teaching"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift transition-all"
                >
                  Teaching & Mentoring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-all"
                >
                  Contact Me
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex gap-4"
              >
                <Link
                  href="https://www.linkedin.com/in/daniel-sun-440493171/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:daniel@mathdash.com"
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              A Bit More About Me
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-6">
                I graduated from MIT in 2022 with a degree in Computer Science
                and Mathematics. My journey took me from competing in USA Math
                Olympiad to trading options at Jane Street, and now to building
                MathDash to get students excited about learning math.
              </p>
              <p className="mb-6">
                At MathDash (YC W24), we are creating personalized math training
                platform that matches students with an expert guide and helps
                students get very very good, very very fast. The secret is that
                the students <strong>become excited to work through</strong> our
                curriculum, and also have personalized hints and explanations so
                that they never get stuck and can always move forward.
              </p>
              <p className="mb-6">
                Beyond work, I&apos;m passionate about American Ninja Warrior
                (yes, I competed!), poker strategy, and urban exploration. I
                believe in building products that create real social impact
                while pushing technical boundaries.
              </p>
            </div>
            <div className="text-center mt-10">
              <Link
                href="/about"
                className="inline-flex items-center text-primary font-medium hover:underline text-lg"
              >
                Read My Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MathDash Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Motivating Students to Learn Math
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                MathDash is building the future of personalized math learning,
                helping students get excited about learning and unlock their
                potential with expert guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Comprehensive Curriculum
                      </h3>
                      <p className="text-muted-foreground">
                        We analyzed each problem from the past 30 years of math
                        contests and curriculum, organizing the problems by
                        difficulty and topic into courses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Never Get Stuck
                      </h3>
                      <p className="text-muted-foreground">
                        We have interactive hints and explanations for every
                        problem so you never get stuck. We also have a
                        personalized training plan customized for your strengths
                        and weaknesses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Building a Community
                      </h3>
                      <p className="text-muted-foreground">
                        Beyond just problem-solving, we&apos;re creating a
                        supportive community where students can collaborate,
                        compete, and grow together
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Making Math Exciting
                      </h3>
                      <p className="text-muted-foreground">
                        Through gamification and interactive challenges, we
                        transform math from a chore into an adventure students
                        actually look forward to
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold gradient-text mb-2">
                      MathDash: Improve Your Math Rating
                    </h3>
                    <p className="text-muted-foreground">
                      Built by MIT Grads for the future problem solvers
                    </p>
                  </div>
                  <div className="mb-6 bg-white/5 backdrop-blur rounded-lg p-6">
                    <div className="relative" style={{ height: "280px" }}>
                      {/* Main chart container */}
                      <div className="absolute inset-0 flex">
                        {/* Y-axis labels */}
                        <div className="flex flex-col justify-between pr-3 text-xs text-muted-foreground w-12">
                          <span>2100</span>
                          <span>1800</span>
                          <span>1500</span>
                          <span>1200</span>
                          <span>900</span>
                          <span>600</span>
                        </div>

                        {/* Chart area */}
                        <div className="flex-1 relative mr-20">
                          {/* Grid lines */}
                          <div className="absolute inset-0">
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                              <div
                                key={i}
                                className="absolute w-full border-t border-muted/20"
                                style={{ top: `${i * 20}%` }}
                              />
                            ))}
                          </div>

                          {/* Progress curve and points */}
                          <svg
                            className="absolute inset-0 w-full h-full"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <linearGradient
                                id="mathDashGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="rgb(99, 102, 241)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(139, 92, 246)"
                                />
                              </linearGradient>
                            </defs>

                            {/* Smooth curve through points */}
                            <path
                              d="M 5,90 L 15,85 L 25,78 L 35,70 L 45,60 L 55,48 L 65,35 L 75,22 L 85,12 L 95,5"
                              fill="none"
                              stroke="url(#mathDashGradient)"
                              strokeWidth="2"
                              vectorEffect="non-scaling-stroke"
                            />

                            {/* Data points */}
                            {[
                              { x: 5, y: 90 },
                              { x: 15, y: 85 },
                              { x: 25, y: 78 },
                              { x: 35, y: 70 },
                              { x: 45, y: 60 },
                              { x: 55, y: 48 },
                              { x: 65, y: 35 },
                              { x: 75, y: 22 },
                              { x: 85, y: 12 },
                              { x: 95, y: 5 },
                            ].map((point, i) => (
                              <circle
                                key={i}
                                cx={point.x}
                                cy={point.y}
                                r="2"
                                fill="rgb(99, 102, 241)"
                              />
                            ))}
                          </svg>
                        </div>

                        {/* Level labels on the right */}
                        <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-xs font-medium w-20 text-right">
                          <span className="text-primary">USAJMO</span>
                          <span className="text-primary/90">AMC 10 DHR</span>
                          <span className="text-primary/80">AIME</span>
                          <span className="text-muted-foreground">AMC 10</span>
                          <span className="text-muted-foreground">AMC 8</span>
                          <span className="text-muted-foreground">
                            MATHCOUNTS
                          </span>
                        </div>
                      </div>

                      {/* X-axis label */}
                      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
                        Time Spent on MathDash
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      href="https://mathdash.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Visit MathDash.com
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-semibold mb-4">
                My Teaching Philosophy
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Beyond MathDash, I&apos;m deeply committed to mentoring the next
                generation of problem solvers. Learn more about my teaching
                philosophy and experience.
              </p>
              <Link
                href="/teaching"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift"
              >
                Explore My Teaching & Mentoring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-primary/5 p-12 rounded-2xl border border-primary/20"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              Enrich Your Student&apos;s Problem-Solving
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you&apos;re interested in MathDash or just want to ask
              some questions, I&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover-lift text-lg"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
