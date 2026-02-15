import React from 'react';
import { Code, Database, Palette, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      color: '#E43D12',
      skills: ['Java', 'Python', 'C', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Tools',
      icon: Wrench,
      color: '#EFB11D',
      skills: ['Tailwind CSS', 'Git', 'GitHub', 'Postman API']
    },
    {
      title: 'Design & Product',
      icon: Palette,
      color: '#D6536D',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'Design Thinking', 'User Flows', 'Accessibility']
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: '#E43D12',
      skills: ['MySQL', 'Tableau', 'Data Visualization']
    }
  ];

  const certifications = [
    { name: 'Machine Learning Fundamentals', org: 'Microsoft' },
    { name: 'Junior Software Programmer in C', org: 'TBOCWBB' },
    { name: 'Generative AI & Python', org: 'GUVI' },
    { name: 'API Fundamentals', org: 'Postman Student Expert' }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-[#E43D12] tracking-wider uppercase">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A comprehensive toolkit spanning development, design, and data—built through hands-on projects and continuous learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-t-4 shadow-sm hover:shadow-xl transition-all"
                style={{ borderTopColor: category.color }}
              >
                <div className="mb-4">
                  <Icon size={32} style={{ color: category.color }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: category.color }}></span>
                      <span className="text-sm text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="border-t-2 border-gray-200 pt-16">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Certifications</h3>
            <p className="text-gray-600">Continuous learning through structured programs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-5 bg-white border-l-4 border-[#EFB11D] rounded-md shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-gray-900 text-sm mb-2 leading-snug">{cert.name}</p>
                <p className="text-xs text-gray-500 font-medium">{cert.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;