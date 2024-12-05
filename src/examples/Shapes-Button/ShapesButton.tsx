import React from "react";
import { motion, MotionConfig } from "motion/react";
import "./styles.css";
import useMeasure from "react-use-measure";
import Shapes from "./Shapes";

const ShapesButton = () => {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = React.useState(false);
  const [isPress, setIsPress] = React.useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <MotionConfig>
      <motion.div>
        <Shapes
          isHover={isHover}
          isPress={isPress}
          mouseX={mouseX}
          mouseY={mouseY}
        />
        Shape
      </motion.div>
    </MotionConfig>
  );
};

export default ShapesButton;
