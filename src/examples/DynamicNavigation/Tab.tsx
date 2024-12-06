import React from "react";
import { Ingredient } from "./ingredients";
import { Reorder } from "motion/react";
import { motion } from "motion/react";

interface Props {
  item: Ingredient;
  isSelected: boolean;
  onClick: () => void;
  onRemove: () => void;
}

const Tab = ({ item, onClick, onRemove, isSelected }: Props) => {
  return (
    <Reorder.Item
      value={item}
      id={item.label}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        backgroundColor: isSelected ? "#f3f3f3" : "#fff",
        y: 0,
        transition: { duration: 0.15 },
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
      whileDrag={{ backgroundColor: "#e3e3e3" }}
      className={isSelected ? "selected" : ""}
      onPointerDown={onClick}
    >
      <motion.span layout="position">{`${item.icon} ${item.label}`}</motion.span>
      <motion.div layout className="close">
        <motion.button
          onPointerDown={(event) => {
            event.stopPropagation();
            onRemove();
          }}
          initial={false}
          animate={{ backgroundColor: isSelected ? "#e3e3e3" : "#fff" }}
        >
          <CloseIcon />
        </motion.button>
      </motion.div>
    </Reorder.Item>
  );
};

export default Tab;

export function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 20 20"
    >
      <path
        d="M 3 3 L 17 17"
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
      ></path>
      <path
        d="M 17 3 L 3 17"
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}
