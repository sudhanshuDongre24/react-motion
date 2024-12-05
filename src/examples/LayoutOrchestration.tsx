import React, { useReducer } from "react";
import { motion, MotionConfig } from "motion/react";

const LayoutOrchestration = () => {
  const [items, toggleItem] = useDummyItem();

  const compareActive = (a, b) => {
    const itemA = items[a];
    const itemB = items[b];
    return itemA === itemB ? 0 : itemA === true ? -1 : 1;
  };

  return (
    <div className="container">
      <ul>
        {Object.keys(items)
          .sort(compareActive)
          .map((id) => (
            <motion.li
              layout
              transition={{
                delay: 0.5,
                type: "spring",
                duration: 0.5,
                bounce: 0.2,
              }}
              key={id}
            >
              {id}
              <Switch isActive={items[id]} onClick={toggleItem(id)} />
            </motion.li>
          ))}
      </ul>
    </div>
  );
};

export default LayoutOrchestration;

function useDummyItem() {
  const [state, dispatch] = useReducer(itemReducer, {
    Item1: false,
    Item2: false,
    Item3: false,
  });

  return [state, (id) => () => dispatch({ action: TOGGLE, id })];
}

function itemReducer(state, { action, id }) {
  if (action === TOGGLE) {
    return { ...state, [id]: !state[id] };
  }

  return state;
}

function Switch({ isActive, onClick }) {
  return (
    <MotionConfig transition={{ duration: 0.3, ease: "easeOut" }}>
      <motion.div
        className="switch"
        initial={false}
        animate={{ backgroundColor: isActive ? "#f90566" : "#111" }}
        onClick={onClick}
        style={{ justifyContent: isActive ? "flex-end" : "flex-start" }}
      >
        <motion.div layout className="handle" />
      </motion.div>
    </MotionConfig>
  );
}

const TOGGLE = "toogle";
