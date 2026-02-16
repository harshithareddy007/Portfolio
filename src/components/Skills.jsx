import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Palette,
  Wrench,
  ExternalLink
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "Python", "C", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: ["React.js", "Tailwind CSS", "Git", "GitHub", "Postman API"],
    },
    {
      title: "Design & Product",
      icon: Palette,
      skills: [
        "Figma",
        "Wireframing",
        "Prototyping",
        "Design Thinking",
        "User Flows",
        "Accessibility",
      ],
    },
    {
      title: "Data & Analytics",
      icon: Database,
      skills: ["MySQL", "Tableau", "Excel", "Data Visualization"],
    },
  ];

  const certifications = [
    {
      name: "Machine Learning Fundamentals",
      org: "Microsoft",
      link: "#",
    },
    {
      name: "Junior Software Programmer in C",
      org: "TBOCWBB",
      link: "#",
    },
    {
      name: "Generative AI & Python",
      org: "GUVI",
      link: "#",
    },
    {
      name: "API Fundamentals",
      org: "Postman Student Expert",
      link: "#",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#F6F1EB] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#A14F2A]">
            Skills
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-[Playfair_Display] text-[#2E2118] leading-tight">
            Technical depth,
            <br />
            creative precision.
          </h2>

          <p className="mt-6 text-lg text-[#5A4636] max-w-2xl leading-relaxed">
            A refined toolkit shaped by real-world building, structured experimentation, 
            and product-driven thinking.
          </p>
        </motion.div>

        {/* SKILL CATEGORIES */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-[#E5D8C8] 
                           hover:shadow-xl hover:-translate-y-1 
                           transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <Icon size={24} strokeWidth={1.8} className="text-[#A14F2A]" />
                  <h3 className="text-2xl font-[Playfair_Display] text-[#2E2118]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-sm font-medium
                                 rounded-full border border-[#D8C8B8]
                                 bg-[#F9F5F1]
                                 text-[#2E2118]
                                 hover:border-[#A14F2A]
                                 hover:text-[#A14F2A]
                                 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CERTIFICATIONS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-28 border-t border-[#E5D8C8] pt-16"
        >
          <h3 className="text-3xl font-[Playfair_Display] text-[#2E2118] mb-12">
            Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group border-l-[3px] border-[#A14F2A] pl-6"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-[#2E2118] group-hover:text-[#A14F2A] transition-colors">
                    {cert.name}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ExternalLink size={16} className="text-[#A14F2A]" />
                  </a>
                </div>

                <p className="mt-1 text-sm font-medium text-[#4A3B30]">
                  {cert.org}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
