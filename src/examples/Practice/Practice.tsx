import React, { useState } from "react";
import { motion } from "framer-motion";

const ReorderListLayoutAnimation = () => {
  const [items, setItems] = useState([1, 2, 3, 4]);

  const reorderItems = () => {
    const newItems = [...items];
    newItems.reverse(); // Reverse the order
    setItems(newItems);
  };

  return (
    <div className="p-10">
      <motion.ul layout className="space-y-4">
        {items.map((item) => (
          <motion.li
            key={item}
            layout
            className="p-4 bg-gray-300 rounded-md"
            style={{ listStyleType: "none" }}
          >
            Item {item}
          </motion.li>
        ))}
      </motion.ul>
      <button
        onClick={reorderItems}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Reorder List
      </button>
    </div>
  );
};

export default ReorderListLayoutAnimation;
