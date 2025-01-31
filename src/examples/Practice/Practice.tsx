import React, { useState } from "react";
import { motion, Reorder } from "motion/react";

const items = ["Apple", "Banana", "Cherry", "Date"];

const Practice = () => {
  const [list, setList] = useState(items);
  return (
    <Reorder.Group
      axis="y"
      values={list}
      onReorder={setList}
      className="space-y-2 p-4"
    >
      {list.map((item) => (
        <Reorder.Item
          key={item}
          value={item}
          className="p-e bg-blue-500 text-white rounded-md cursor-pointer"
        >
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default Practice;
