import React, { useState } from "react";
import { motion } from "motion/react";
import "../index.css";

const ScaleCorrection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      layout
      initial={{ borderRadius: 50 }}
      style={{
        width: isOpen ? 400 : 100,
        height: isOpen ? 400 : 100,
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        cursor: "pointer",
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div
        layout
        style={{
          width: 30,
          height: 30,
          background: "#f107a3",
          borderRadius: 50,
        }}
      />
    </motion.div>
  );
};

export default ScaleCorrection;

/* 
<motion.div
      layout
      data-IsOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className="parent"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout className="child" />
    </motion.div>
 */
