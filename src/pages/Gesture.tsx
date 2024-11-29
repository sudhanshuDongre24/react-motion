import React from "react";
import { motion, MotionConfig } from "motion/react";

const Gesture = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          className="example-Button"
        >
          Click Me!
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
          style={{
            backgroundColor: "red",
          }}
          className="example-Button"
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gesture;
