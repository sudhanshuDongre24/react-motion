import { useScroll, motion } from "motion/react";
import React, { useRef } from "react";

const Practice = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });
  return (
    <div
      ref={sectionRef}
      style={{
        height: "150vh",
      }}
    >
      <div
        style={{
          height: "100vh",
          backgroundColor: "#f0f0f0",
          position: "relative",
          padding: "2rem",
        }}
      >
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "5px",
            backgroundColor: "blue",
            width: "100%",
            scaleX: scrollYProgress,
            transformOrigin: "left",
          }}
        />
        <h1>Scroll to see progress bar in action</h1>
      </div>
    </div>
  );
};

export default Practice;
