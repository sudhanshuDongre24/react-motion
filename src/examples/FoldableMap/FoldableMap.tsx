import React, { useState } from "react";
import { motion, useMotionValue } from "motion/react";

const FoldableMap = () => {
  const xDrag = useMotionValue(0);
  const [isFolded, setIsFolded] = useState(true);

  return (
    <div className="overflow-x-clip">
      <motion.div
        initial="folded"
        animate={isFolded ? "folded" : "open"}
        variants={{
          open: { scale: 1 },
          folded: { scale: 0.9 },
        }}
        className="relative flex flex-col items-center"
      >
        <motion.div whileHover="hovering">
          <div>
            <motion.div />
            <motion.div />
            <motion.div />
          </div>
          <motion.div />
        </motion.div>
        <motion.div>
          <p className="rounded-2xl bg-white px-12 py-5 text-[hsl(73_69%_26%)]">
            Pick your favorite Spot
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FoldableMap;
