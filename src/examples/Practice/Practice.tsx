import { useMotionValue, motion } from "motion/react";
import React, { useEffect } from "react";

const Practice = () => {
  const y = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = y.on("change", (latest) => {
      console.log("y position: ", latest);
    });

    return () => unsubscribe();
  }, [y]);

  return (
    <motion.div
      drag="y"
      style={{ y, width: 100, height: 100, background: "blue" }}
    >
      Practice
    </motion.div>
  );
};

export default Practice;
