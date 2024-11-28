import React from "react";
import { motion } from "motion/react";

const ColorsKeyFrameAnimation = () => {
  return (
    <motion.div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#60f",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
      }}
      animate={{ backgroundColor: ["#0af", "rgba(0,0,0,0)", "#fa0"] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#fff",
        }}
        animate={{ rotate: [0, 180] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.div>
  );
};

export default ColorsKeyFrameAnimation;
