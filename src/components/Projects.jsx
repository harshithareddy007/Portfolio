import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Award, Trophy } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SkillScope AI",
      subtitle: "AI Resume Intelligence Platform",
      problem:
        "Resume feedback is often generic, unstructured, and lacks measurable insight.",
      approach:
        "Engineered a structured parsing pipeline with AI-driven skill extraction and contextual recommendation mapping.",
      stack: ["Python", "Flask", "OpenAI API", "React", "System Design"],
      contribution:
        "Designed full system architecture, prompt engineering strategy, and frontend UX framework.",
      impact:
        "Increased resume feedback precision by ~40% through structured skill clustering and semantic mapping.",
    },
    {
      title: "ScamShield",
      subtitle: "LinkedIn Safety Concept",
      problem:
        "Users lack real-time scam detection signals and contextual trust indicators.",
      approach:
        "Designed behavioral trust indicators with interaction-driven micro-feedback loops and prototype validation.",
      stack: ["Figma", "UX Research", "Interaction Design", "Trust Systems"],
      contribution:
        "Led UX research, user journey mapping, and high-fidelity prototyping under hackathon constraints.",
      impact:
        "Enabled faster identification of scam signals through structured trust visualization and interaction-driven feedback."
    },
    {
      title: "MediSpeak",
      subtitle: "AI-Powered Health Assistant",
      problem:
        "Healthcare information is inaccessible, fragmented, and difficult to interpret for non-technical users.",
      approach:
        "Architected an AI-powered assistant focused on clarity, multilingual accessibility, and structured symptom workflows.",
      stack: [
        "Python",
        "AI/ML",
        "Healthcare Tech",
        "Accessibility",
        "UX Architecture",
      ],
      contribution:
        "Designed scalable system architecture with user-centered interaction flows.",
      impact:
        "Won Ideathon for innovation, usability, and accessibility-driven product thinking.",
      badge: "Ideathon Winner",
      badgeColor: "gold",
    },
  ];

  const badgeStyles = {
    gold: "bg-[#FFF4D6] border-[#EFB11D] text-[#B7791F]",
    blue: "bg-[#E6F0FF] border-[#3B82F6] text-[#1D4ED8]",
  };

  return (
    <section id="projects" className="py-24 bg-[#F6F1EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[#A14F2A]">
            Portfolio
          </span>

          <h2 className="mt-4 text-5xl font-[Playfair_Display] text-[#2E2118] leading-tight">
            Engineering Case Studies
          </h2>

          <p className="mt-6 text-lg text-[#4E4036] max-w-3xl leading-relaxed">
            Structured system design, measurable outcomes, and product thinking
            translated into real-world solutions.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative border border-[#E5D8C8] rounded-2xl p-12 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Header Row */}
              <div className="flex justify-between items-start mb-8 flex-wrap gap-6">
                <div>
                  <div className="flex items-center gap-4 mb-2 flex-wrap">
                    <h3 className="text-3xl font-[Playfair_Display] text-[#2E2118]">
                      {project.title}
                    </h3>

                    {project.badge && (
                      <div
                        className={`flex items-center gap-1 px-3 py-1 border rounded-full text-xs font-semibold ${badgeStyles[project.badgeColor]}`}
                      >
                        {project.badgeColor === "gold" ? (
                          <Award size={14} />
                        ) : (
                          <Trophy size={14} />
                        )}
                        {project.badge}
                      </div>
                    )}
                  </div>

                  <p className="text-[#5B4C41] font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="group p-3 bg-white border border-[#E5D8C8] rounded-full hover:border-[#A14F2A] transition-all">
                    <Github
                      size={18}
                      className="text-[#2E2118] group-hover:text-[#A14F2A]"
                    />
                  </button>
                  <button className="group p-3 bg-white border border-[#E5D8C8] rounded-full hover:border-[#A14F2A] transition-all">
                    <ExternalLink
                      size={18}
                      className="text-[#2E2118] group-hover:text-[#A14F2A]"
                    />
                  </button>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-10 text-[#4E4036]">
                <div>
                  <h4 className="font-semibold text-[#2E2118] mb-2">Problem</h4>
                  <p className="leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#2E2118] mb-2">
                    Approach
                  </h4>
                  <p className="leading-relaxed">{project.approach}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#2E2118] mb-2">
                    Contribution
                  </h4>
                  <p className="leading-relaxed">{project.contribution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#2E2118] mb-2">Impact</h4>
                  <p className="leading-relaxed">{project.impact}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-10 flex flex-wrap gap-3">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm font-medium rounded-full border border-[#D8CFC6] bg-white text-[#2E2118] hover:border-[#A14F2A] hover:text-[#A14F2A] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
