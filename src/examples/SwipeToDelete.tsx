import { useMotionValue, motion, useAnimate, animate } from "motion/react";
import React, { useEffect, useState } from "react";

const initialItems = [0, 1, 2, 3, 4];
const height = 70;
const padding = 10;
const size = 150;

function Item({ total, index, onDelete }) {
  const [scope, animate] = useAnimate();

  function handleDragEnd(_, info) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      animate(scope.current, { x: "-100%" }, { duration: 0.2 });
      setTimeout(() => onDelete(index), 200);
    } else {
      animate(scope.current, { x: 0, opacity: 1 }, { duration: 0.5 });
    }
  }

  return (
    <motion.div
      style={{
        width: 150,
        height: height,
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: total - 1 === index ? 0 : 10,
        willChange: "transform",
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      layout
      transition={{ type: "spring", stiffness: 600, damping: 300 }}
    >
      <motion.div
        style={{
          width: size,
          height: height,
          borderRadius: 20,
          backgroundColor: "#fff",
        }}
        drag="x"
        dragDirectionLock
        onDragEnd={handleDragEnd}
        ref={scope}
      />
    </motion.div>
  );
}

const SwipeToDelete = () => {
  const y = useMotionValue(0);

  const [items, setItems] = useState(initialItems);
  const { top, bottom } = useConstraiants(items);
  const totalScroll = getHeight(items);
  const scrollContainer = 150;

  function onDelete(index) {
    const newItems = [...items];
    newItems.splice(index, 1);

    const newScrollHeight = getHeight(newItems);
    const bottomOffset = -y.get() + scrollContainer;
    const bottomWillBeVisible = newScrollHeight < bottomOffset;
    const isScrollHeightLarger = newScrollHeight >= scrollContainer;

    if (bottomWillBeVisible && isScrollHeightLarger) {
      animate(y, -newScrollHeight + scrollContainer);
    }

    setItems(newItems);
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 30,
        backgroundColor: "transparent",
        overflow: "hidden",
        position: "relative",
        transform: "translateZ(0)",
      }}
    >
      <motion.div
        style={{ y: y, height: totalScroll }}
        drag="y"
        dragDirectionLock
        dragConstraints={{ top, bottom }}
      >
        {items.map((value, index) => {
          return (
            <Item
              onDelete={onDelete}
              total={items.length}
              key={value}
              index={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default SwipeToDelete;

function getHeight(items) {
  const totalHeight = items.length * height;
  const totalPadding = (items.length - 1) * padding;
  const totalScroll = totalHeight + totalPadding;

  return totalScroll;
}

function useConstraiants(items) {
  const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    setConstraints({ top: size - getHeight(items), bottom: 0 });
  }, [items]);

  return constraints;
}
