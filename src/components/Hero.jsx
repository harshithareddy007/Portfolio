import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Asymmetric positioning */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-white border-l-4 border-[#E43D12] text-sm font-medium text-gray-700 shadow-sm">
                  Software Engineer
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Harshitha
                <br />
                <span className="text-[#E43D12]">Reddy K</span>
              </h1>

              <div className="flex items-start space-x-3 border-l-4 border-[#EFB11D] pl-6">
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                  Building scalable systems and intuitive interfaces.
                  <br />
                  <span className="text-gray-800 font-medium">UI/UX & Frontend Focus</span>
                </p>
              </div>

              <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                Computer science undergraduate with strong programming fundamentals and interest in software systems, algorithms, and research-driven problem solving. Experienced in building projects, contributing to open source, and exploring AI concepts.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-[#E43D12] text-white font-medium rounded-md hover:bg-[#c73410] transition-all hover:shadow-lg flex items-center space-x-2 group"
                >
                  <span>View Projects</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-white text-gray-900 font-medium rounded-md border-2 border-gray-300 hover:border-[#E43D12] hover:text-[#E43D12] transition-all"
                >
                  Get In Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-6">
                <a
                  href="https://github.com/harshithareddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-gray-200 rounded-md hover:border-[#E43D12] hover:shadow-md transition-all group"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-gray-700 group-hover:text-[#E43D12] transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/harshithareddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-gray-200 rounded-md hover:border-[#E43D12] hover:shadow-md transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-gray-700 group-hover:text-[#E43D12] transition-colors" />
                </a>
                <a
                  href="mailto:kondatiharshu06@gmail.com"
                  className="p-3 bg-white border border-gray-200 rounded-md hover:border-[#E43D12] hover:shadow-md transition-all group"
                  aria-label="Email"
                >
                  <Mail size={20} className="text-gray-700 group-hover:text-[#E43D12] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Decorative geometric shapes */}
              <div className="absolute -top-4 -right-4 w-72 h-72 border-4 border-[#EFB11D] rounded-lg opacity-20"></div>
              <div className="absolute top-8 right-8 w-72 h-72 border-4 border-[#D6536D] rounded-lg opacity-20"></div>
              <div className="relative bg-white p-12 rounded-lg shadow-xl border-t-4 border-[#E43D12]">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b-2 border-gray-100">
                    <span className="text-sm font-medium text-gray-500">Current Status</span>
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Education</p>
                    <p className="font-semibold text-gray-900">CMR Institute of Technology</p>
                    <p className="text-sm text-gray-600">B.Tech • CGPA: 8.85</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="font-semibold text-gray-900">Hyderabad, Telangana</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Focus Areas</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Frontend</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">UI/UX</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">AI</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Open Source</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;