import React, { useState } from "react";
import { motion } from "motion/react";

const Practice = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="p-10">
      <motion.div
        className={`grid grid-cols-2 gap-4 ${
          isToggled ? "grid-cols-1" : "grid-cols-2"
        }`}
      >
        <motion.div
          layout
          className={`h-40 ${
            isToggled ? "bg-blue-500" : "bg-green-500"
          } rounded-md`}
        />
        <motion.div
          layout
          className={`h-40 ${
            isToggled ? "bg-green-500" : "bg-blue-500"
          } rounded-md`}
        />
      </motion.div>
      <button
        onClick={() => setIsToggled(!isToggled)}
        className="mt-6 px-4 py-2 bg-gray-800 text-white rounded"
      >
        Toogle Layout
      </button>
    </div>
  );
};

export default Practice;
