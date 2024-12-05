import { MotionConfig, motion, useMotionValue } from "motion/react";
import React, { Suspense } from "react";
import useMeasure from "react-use-measure";
import "./style.css";
import Shapes from "./Shapes";

const ShapesButton = () => {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const [isPress, setIsPress] = React.useState<boolean>(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const transition = {
    type: "spring",
    duration: 0.7,
    bounce: 0.2,
  };

  return (
    <MotionConfig transition={transition}>
      <motion.button
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          press: { scale: 1.5 },
          hover: { scale: 1.4 },
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapes"
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        >
          <div className="blush pink" />
          <div className="blush blue" />
          <div className="container">
            <Suspense fallback={null}>
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div
          className="label"
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
        >
          Play
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
};

export default ShapesButton;
