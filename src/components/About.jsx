import React from "react";
import { motion } from "framer-motion";
import { Code2, Award, BookOpen, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Open Source",
      description: "GSSOC ’25 Contributor",
    },
    {
      icon: Award,
      title: "Ideathon Winner",
      description: "MediSpeak – AI Health Assistant",
    },
    {
      icon: BookOpen,
      title: "Research Focused",
      description: "Software systems & algorithm design",
    },
    {
      icon: Users,
      title: "UI/UX Experience",
      description: "Virtual Intern at Cognifyz",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-b from-[#F6F1EB] to-[#F1EAE2] scroll-mt-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">

        {/* Section Label */}
        <div className="mb-10">
          <span className="text-sm tracking-[0.3em] uppercase text-[#8A2D2D] font-medium">
            About
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[Playfair_Display] text-4xl lg:text-5xl leading-[1.1] mb-8 text-[#2E2118]">
              Engineering with structure.
              <br />
              <span className="text-[#5A4636]">
                Designing with intention.
              </span>
            </h2>

            <div className="max-w-xl">
              <p className="text-base lg:text-lg text-[#5C5047] leading-relaxed mb-6">
                I build structured, scalable systems grounded in architectural depth 
                and design clarity. My work sits at the intersection of engineering rigor 
                and user-centered thinking.
              </p>

              <p className="text-base lg:text-lg text-[#5C5047] leading-relaxed mb-6">
                From AI-driven platforms to refined interface systems, I approach every 
                project with long-term thinking and technical precision.
              </p>

              <p className="text-base lg:text-lg text-[#5C5047] leading-relaxed mb-10">
                I focus on software systems, product engineering, and research-driven 
                problem solving.
              </p>
            </div>

            {/* Core Principles */}
            <div className="space-y-5">
              {[
                "Systems first. Features later.",
                "Design should clarify, not decorate.",
                "Curiosity compounds into mastery."
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-[2px] h-6 bg-[#7A1F1F] mt-1"></div>
                  <p className="text-[#4B4037] text-sm lg:text-base tracking-wide">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN – HIGHLIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DED5]/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon
                    size={28}
                    strokeWidth={1.8}
                    className="text-[#8A2D2D] mb-4"
                  />

                  <h4 className="font-semibold text-[#2E2118] mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#5E5248] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
