import React, { useRef } from "react";
import { motion, useCycle } from "motion/react";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `cicle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "cicle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const SideMenu = () => {
  const [isOpen, toogleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <motion.div className="" variants={sidebar} />
    </motion.nav>
  );
};

export default SideMenu;
