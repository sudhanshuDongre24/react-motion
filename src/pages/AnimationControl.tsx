import React from "react";
import { motion, useAnimationControls } from "motion/react";

const AnimationControl = () => {
  const control = useAnimationControls();

  const handleClick = () => {
    control.start("flip");
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button onClick={handleClick} className="example-Button">
        Flip It!
      </button>
      <motion.div
        style={{ backgroundColor: "white", height: 150, width: 150 }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={control}
      />
    </div>
  );
};

export default AnimationControl;
