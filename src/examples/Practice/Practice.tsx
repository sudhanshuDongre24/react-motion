import React from "react";
import { motion, useReducedMotion } from "motion/react";

const Practice = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-40 h-40 bg-green-500 text-white flex items-center justify-center rounded-lg"
    >
      {shouldReduceMotion ? "minimal Motion" : "full animaton"}
    </motion.div>
  );
};

export default Practice;
