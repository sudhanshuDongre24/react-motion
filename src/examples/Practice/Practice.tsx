import React from "react";
import { motion } from "motion/react";

const Practice = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="w-[100px] h-[100px] bg-[#f5f5f5] rounded-[5px] "
      />
    </div>
  );
};

export default Practice;
