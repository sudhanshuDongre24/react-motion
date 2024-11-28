import React from "react";
import { motion } from "motion/react";

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
      <motion.button className="example-Button">Click Me</motion.button>
    </div>
  );
};

export default Gesture;
