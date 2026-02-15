import React from 'react';
import { Award, BookOpen, Code2, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Open Source',
      description: 'GSSOC\'25 Contributor',
      color: '#E43D12'
    },
    {
      icon: Award,
      title: 'Ideathon Winner',
      description: 'MediSpeak - AI Health Assistant',
      color: '#EFB11D'
    },
    {
      icon: BookOpen,
      title: 'Research Focused',
      description: 'Seeking summer research internship',
      color: '#D6536D'
    },
    {
      icon: Users,
      title: 'UI/UX Experience',
      description: 'Virtual Intern at Cognifyz',
      color: '#E43D12'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-[#E43D12] tracking-wider uppercase">About Me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Engineering mindset,
            <br />
            <span className="text-gray-600">design-driven approach</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="border-l-4 border-[#E43D12] pl-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a computer science undergraduate passionate about building software that matters. My work spans across frontend development, UI/UX design, and AI-powered solutions.
              </p>
            </div>

            <p className="text-base text-gray-600 leading-relaxed">
              I believe in the intersection of strong engineering fundamentals and thoughtful design. Whether it's architecting a resume analysis platform or designing safety indicators for LinkedIn, I approach problems with both technical rigor and user empathy.
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              Currently exploring research opportunities in software systems and algorithms while contributing to open-source projects and building solutions that improve user experiences.
            </p>

            <div className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Core Principles</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-[#E43D12] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Code with purpose - every line should solve a real problem</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-[#EFB11D] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Design for humans - technology serves users, not the other way around</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-[#D6536D] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Learn continuously - stay curious and embrace new challenges</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-lg border-l-4 hover:shadow-lg transition-shadow"
                  style={{ borderLeftColor: item.color }}
                >
                  <Icon size={28} style={{ color: item.color }} className="mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;