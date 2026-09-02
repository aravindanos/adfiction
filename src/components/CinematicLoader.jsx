import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "../styles/cinematic-loader.css";

function CinematicLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: {
              duration: 0.7,
              ease: "easeInOut",
            },
          }}
        >
          <div className="loader-background"></div>

          <div className="loader-content">
            <motion.div
              className="loader-symbol"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              ▶
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
                letterSpacing: "20px",
              }}
              animate={{
                opacity: 1,
                y: 0,
                letterSpacing: "8px",
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              ADFICTION
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.5,
              }}
            >
              STORIES BEYOND REALITY
            </motion.p>
          </div>

          <motion.div
            className="loader-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.1,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CinematicLoader;