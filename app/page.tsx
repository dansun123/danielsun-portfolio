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
        <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Mobile: Image first, smaller on mobile */}
              <div className="relative h-64 sm:h-80 lg:h-96 w-3/4 lg:w-auto order-1">
                <Image
                  src="/images/gum_wall.jpeg"
                  alt="Daniel Sun"
                  fill
                  className="object-cover object-top rounded-2xl"
                  priority
                  quality={100}
                />
              </div>
              {/* Content */}
              <div className="lg:col-span-2 order-2">
                <p className="text-base sm:text-lg text-muted-foreground mb-2 sm:mb-4">
                  Hello, I&apos;m
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
                  Daniel <span className="gradient-text">Sun</span>
                </h1>
                <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                  <p className="text-lg sm:text-2xl font-semibold">
                    Building the future of math education
                  </p>
                  <p className="text-sm sm:text-lg text-muted-foreground">
                    Co-founder & CEO @ MathDash • YC W24
                  </p>
                </div>
                <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  MIT grad turned founder. Previously traded at Jane Street. Now
                  helping students get excited about learning math.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    href="/teaching"
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift transition-all text-sm sm:text-base"
                  >
                    Teaching & Mentoring
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border border-border rounded-lg font-medium hover:bg-muted transition-all text-sm sm:text-base"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Optimized for mobile */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Portrait Image - Adjusted height for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-64 sm:h-80 lg:h-96 w-3/4 lg:w-auto order-1"
            >
              <Image
                src="/images/gum_wall.jpeg"
                alt="Daniel Sun"
                fill
                className="object-cover object-top rounded-2xl"
                priority
                quality={100}
              />
            </motion.div>
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 order-2"
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base sm:text-lg text-muted-foreground mb-2 sm:mb-4"
              >
                Hello, I&apos;m
              </motion.p>

              {/* Name - Smaller on mobile */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6"
              >
                Daniel <span className="gradient-text">Sun</span>
              </motion.h1>

              {/* Title/Role - Adjusted sizing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-1 sm:space-y-2 mb-6 sm:mb-8"
              >
                <p className="text-lg sm:text-2xl font-semibold">
                  Building the future of math education
                </p>
                <p className="text-sm sm:text-lg text-muted-foreground">
                  Co-founder & CEO @ MathDash • YC W24
                </p>
              </motion.div>

              {/* Quick Bio - Simplified for mobile */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
              >
                MIT grad turned founder. Previously traded at Jane Street and
                built Kalshi MM.{" "}
                <span className="hidden sm:inline">
                  <br />
                </span>
                Now helping students get excited about learning math.
              </motion.p>

              {/* CTAs - Stack on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
              >
                <Link
                  href="/teaching"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift transition-all text-sm sm:text-base"
                >
                  Teaching & Mentoring
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border border-border rounded-lg font-medium hover:bg-muted transition-all text-sm sm:text-base"
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

      {/* About Section - Improved mobile spacing */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 sm:mb-8 text-center">
              A Bit More About Me
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-muted-foreground">
              <p>
                I graduated from MIT in 2022 with a degree in Computer Science
                and Mathematics. My journey took me from competing in USA Math
                Olympiad to trading options at Jane Street, and now to building
                MathDash to get students excited about learning math.
              </p>
              <p>
                At MathDash (YC W24), we are creating personalized math training
                platform that matches students with an expert guide and helps
                students get very very good, very very fast. The secret is that
                the students <strong>become excited to work through</strong> our
                curriculum, and also have personalized hints and explanations so
                that they never get stuck and can always move forward.
              </p>
              <p>
                Beyond work, I&apos;m passionate about American Ninja Warrior
                (yes, I competed!), poker strategy, and urban exploration. I
                believe in building products that create real social impact
                while pushing technical boundaries.
              </p>
            </div>
            <div className="text-center mt-8 sm:mt-10">
              <Link
                href="/about"
                className="inline-flex items-center text-primary font-medium hover:underline text-base sm:text-lg"
              >
                Read My Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MathDash Section - Mobile optimized */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 sm:mb-4">
                Motivating Students to Learn Math
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                MathDash is building the future of personalized math learning,
                helping students get excited about learning and unlock their
                potential with expert guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center mb-12 sm:mb-16">
              {/* Features list */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">
                        Comprehensive Curriculum
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        We analyzed each problem from the past 30 years of math
                        contests and curriculum, organizing the problems by
                        difficulty and topic into courses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">
                        Never Get Stuck
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        We have interactive hints and explanations for every
                        problem so you never get stuck. We also have a
                        personalized training plan customized for your strengths
                        and weaknesses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">
                        Building a Community
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Beyond just problem-solving, we&apos;re creating a
                        supportive community where students can collaborate,
                        compete, and grow together
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">
                        Making Math Exciting
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Through gamification and interactive challenges, we
                        transform math from a chore into an adventure students
                        actually look forward to
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Chart - Simplified for mobile */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-4 sm:p-8">
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-2xl font-bold gradient-text mb-1 sm:mb-2">
                      MathDash: Improve Your Math Rating
                    </h3>
                    <p className="text-xs sm:text-base text-muted-foreground">
                      Built by MIT Grads for the future problem solvers
                    </p>
                  </div>
                  <div className="mb-4 sm:mb-6 bg-white/5 backdrop-blur rounded-lg p-3 sm:p-6">
                    <div className="relative h-48 sm:h-64 lg:h-72">
                      {/* Simplified mobile chart */}
                      <div className="absolute inset-0 flex">
                        {/* Y-axis labels - smaller on mobile */}
                        <div className="flex flex-col justify-between pr-1 sm:pr-3 text-[10px] sm:text-xs text-muted-foreground w-8 sm:w-12">
                          <span>2100</span>
                          <span>1800</span>
                          <span>1500</span>
                          <span>1200</span>
                          <span>900</span>
                          <span>600</span>
                        </div>

                        {/* Chart area */}
                        <div className="flex-1 relative">
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

                          {/* Progress curve */}
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

                            <path
                              d="M 5,90 L 15,85 L 25,78 L 35,70 L 45,60 L 55,48 L 65,35 L 75,22 L 85,12 L 95,5"
                              fill="none"
                              stroke="url(#mathDashGradient)"
                              strokeWidth="2"
                              vectorEffect="non-scaling-stroke"
                            />

                            {/* Data points - fewer on mobile */}
                            {[
                              { x: 5, y: 90 },
                              { x: 25, y: 78 },
                              { x: 45, y: 60 },
                              { x: 65, y: 35 },
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

                        {/* Level labels - hidden on mobile, shown on larger screens */}
                        <div className="hidden sm:flex absolute right-0 top-0 h-full flex-col justify-between text-[10px] sm:text-xs font-medium w-16 sm:w-20 text-right">
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
                      <div className="absolute bottom-[-16px] sm:bottom-[-20px] left-1/2 transform -translate-x-1/2 text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                        Time Spent on MathDash
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      href="https://mathdash.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm sm:text-base text-primary font-medium hover:underline"
                    >
                      Visit MathDash.com
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Teaching Philosophy CTA - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8 text-center"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                My Teaching Philosophy
              </h3>
              <p className="text-sm sm:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
                Beyond MathDash, I&apos;m deeply committed to mentoring the next
                generation of problem solvers. Learn more about my teaching
                philosophy and experience.
              </p>
              <Link
                href="/teaching"
                className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift text-sm sm:text-base"
              >
                Explore My Teaching & Mentoring
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Mobile optimized */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 sm:p-12 rounded-2xl border border-primary/20"
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 sm:mb-4">
              Enrich Your Student&apos;s Problem-Solving
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Whether you&apos;re interested in MathDash or just want to ask
              some questions, I&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-medium hover-lift text-base sm:text-lg"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
