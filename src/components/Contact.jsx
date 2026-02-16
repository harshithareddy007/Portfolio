import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("success");

    setTimeout(() => {
      setFormStatus("");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kondatiharshu06@gmail.com",
      link: "mailto:kondatiharshu06@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8247422652",
      link: "tel:+918247422652",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#F6F1EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-sm tracking-widest uppercase text-[#A14F2A]">
            Contact
          </span>

          <h2 className="mt-4 text-5xl font-[Playfair_Display] text-[#2E2118] leading-tight">
            Let’s Work Together
          </h2>

          <p className="mt-6 text-lg text-[#5A4636] max-w-2xl">
            Open to research collaborations, product building, and meaningful system design work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-20">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-12">

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-[Playfair_Display] text-[#2E2118] mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={index} className="flex items-start gap-5">
                      <div className="w-11 h-11 bg-white border border-[#E8DED2] rounded-lg flex items-center justify-center">
                        <Icon size={18} className="text-[#E43D12]" />
                      </div>

                      <div>
                        <p className="text-sm text-[#6B5748]">{item.label}</p>

                        {item.link ? (
                          <a
                            href={item.link}
                            className="font-semibold text-[#2E2118] hover:text-[#E43D12] underline-offset-4 hover:underline transition-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-[#2E2118]">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-[Playfair_Display] text-[#2E2118] mb-8">
                Connect
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/harshithareddy007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-[#E8DED2] rounded-full flex items-center justify-center hover:border-[#E43D12] hover:text-[#E43D12] transition-all"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/harshitha-reddy-kondeti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-[#E8DED2] rounded-full flex items-center justify-center hover:border-[#E43D12] hover:text-[#E43D12] transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-6 border border-[#E8DED2] bg-white/60 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-semibold text-[#2E2118]">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-sm text-[#6B5748]">
                Actively seeking research internships and structured system design collaborations.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-5 py-3 border border-[#E8DED2] bg-white rounded-lg focus:border-[#E43D12] outline-none transition-all"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-5 py-3 border border-[#E8DED2] bg-white rounded-lg focus:border-[#E43D12] outline-none transition-all"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-[#E8DED2] bg-white rounded-lg focus:border-[#E43D12] outline-none transition-all"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-[#E8DED2] bg-white rounded-lg focus:border-[#E43D12] outline-none transition-all resize-none"
              ></textarea>

              {formStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-sm">
                    Thank you! I’ll get back to you soon.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="px-8 py-3 bg-[#8B0000] text-white rounded-full hover:bg-[#6E0000] transition-all shadow-md flex items-center gap-2"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
