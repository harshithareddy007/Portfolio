import React from "react";
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F6F1EB] border-t border-[#E5D8C8] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-[Playfair_Display] text-[#2E2118]">
              Harshitha Reddy K
            </h3>
            <p className="text-sm text-[#6B5748] mt-1">
              Product Engineer & Systems Thinker
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/harshithareddy007"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#E5D8C8] flex items-center justify-center hover:border-[#E43D12] hover:text-[#E43D12] transition-all duration-300"
            >
              <Github size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/harshitha-reddy-kondeti"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#E5D8C8] flex items-center justify-center hover:border-[#E43D12] hover:text-[#E43D12] transition-all duration-300"
            >
              <Linkedin size={16} />
            </a>
          </div>

        </div>

        <div className="text-center text-sm text-[#8C7A6B]">
          <p>© {currentYear} Harshitha Reddy K</p>

          <p className="flex justify-center items-center gap-2 mt-2">
            <span>Built with</span>
            <Heart size={14} className="text-[#E43D12] fill-current" />
            <span>React & Framer Motion</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
