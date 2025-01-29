import React, { useState } from "react";
import { motion } from "motion/react";

const Practice = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && (
        <motion.div
          key="box"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="w-[100px] h-[100px] bg-cyan-600"
        />
      )}
    </div>
  );
};

export default Practice;
