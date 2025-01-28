import React, { useState } from "react";
import { motion } from "motion/react";

function Practice() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {!isOpen ? (
        <motion.div
          layoutId="box"
          className="w-[100px] h-[100px] bg-blue-500 rounded-lg cursor-pointer mx-[100px] my-auto"
          onClick={() => setIsOpen(true)}
        />
      ) : (
        <motion.div
          layoutId="box"
          className="w-[100px] h-[100px] bg-blue-500 rounded-xl cursor-pointer mx-[100px] my-auto"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default Practice;
