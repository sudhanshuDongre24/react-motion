import React from "react";
import "../index.css";
import { motion, AnimatePresence } from "motion/react";

const BasicOfMotion = () => {
  const [isVisible, setVisible] = React.useState<boolean>(true);

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        onClick={() => setVisible(!isVisible)}
        className="example-Button"
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="sync">
        {isVisible && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0, y: 0 }}
            animate={{ rotate: "180deg", scale: 1, y: [0, 150, -150, -150, 0] }}
            exit={{ rotate: "0deg", scale: 0 }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{ width: 150, height: 150, background: "black" }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicOfMotion;
