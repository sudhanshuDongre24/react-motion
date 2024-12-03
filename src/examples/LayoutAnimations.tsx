import React from "react";
import { motion } from "motion/react";

const LayoutAnimations = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div
      style={{
        width: 160,
        height: 100,
        borderRadius: 50,
        background: "rgba(255,255,255,0.4)",
        display: "flex",
        justifyContent: isOpen ? "flex-end" : "flex-start",
        padding: 10,
        cursor: "pointer",
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div
        layout="position"
        transition={{ type: "spring", stiffness: 500, damping: 50 }}
        style={{ background: "white", height: 80, width: 80, borderRadius: 40 }}
      />
    </div>
  );
};

export default LayoutAnimations;
