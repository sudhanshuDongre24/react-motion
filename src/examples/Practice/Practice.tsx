import React from "react";
import { motion, MotionConfig } from "motion/react";

const Practice = () => {
  return (
    <MotionConfig transition={{ duration: 5 }}>
      <motion.div
        className="w-[100px] h-[100px] bg-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.div
        className="w-[100px] h-[100px] bg-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.div
        className="w-[100px] h-[100px] bg-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.div
        className="w-[100px] h-[100px] bg-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.div
        className="w-[100px] h-[100px] bg-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </MotionConfig>
  );
};

export default Practice;
