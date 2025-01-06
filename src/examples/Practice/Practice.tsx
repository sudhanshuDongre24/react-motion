import React from "react";
import { create } from "motion/react-client";

const CustomMotionDiv = create("div");

const Practice = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <CustomMotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-4 bg-blue-500 text-white rounded"
      >
        Custom Motion Div
      </CustomMotionDiv>
    </div>
  );
};

export default Practice;
