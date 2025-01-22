import React from "react";
import { motion } from "motion/react";
import MenuItem from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, delayChildren: -1 },
  },
};

const Navigation = () => {
  return (
    <motion.ul variants={variants}>
      {[0, 1, 2, 3, 4].map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
