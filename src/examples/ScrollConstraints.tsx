import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import { clamp } from "@popmotion/popcorn";

function useScrollConstraints(ref) {
  const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });
  useEffect(() => {
    const element = ref.current;
    const viewportHeight = element.offsetHeight;
    const contentHeight = element.firstChild.offsetHeight;

    setConstraints({ top: viewportHeight - contentHeight, bottom: 0 });
  }, []);

  return constraints;
}

const ScrollConstraints = () => {
  const [count, setCount] = useState(0);
  const y = useMotionValue(0);
  const ref = useRef(null);

  const { top, bottom } = useScrollConstraints(ref);

  function handleWheel(event) {
    event.preventDefault();
    const newY = y.get() - event.deltaY;
    const clampedY = clamp(top, bottom, newY);
    y.stop();
    y.set(clampedY);
  }

  return (
    <>
      <div className="example-container">
        <div className="container" ref={ref} onWheel={handleWheel}>
          <motion.div
            drag="y"
            dragConstraints={{ top, bottom }}
            className="scrollable"
            style={{ y }}
          >
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ScrollConstraints;
