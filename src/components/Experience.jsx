import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experience = {
    role: 'UI/UX Virtual Intern',
    company: 'Cognifyz Technologies',
    period: '2024',
    responsibilities: [
      'Designed user personas, user flows, and wireframes for mobile interfaces',
      'Created mood boards and applied clarity-focused layouts to improve usability',
      'Practiced design thinking and accessibility-aware UI decisions',
      'Collaborated with team to deliver user-centered design solutions'
    ],
    skills: ['Figma', 'User Research', 'Wireframing', 'Mobile UI', 'Design Thinking']
  };

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-[#E43D12] tracking-wider uppercase">Experience</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Practical experience in UI/UX design and cross-functional collaboration.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl">
          <div className="bg-white rounded-lg border-l-4 border-[#E43D12] shadow-sm hover:shadow-xl transition-shadow p-8 lg:p-10">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between mb-6 gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Briefcase size={24} className="text-[#E43D12]" />
                  <h3 className="text-2xl font-bold text-gray-900">{experience.role}</h3>
                </div>
                <p className="text-lg text-gray-700 font-semibold mb-2">{experience.company}</p>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar size={16} />
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Key Responsibilities</h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-[#E43D12] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Skills Applied</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 text-sm font-medium text-gray-700 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-4xl">
          <div className="bg-white p-6 rounded-lg border-t-4 border-[#EFB11D] shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#EFB11D] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Briefcase size={24} className="text-[#EFB11D]" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Currently Seeking</h4>
                <p className="text-gray-600 leading-relaxed">
                  Looking for summer research internship opportunities to learn rigorous research practices under faculty mentorship and contribute to cutting-edge projects in software systems and algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;