import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // later we change properly
    link.target = "_blank";
    link.click();
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#F5EFE8]/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Name - TOP LEFT */}
          <div>
            <h1 className="font-[Playfair_Display] text-xl tracking-wide text-[#2E2118]">
              Harshitha Reddy K
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-[#3B2A21] hover:text-[#8B0000] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute left-4 -bottom-1 w-0 h-[2px] bg-[#8B0000] transition-all duration-300 group-hover:w-[60%]"></span>
              </button>
            ))}

            <button
              onClick={handleDownloadResume}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#7A0000] to-[#B00000] text-white text-sm rounded-full hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#2E2118]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
