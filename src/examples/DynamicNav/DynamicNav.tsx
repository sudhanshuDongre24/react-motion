import React from "react";
import "./styles.css";
import { motion, useScroll, useTransform } from "motion/react";
import Content from "./Content";

const DynamicNav = () => {
  const { scrollY } = useScroll();
  console.log(scrollY);
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,183,255,0)", "rgba(0,183,255,1)"]
  );
  const height = useTransform(scrollY, [0, 500], [120, 60]);

  return (
    <div className="App">
      <motion.div id="navigation" style={{ background, height }}>
        <div id="logo" />
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </motion.div>
      <Content />
    </div>
  );
};

export default DynamicNav;
