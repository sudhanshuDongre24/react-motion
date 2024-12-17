import React, { Dispatch, SetStateAction, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "motion/react";
import { div } from "motion/react-client";

type ToggleOptionType = "light" | "dark";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 md:py-1.5 transition-colors relative z-10 ";

const SliderToggle = () => {
  const [selected, setSelected] = useState<ToggleOptionType>("light");
  return (
    <div
      className={`grid h-screen place-content-center px-3 transition-colors ${
        selected === "light" ? "bg-white" : "bg-slate-900"
      }`}
    >
      <SliderToggleComponent selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default SliderToggle;

const SliderToggleComponent = ({
  selected,
  setSelected,
}: {
  selected: ToggleOptionType;
  setSelected: Dispatch<SetStateAction<ToggleOptionType>>;
}) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => setSelected("light")}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />

        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => setSelected("dark")}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10 ">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};
