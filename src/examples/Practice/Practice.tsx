import React from "react";
import { LazyMotion, domAnimation } from "motion/react";
import { i } from "motion/react-client";
import * as m from "motion/react-m";

const Practice = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ background: "tomato", padding: 20, borderRadius: 8 }}
      >
        Hello, LazyMotion
      </m.div>
    </LazyMotion>
  );
};

export default Practice;
