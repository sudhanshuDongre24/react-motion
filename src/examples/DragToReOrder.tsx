import { animate } from "motion/react";
import { MotionValue, Reorder, useMotionValue } from "motion/react";
import React, { useEffect } from "react";
import { useState } from "react";

interface Props {
  item: string;
}

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

const DragToReOrder = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      layoutScroll
      style={{ height: 250, border: "1px solid black", overflowY: "auto" }}
    >
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
};

export default DragToReOrder;

const inActiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";

const Item = ({ item }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item key={item} value={item} style={{ boxShadow, y }}>
      <span>{item}</span>
    </Reorder.Item>
  );
};

function useRaisedShadow(value: MotionValue<number>) {
  const boxShadow = useMotionValue(inActiveShadow);

  useEffect(() => {
    let isActive = false;
    value.on("change", (latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(boxShadow, "5px 5px 10px boxShadow(0,0,0,0.3)");
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inActiveShadow);
        }
      }
    });
  }, [value, boxShadow]);
  return boxShadow;
}
