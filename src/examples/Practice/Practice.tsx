import { useTime, motion, useTransform } from "motion/react";
import React from "react";

const Practice = () => {
  const time = useTime();
  const backgroundColor = useTransform(
    time,
    [0, 2000],
    ["#ff7f50", "#6a5acd"],
    { clamp: false }
  );
  return (
    <motion.div
      className="w-[40px] h-[40px] rounded-lg mx-auto mt-20 shadow-xl"
      style={{
        backgroundColor,
      }}
    >
      Practice
    </motion.div>
  );
};

export default Practice;
