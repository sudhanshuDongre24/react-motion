import { motion, useDragControls } from "motion/react";
import React, { useState } from "react";

const Practice = () => {
  const dragControls = useDragControls();
  const [isDragging, setIsDragging] = useState(false);

  console.log(isDragging);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div
        drag="x"
        dragControls={dragControls}
        dragListener={false}
        className="w-40 h-40 bg-purple-500 flex items-center justify-center"
      >
        {isDragging ? "Dragging" : "Drag Me"}
      </motion.div>

      <div className="mt-4 flex gap-4">
        <button
          onPointerDown={(e) => {
            dragControls.start(e);
            setIsDragging(true);
          }}
          className="px-5 py-2 bg-black text-white rounded-md"
        >
          Start Dragging
        </button>
        <button
          onClick={() => setIsDragging(false)}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Stop Dragging
        </button>
      </div>
    </div>
  );
};

export default Practice;
