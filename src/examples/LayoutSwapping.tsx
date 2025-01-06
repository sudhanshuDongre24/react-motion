import React, { useState } from "react";
import { motion } from "motion/react";

const tabs = [
  { name: "Red", color: "#f00" },
  { name: "Purple", color: "#b1f" },
  { name: "Orange", color: "#f90" },
  { name: "Green", color: "#0c0" },
];

const duration = 0.3;

const LayoutSwapping = () => {
  const [selected, setSelected] = useState(0);

  const [formerColor, setFormerColor] = useState(tabs[0].color);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 21,
        backgroundColor: "rgb(255,255, 255,0.2)",
        padding: 6,
        display: "flex",
        alignContent: "flex-start",
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      {tabs.map(({ name, color }, i) => (
        <motion.div
          style={{
            height: 30,
            position: "relative",
            padding: "3px 15px",
            margin: 0,
            fontFamily: "sans-serif",
            fontSize: 20,
            fontWeight: 700,
            color: "#222",
            cursor: "pointer",
          }}
          key={i}
          initial={{ color: i === selected ? "#fff" : "#222" }}
          animate={{ color: i === selected ? "#fff" : "#222" }}
          transition={{ duration }}
          onTap={() => {
            setFormerColor(tabs[selected].color);
            setSelected(i);
          }}
        >
          <span className="relative z-[1]">{name}</span>

          {i === selected && (
            <motion.div
              className="top-0 left-0 w-full h-full absolute rounded-[15px]"
              layoutId="selected"
              initial={{ backgroundColor: formerColor }}
              animate={{ backgroundColor: color }}
              transition={{ duration }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default LayoutSwapping;
