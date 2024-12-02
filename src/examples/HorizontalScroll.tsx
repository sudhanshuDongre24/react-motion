import { useScroll, motion } from "motion/react";
import React from "react";

const HorizontalScroll = () => {
  const ref = React.useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="px-10 flex  items-baseline justify-center gap-10 w-full ">
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default HorizontalScroll;
