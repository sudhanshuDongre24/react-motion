import { useInView } from "motion/react";
import React from "react";

const Practice = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return <div>Practice</div>;
};

export default Practice;
