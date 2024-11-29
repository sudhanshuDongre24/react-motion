import React from "react";
import { motion } from "motion/react";

const DragConstraints = () => {
  return (
    <motion.div
      style={{
        height: 150,
        width: 150,
        borderRadius: 30,
        backgroundColor: "white",
        cursor: "grab",
      }}
      drag
      dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
      dragElastic={0.5}
      dragTransition={{ bounceDamping: 20, bounceStiffness: 600 }}
      whileTap={{ cursor: "grabbing" }}
    />
  );
};

export default DragConstraints;
