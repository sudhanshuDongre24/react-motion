import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const DynamicNavbar = () => {
  const initialValue = 140;
  const finalValue = 88;
  const thresholdY = 170;

  const speed = 1;
  const scrollDistance = (initialValue - finalValue) / speed;

  const startY = 0;
  const endY = startY + scrollDistance;

  const { scrollY } = useScroll();
  const scrollOutput = useTransform(
    scrollY,
    [startY, endY, endY],
    [initialValue, finalValue, finalValue],
    { clamp: false }
  );

  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(
    () => scrollY.onChange((latest) => setIsPastThreshold(latest > thresholdY)),
    []
  );

  return (
    <div className="App">
      <motion.div className="navbar" style={{ height: scrollOutput }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isPastThreshold ? 1 : 0,
            scale: isPastThreshold ? 1 : 0.5,
          }}
        >
          Dynamic Navbar
        </motion.div>
      </motion.div>
      <h1>DynamicNavbar</h1>
    </div>
  );
};

export default DynamicNavbar;
