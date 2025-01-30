import { LayoutGroup, motion } from "motion/react";
import React, { useState } from "react";

const Practice = () => {
  const [selected, setSelected] = useState("tab1");

  return (
    <LayoutGroup>
      <div className="flex gap-4 p-4">
        {["tab1", "tab2"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelected(tab)}
            className="relative px-4 py-2"
          >
            {tab}
            {selected === tab && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 bottom-0 h-1 w-full bg-blue-500"
              />
            )}
          </button>
        ))}
      </div>
      <motion.div
        layoutId="content"
        className="p-6 bg-gray-100 rounded-md mt-4"
      >
        {selected === "tab1" ? "Content for Tab1" : "Content for Tab2"}
      </motion.div>
    </LayoutGroup>
  );
};

export default Practice;
