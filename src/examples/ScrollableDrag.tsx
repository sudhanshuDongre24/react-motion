import React, { useRef } from "react";
import { motion } from "motion/react";

const ScrollableDrag = () => {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="w-[200px] h-[200px] bg-[rgba(255,255,255,0.5)] rounded-[40px]"
    >
      <motion.div
        drag="x"
        dragConstraints={ref}
        onMeasureDragConstraints={console.log}
        className="w-[600px] h-[200px] rounded-[40px] bg-[rgba(255,255,255,0.5)]"
      />
    </div>
  );
};

export default ScrollableDrag;
