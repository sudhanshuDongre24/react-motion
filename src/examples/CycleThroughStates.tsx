import { motion, useCycle } from "motion/react";
import React from "react";

const CycleThroughStates = () => {
  const [animate, cycle] = useCycle(
    { scale: 1, rotate: 0 },
    { scale: 1.25, rotate: 90 }
  );
  return (
    <motion.div
      style={{
        backgroundColor: "white",
        borderRadius: 30,
        width: 150,
        height: 150,
        cursor: "pointer",
      }}
      onTap={cycle}
      animate={animate}
    />
  );
};

export default CycleThroughStates;
