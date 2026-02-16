import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "UI/UX Virtual Intern",
      company: "Cognifyz Technologies",
      period: "2025",
      responsibilities: [
        "Designed structured user personas, journey maps, and mobile wireframes",
        "Built clarity-focused interface layouts grounded in usability principles",
        "Applied accessibility-aware UI decisions aligned with WCAG standards",
        "Collaborated cross-functionally to ship user-centered design solutions",
      ],
      skills: ["Figma", "User Research", "Wireframing", "Accessibility"],
    },
    {
      role: "Open Source Contributor (GSSOC ’25)",
      company: "GirlScript Summer of Code",
      period: "2025",
      responsibilities: [
        "Resolved UI rendering inconsistencies and improved semantic HTML structure",
        "Refactored CSS components for better maintainability and modularity",
        "Optimized frontend performance across multiple open-source repositories",
        "Collaborated via structured GitHub workflow including PR reviews and issue tracking",
      ],
      skills: ["Git", "GitHub", "HTML", "CSS", "Open Source"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#F6F1EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[#A14F2A]">
            Experience
          </span>

          <h2 className="mt-4 text-5xl font-[Playfair_Display] text-[#2E2118] leading-tight">
            Professional Journey
          </h2>

          <p className="mt-6 text-lg text-[#4E4036] max-w-2xl">
            Practical experience in interface design, system thinking,
            and collaborative open-source engineering.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-14 max-w-5xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="border border-[#E5D8C8] rounded-xl p-10 bg-white/60 hover:bg-white/80 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase size={20} className="text-[#E43D12]" />
                    <h3 className="text-2xl font-[Playfair_Display] text-[#2E2118]">
                      {exp.role}
                    </h3>
                  </div>

                  <p className="text-lg font-semibold text-[#3E2C20]">
                    {exp.company}
                  </p>

                  <div className="flex items-center gap-2 text-[#6B5748] mt-1">
                    <Calendar size={14} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-[#A14F2A] mb-5">
                  Key Contributions
                </h4>

                <ul className="space-y-4">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#E43D12] rounded-full mt-2"></span>
                      <span className="text-[#4E4036] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium rounded-full border border-[#E8DED2] bg-white text-[#3E2C20] hover:border-[#E43D12] hover:text-[#E43D12] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Seeking CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 max-w-5xl"
        >
          <div className="border border-[#F1C5B5] bg-[#FFF8F5] rounded-xl p-10">
            <h4 className="text-2xl font-[Playfair_Display] text-[#2E2118] mb-4">
              Currently Seeking
            </h4>

            <p className="text-[#4E4036] leading-relaxed max-w-3xl">
              Exploring summer research internship opportunities focused on
              software systems, algorithmic thinking, and human-centered
              computing. Interested in structured mentorship environments
              where systems thinking meets real-world impact.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
