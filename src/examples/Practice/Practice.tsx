import { useInView, motion } from "motion/react";
import React, { useRef } from "react";

const Practice = () => {
  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { root: containerRef, amount: 0.5 });

  return (
    <div className="h-screen flex justify-center items-center">
      <div
        ref={containerRef}
        className="w-80 h-60 overflow-y-scroll border-2 border-gray-400 p-4"
      >
        <div className="h-40 bg-gray-200 mb-4">Item 1</div>
        <motion.div
          ref={itemRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="h-40 bg-green-500 text-white flex items-center justify-center"
        >
          {isInView ? "I'm visible! 🎉" : "Scroll down"}
        </motion.div>
        <div className="h-40 bg-gray-200 mt-4">Item 3</div>
      </div>
    </div>
  );
};

export default Practice;
