import { animate, motion } from "motion/react";
import React, { useEffect, useRef } from "react";

const Practice = () => {
  const divRef = useRef(null);
  useEffect(() => animate(divRef.current, {}), []);
  return <motion.div>Practice</motion.div>;
};

export default Practice;
