import React from "react";
import { motion, useCycle } from "motion/react";

const CyclingParentAndChild = () => {
  const [current, cycle] = useCycle("off", "on");

  return (
    <div
      style={{
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: "#f0f0f0",
        display: "flex",
        placeItems: "center",
        placeContent: "center",
      }}
    >
      <motion.div
        style={{
          width: 51,
          height: 31,
          backgroundColor: "rgba(120, 120, 128, .16)",
          borderRadius: 16,
          cursor: "pointer",
          position: "relative",
        }}
        animate={current}
        initial={false}
        onTapStart={cycle}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#34C759",
            borderRadius: 16,
          }}
          transition={{ ease: "easeInOut" }}
          variants={{ off: { scale: 0 }, on: { scale: 1 } }}
        />
        <motion.div
          style={{
            position: "absolute",
            height: 27,
            width: 27,
            backgroundColor: "white",
            top: 2,
            left: 2,
            borderRadius: 16,
            boxShadow:
              "0 0 0 0.5px rgba(0,0,0,.04), 0 3px 8px 0 rgba(0,0,0,.15), 0 3px 1px 0 rgba(0,0,0,.06)",
          }}
          transition={{ ease: "easeInOut" }}
          variants={{ off: { x: 0 }, on: { x: 20 } }}
        />
      </motion.div>
    </div>
  );
};

export default CyclingParentAndChild;
