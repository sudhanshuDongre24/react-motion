import React from "react";
import { motion } from "motion/react";

const DynamicNavbar = () => {
  return (
    <div className="App">
      <motion.div className="navbar">
        <motion.div>Dynamic Navbar</motion.div>
      </motion.div>
      <h1>DynamicNavbar</h1>
    </div>
  );
};

export default DynamicNavbar;
