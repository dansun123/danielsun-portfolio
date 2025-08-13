"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Book,
  Award,
  Gamepad2,
  Volleyball,
  Gamepad,
  Lightbulb,
  GraduationCap,
  Hammer,
  Dumbbell,
  Dices,
} from "lucide-react";

const timeline = [
  {
    year: "2005",
    event:
      "Got my a GameBoy with Pokemon Emerald - my gateway into gaming and technology.",
    icon: Gamepad2,
    image: null,
  },
  {
    year: "2007",
    event:
      "My basketball team won a tournament in San Diego. I wanted to play in the NBA and drank a glass of milk every day for 18 years... only to learn in college that I was lactose intolerant the whole time!",
    icon: Volleyball,
    image: "/images/Daniel_standing.jpeg",
  },
  {
    year: "2010",
    event:
      "I started playing Magic: The Gathering and eventually became a competitive player in college. I also learned how to play poker.",
    icon: Dices,
    image: null,
  },
  {
    year: "2012",
    event:
      "I discovered a math racing game called For The Win! I grinded my rating in this game for 2 years and got really good at math. This game as the reason I got into MIT.",
    icon: Gamepad,
    image: null,
  },
  {
    year: "2014",
    event:
      "I started teaching and coaching math. I founded two MATHCOUNTS teams and led them to place top-5 in the California State contest. One of my students later represented the USA IMO team. Teaching math is the most fulfilling activity that I have done.",
    icon: Lightbulb,
    image: "/images/point.JPG",
  },
  {
    year: "2016",
    event:
      "Qualified for Math Olympiad Program (MOP) and won the MOP Fish Tournament",
    icon: Award,
    image: null,
  },
  {
    year: "2018",
    event: "Got accepted into MIT - a dream come true!",
    icon: Book,
    image: "/images/chuckle.jpg",
  },
  {
    year: "2020",
    event:
      "Started web development journey, built first website, and launched a class-sharing app at MIT that had over 50% of the undergraduate class using it called Interstellar",
    icon: Hammer,
    image: "/images/Daniel_sitting3.jpeg",
  },
  {
    year: "2021",
    event:
      "My friend and I applied and got onto the American Ninja Warrior show. It was super fun!",
    icon: Dumbbell,
    image: "/images/ninja_action_shot.jpg",
  },
  {
    year: "2022",
    event: "Graduated from MIT with B.S. in Computer Science",
    icon: GraduationCap,
    image: "/images/Daniel_sitting2.jpeg",
  },
  {
    year: "2024",
    event: "I left my job as a trader at Jane Street to solve math education",
    icon: Lightbulb,
    image: "/images/YC_event.jpg",
  },
];

const interests = [
  "Ninja Warrior",
  "Poker",
  "Learning New Things",
  "Dancing",
  "Singing",
  "Basketball",
  "Books & Reading",
  "Magic: The Gathering",
  "Dogs",
];

const funFacts = [
  "I learned I was lactose intolerant only after I turned 18",
  "I record every moment of my day in Google Calendar with color codes",
  "My first name was almost 'Bright' (Bright Sun)",
  "I can solve a Rubik's Cube blindfolded",
];

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
            From gaming enthusiast to MIT graduate, here&apos;s my journey into
            tech and beyond
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="relative flex items-start mb-8"
                >
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
                  <div className="ml-20 bg-card rounded-lg border hover-lift flex-1 overflow-hidden">
                    <div className="flex">
                      <div className="flex-1 p-4">
                        <div className="flex items-center mb-2">
                          <Icon className="h-5 w-5 text-primary mr-2" />
                          <span className="font-semibold text-primary">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{item.event}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Life in Pictures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* YC Event */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <Image
                src="/images/YC_event.jpg"
                alt="Y Combinator W24"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-4 left-4 text-white font-semibold">
                  Y Combinator W24
                </p>
              </div>
            </motion.div>

            {/* Ninja Warrior */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <Image
                src="/images/ninja_action_shot.jpg"
                alt="American Ninja Warrior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-4 left-4 text-white font-semibold">
                  American Ninja Warrior
                </p>
              </div>
            </motion.div>

            {/* Poker Club */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <Image
                src="/images/poker_club.jpg"
                alt="MIT Poker Club"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-4 left-4 text-white font-semibold">
                  MIT Poker Club
                </p>
              </div>
            </motion.div>

            {/* Cello Performance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <Image
                src="/images/cello.jpg"
                alt="Orchestra Performance"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-4 left-4 text-white font-semibold">
                  Orchestra Performance
                </p>
              </div>
            </motion.div>

            {/* Grad Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <Image
                src="/images/graduation.jpeg"
                alt="Graduating with Akshaj"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ objectPosition: "top" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-4 left-4 text-white font-semibold">
                  Graduating with Akshaj
                </p>
              </div>
            </motion.div>

            {/* Chopping Watermelons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.0 }}
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <Image
                src="/images/watermelons.jpg"
                alt="Karate Chopping Watermelons"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-4 left-4 text-white font-semibold">
                  Karate Chopping Watermelons
                </p>
              </div>
            </motion.div>
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
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Fun Facts
            </h3>
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
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Things I Love
            </h3>
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
