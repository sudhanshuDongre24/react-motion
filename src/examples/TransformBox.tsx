import React from "react";
import { motion, useMotionValue, useTime, useTransform } from "motion/react";

const TransformBox = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  const x = useMotionValue(0);
  const y = useTransform(time, (latest) => Math.sin(latest / 1000) * 100);

  console.log("time: ", time);
  console.log("rotate: ", rotate);
  console.log("x: ", x);
  console.log("y: ", y);

  return (
    <div className="example-container">
      <motion.div style={{ rotate }} />
    </div>
  );
};

export default TransformBox;
