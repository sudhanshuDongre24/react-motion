import { useMotionValue, motion, useTransform } from "motion/react";
import React from "react";
import { useEffect, useRef } from "react";

function useViewportDimensions() {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = window.innerWidth;
    dimensions.current.height = window.innerHeight;
  }, []);

  return dimensions.current;
}

const ConicGradientPointer = () => {
  const viewport = useViewportDimensions();
  const gradientX = useMotionValue(0.5);
  const gradientY = useMotionValue(0.5);

  const background = useTransform(
    [gradientX, gradientY],
    ([x, y]) =>
      `conic-gradient(from 0deg at ${x * 100}% ${
        y * 100
      }%, cyan, magenta, yellow, cyan)`
  );

  return (
    <motion.div
      className="inset-0 absolute cursor-none"
      style={{ background }}
      onPointerMove={(e) => {
        gradientX.set(e.clientX / viewport.width);
        gradientY.set(e.clientY / viewport.height);
      }}
    />
  );
};

export default ConicGradientPointer;
