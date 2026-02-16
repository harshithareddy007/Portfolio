import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Intro = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);

        // small pause before exiting
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    }, 20); // speed of loading (lower = faster)

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 bg-[#7A1F1F] flex items-center justify-center z-[9999]"
    >
      {/* CENTER CONTAINER */}
      <div className="flex flex-col items-center justify-center space-y-8 w-full px-6 text-center">

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.15em" }}
          animate={{ opacity: 1, letterSpacing: "0em" }}
          transition={{ duration: 1.4 }}
          className="
            text-[#F4EFEA]
            font-serif
            text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px]
            leading-tight
          "
        >
          Harshitha Reddy Kondeti
        </motion.h1>

        {/* LOADING TEXT */}
        <div className="text-[#F4EFEA]/80 text-xs sm:text-sm tracking-widest font-mono">
          initializing system... {progress}%
        </div>

        {/* PROGRESS BAR */}
        <div className="w-64 sm:w-80 md:w-96 h-[3px] bg-[#F4EFEA]/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
            className="h-full bg-[#F4EFEA]"
          />
        </div>

      </div>
    </motion.div>
  );
};

export default Intro;
