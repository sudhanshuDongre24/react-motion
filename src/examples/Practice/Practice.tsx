import { useAnimationFrame, motion, useMotionValue } from "motion/react";
import React, { useState } from "react";

const Practice = () => {
  const [fps, setFps] = useState(0);
  let lastTime = 0;

  useAnimationFrame((time) => {
    const delta = time - lastTime;
    lastTime = time;
    setFps(Math.round(1000 / delta));
  });
  return (
    <div className="fixed top-3 left-4 bg-black text-white px-4 py-2 rounded-md">
      FPS:{fps}
    </div>
  );
};

export default Practice;
