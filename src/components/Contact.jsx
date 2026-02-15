import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Since this is frontend-only, we'll show a success message
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kondatiharshu06@gmail.com',
      link: 'mailto:kondatiharshu06@gmail.com',
      color: '#E43D12'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8247422652',
      link: 'tel:+918247422652',
      color: '#EFB11D'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      link: null,
      color: '#D6536D'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-[#E43D12] tracking-wider uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Open to collaborations, research opportunities, and interesting projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${item.color}15` }}
                        >
                          <Icon size={20} style={{ color: item.color }} />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">{item.label}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-gray-900 font-semibold hover:text-[#E43D12] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/harshithareddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#E43D12] hover:text-white transition-colors group"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/harshithareddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#E43D12] hover:text-white transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-[#EFB11D]">
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-bold text-gray-900">Available for opportunities</span>
              </div>
              <p className="text-sm text-gray-600">
                Currently seeking summer research internships and collaborative projects
              </p>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#E43D12] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#E43D12] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#E43D12] focus:outline-none transition-colors"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#E43D12] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              {formStatus === 'success' && (
                <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-md">
                  <p className="text-green-700 font-medium">Thank you! Your message has been received. I'll get back to you soon.</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#E43D12] text-white font-medium rounded-md hover:bg-[#c73410] transition-all hover:shadow-lg flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;