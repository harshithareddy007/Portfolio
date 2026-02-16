import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Hero = () => {
  const cardRef = useRef(null);

  /* Parallax Tilt */
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 120, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    rotateX.set(((y - rect.height / 2) / rect.height) * -6);
    rotateY.set(((x - rect.width / 2) / rect.width) * 6);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  /* Stagger */
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-32 bg-[#F4EFEA]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-10"
          >
            <motion.span
              variants={item}
              className="text-sm tracking-[0.3em] text-[#8B0000] uppercase font-medium"
            >
              Product Engineer • Systems Thinker
            </motion.span>

            <motion.h1
              variants={item}
              className="font-[Playfair_Display] text-[60px] lg:text-[74px] leading-[1.07] tracking-tight text-[#2E2118]"
            >
              I design scalable systems
              <br />
              and engineer clarity.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-[#5A4636] max-w-lg leading-relaxed"
            >
              I build scalable software systems grounded in structured thinking,
              architectural rigor, and{" "}
              <span className="font-medium text-[#2E2118]">
                user-centric clarity
              </span>.
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-10 pt-4">

              {/* Primary CTA */}
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#8B0000] text-white px-8 py-3.5 rounded-full 
                shadow-[0_10px_30px_rgba(139,0,0,0.25)] 
                hover:bg-[#6E0000] transition-all duration-300"
              >
                View Work →
              </motion.button>

              {/* Balanced Secondary CTA */}
              <motion.button
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full 
                border border-[#2E2118] text-[#2E2118] 
                hover:border-[#8B0000] hover:text-[#8B0000] 
                transition-all duration-300"
              >
                Let’s Connect →
              </motion.button>

            </motion.div>
          </motion.div>

          {/* RIGHT SIDE CARD */}
          <div className="lg:col-span-5 relative perspective-1000">
            <div className="absolute -top-6 -right-6 w-full h-full border 
            border-[#D6C7B8] rounded-3xl opacity-70"></div>

            <motion.div
              ref={cardRef}
              style={{ rotateX: springX, rotateY: springY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative bg-white p-12 rounded-3xl 
              shadow-[0_20px_60px_rgba(0,0,0,0.08)] 
              border border-[#E6DDD4]"
            >
              <div className="space-y-8">

                {/* Status */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#7B6655]">
                    Current Status
                  </span>
                  <span className="flex items-center gap-2 text-sm text-[#2E2118]">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    Exploring Summer ’26 Internships
                  </span>
                </div>

                <div className="border-t border-[#E6DDD4] pt-6 space-y-6">

                  <div>
                    <p className="text-sm text-[#7B6655]">Education</p>
                    <p className="font-semibold text-[#2E2118]">
                      CMR Institute of Technology
                    </p>
                    <p className="text-sm text-[#7B6655]">
                      B.Tech • CGPA: 8.85
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#7B6655]">Location</p>
                    <p className="font-semibold text-[#2E2118]">
                      Hyderabad, Telangana
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#7B6655] mb-2">Focus Areas</p>
                    <div className="flex flex-wrap gap-3">
                      {["Frontend", "UI/UX", "AI", "Open Source"].map(
                        (item, i) => (
                          <span
                            key={i}
                            className="px-4 py-1.5 text-xs font-medium
                            bg-[#EFE7DF] text-[#2E2118]
                            border border-[#D6C7B8]
                            rounded-full"
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
