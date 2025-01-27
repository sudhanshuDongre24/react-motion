import React from "react";
import { motion } from "motion/react";

const Practice = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -200, right: 200, top: -100, bottom: 100 }}
      onPan={(event, info) => console.log("Panning at:", info.point)}
      className="w-[150px] h-[150px] bg-green-400 rounded-xl flex justify-center items-center"
    >
      Practice
    </motion.div>
  );
};

export default Practice;
