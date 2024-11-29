import React, { useRef } from "react";
import { motion } from "motion/react";

const Drag = () => {
  const constraintsRefs = useRef(null);

  return (
    <motion.div className="container" ref={constraintsRefs}>
      <motion.div className="item" drag dragConstraints={constraintsRefs} />
    </motion.div>
  );
};

export default Drag;
