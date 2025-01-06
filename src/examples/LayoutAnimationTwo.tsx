import { useCycle, motion } from "motion/react";
import React, { useEffect } from "react";

const itemA = [1, 2, 3, 4];
const itemB = [3, 1, 4, 2];
const itemC = [4, 3, 2, 1];
const itemD = [2, 4, 1, 3];
const colors = ["#f44", "#3f0", "#fb0", "#0ef"];

const LayoutAnimationTwo = () => {
  const [items, setItems] = useCycle(itemA, itemB, itemC, itemD);

  useEffect(() => {
    setTimeout(() => setItems(), 1000);
  }, [items]);

  return (
    <div
      className="place-content-center justify-items-center"
      style={{ display: "grid", gridTemplateColumns: "auto auto", gridGap: 25 }}
    >
      {items.map((item) => (
        <motion.div
          style={{
            width: 75,
            height: 75,
            borderRadius: 20,
            backgroundColor: colors[item - 1],
          }}
          key={item}
          layout
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
        />
      ))}
    </div>
  );
};

export default LayoutAnimationTwo;
