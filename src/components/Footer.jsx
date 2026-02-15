import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Harshitha Reddy K</h3>
            <p className="text-sm leading-relaxed">
              Software Engineer passionate about building meaningful solutions through code and design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm hover:text-[#E43D12] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm hover:text-[#E43D12] transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm hover:text-[#E43D12] transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm hover:text-[#E43D12] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:kondatiharshu06@gmail.com" className="hover:text-[#E43D12] transition-colors">
                  kondatiharshu06@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918247422652" className="hover:text-[#E43D12] transition-colors">
                  +91 8247422652
                </a>
              </li>
              <li className="text-gray-400">
                Hyderabad, Telangana
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Harshitha Reddy K. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 flex items-center space-x-1">
              <span>Built with</span>
              <Heart size={14} className="text-[#E43D12] fill-current" />
              <span>and React</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;