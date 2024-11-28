import React from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

const ColorInterpolation = () => {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#a0d", "rgba(0,0,0,0)", "#0bf"]
  );

  return (
    <motion.div
      style={{
        backgroundColor: background,
        width: "100vw",
        display: "flex",
        height: "100vh",
        placeItems: "center",
        placeContent: "center",
      }}
    >
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          backgroundColor: "#fff",
          x,
          cursor: "grab",
        }}
        drag="x"
        dragConstraints={{ right: 0, left: 0 }}
        whileTap={{ cursor: "grabbing" }}
      />
    </motion.div>
  );
};

export default ColorInterpolation;
