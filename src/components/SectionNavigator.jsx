import { useEffect, useState } from "react";

const sections = ["hero", "about", "skills", "projects", "experience", "contact"];

const DotNavigation = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop - 120;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed right-3 lg:right-4 top-1/2 -translate-y-1/2 z-[9998] flex flex-col items-center gap-5">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="group"
        >
          <div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              active === id
                ? "bg-[#8A2D2D]"
                : "bg-[#CFC2B4] opacity-50"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default DotNavigation;
