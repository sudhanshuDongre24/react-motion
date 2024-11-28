import React from "react";
import { motion } from "motion/react";

const ColorsSwitchingBetweenStates = () => {
  const [isHover, setHover] = React.useState<boolean>(false);

  return (
    <motion.div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        placeContent: "center",
        placeItems: "center",
        backgroundColor: "#60f",
      }}
      animate={{ backgroundColor: isHover ? "#60f" : "#20a5f6" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#fff",
        }}
        animate={{ scale: isHover ? 0.8 : 1, rotate: isHover ? 90 : 0 }}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      />
    </motion.div>
  );
};

export default ColorsSwitchingBetweenStates;
