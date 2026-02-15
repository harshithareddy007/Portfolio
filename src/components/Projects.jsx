import React from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SkillScope AI',
      subtitle: 'Resume Analysis Platform',
      problem: 'Resume feedback is often generic and lacks actionable insights for skill development.',
      approach: 'Built a structured data processing pipeline with rule-based analysis and AI-powered personalized recommendations.',
      stack: ['Python', 'AI Prompts', 'Data Processing', 'UI/UX Design'],
      contribution: 'End-to-end development: from interface design focused on clarity and usability to backend logic for resume parsing and AI integration.',
      impact: 'Improved interpretability of resume feedback with personalized skill insights and learning roadmaps.',
      color: '#E43D12',
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'ScamShield',
      subtitle: 'LinkedIn Safety Concept',
      problem: 'LinkedIn users lack real-time indicators to identify potential scams or suspicious profiles.',
      approach: 'Conducted UX research and designed in-feed safety indicators with interactive prototypes for trust visualization.',
      stack: ['Figma', 'UX Research', 'Prototyping', 'Design Thinking'],
      contribution: 'Led the entire design process from user research to high-fidelity prototypes, focusing on product usability and real-world impact.',
      impact: 'Created a concept that prioritizes user trust and safety without disrupting the LinkedIn experience.',
      color: '#EFB11D',
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'MediSpeak',
      subtitle: 'AI-Powered Health Assistant',
      problem: 'Healthcare information is often complex and inaccessible, especially for users with limited medical knowledge.',
      approach: 'Proposed an AI-powered health assistant with focus on accessibility, clarity, and user-friendly interaction design.',
      stack: ['AI/ML', 'Healthcare Tech', 'Accessibility Design', 'Innovation'],
      contribution: 'Conceptualized and designed the solution architecture, focusing on problem framing and user-centered design principles.',
      impact: 'Won Ideathon for innovation, problem-solving approach, and practical solution design.',
      color: '#D6536D',
      award: 'Ideathon Winner',
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'GSSOC\'25 Contribution',
      subtitle: 'Open Source Web Project',
      problem: 'TheCawnporeMag.github.io needed improvements in site structure, content organization, and documentation.',
      approach: 'Contributed through GitHub workflow: identified issues, implemented fixes, and collaborated via pull requests and code reviews.',
      stack: ['HTML', 'CSS', 'Git', 'GitHub', 'Open Source'],
      contribution: 'Multiple contributions improving site structure, content quality, and documentation. Collaborated with maintainers and community.',
      impact: 'Enhanced user experience and site maintainability through structured code improvements.',
      color: '#E43D12',
      links: {
        github: 'https://github.com/TheCawnporeMag',
        live: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-[#E43D12] tracking-wider uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Engineering Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Projects that demonstrate problem-solving, system design, and user-centered thinking—from concept to execution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300" style={{ backgroundColor: project.color }}></div>
              
              <div className="p-8 lg:p-10">
                {/* Project Header */}
                <div className="flex flex-wrap items-start justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{project.title}</h3>
                      {project.award && (
                        <div className="flex items-center space-x-1 px-3 py-1 bg-yellow-100 border border-yellow-300 rounded-full">
                          <Award size={14} className="text-yellow-700" />
                          <span className="text-xs font-semibold text-yellow-700">{project.award}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-base text-gray-600 font-medium">{project.subtitle}</p>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white border border-gray-300 rounded-md hover:border-gray-900 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} className="text-gray-700" />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white border border-gray-300 rounded-md hover:border-gray-900 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} className="text-gray-700" />
                    </a>
                  </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Problem</h4>
                    <p className="text-gray-700 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Approach</h4>
                    <p className="text-gray-700 leading-relaxed">{project.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Contribution</h4>
                    <p className="text-gray-700 leading-relaxed">{project.contribution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Impact</h4>
                    <p className="text-gray-700 leading-relaxed">{project.impact}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white border-2 border-gray-200 text-sm font-medium text-gray-700 rounded-md hover:border-gray-900 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;