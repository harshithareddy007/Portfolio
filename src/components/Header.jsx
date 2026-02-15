import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    // For now, this will trigger download of the PDF from public folder
    const link = document.createElement('a');
    link.href = 'https://customer-assets.emergentagent.com/job_eng-portfolio-9/artifacts/dwr5imu7_Harshitha_Reddy_Resume.pdf';
    link.download = 'Harshitha_Reddy_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold tracking-tight text-gray-900 hover:text-[#E43D12] transition-colors"
          >
            HR
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#E43D12] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleDownloadResume}
              className="ml-4 px-5 py-2.5 bg-[#E43D12] text-white text-sm font-medium rounded-md hover:bg-[#c73410] transition-colors flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#E43D12] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#E43D12] hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleDownloadResume}
              className="w-full mt-2 mx-4 px-5 py-2.5 bg-[#E43D12] text-white text-sm font-medium rounded-md hover:bg-[#c73410] transition-colors flex items-center justify-center space-x-2"
              style={{ width: 'calc(100% - 2rem)' }}
            >
              <Download size={16} />
              <span>Download Resume</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;