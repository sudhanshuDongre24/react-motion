import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

const pink = (saturation: number) => `hsl(327, ${saturation}%, 50%)`;
const UseVelocity = () => {
  const x = useMotionValue(0);
  const xSmooth = useSpring(x, { damping: 50, stiffness: 400 });

  const xVelocity = useVelocity(xSmooth);

  const scale = useTransform(xVelocity, [-3000, 0, 3000], [2, 1, 2], {
    clamp: false,
  });
  const backgroundColor = useTransform(
    xVelocity,
    [-2000, 0, 2000],
    [pink(100), pink(0), pink(100)]
  );

  return (
    <div className="example-container">
      <motion.div
        drag="x"
        dragElastic={1}
        dragConstraints={{ left: -200, right: 200 }}
        style={{ x, scale, backgroundColor }}
      />
    </div>
  );
};

export default UseVelocity;
