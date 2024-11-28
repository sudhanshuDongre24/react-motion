import React from "react";
import { useAnimate } from "motion/react";

const AnimateSequene = () => {
  const [scope, animate] = useAnimate();

  function sequence() {
    animate([
      [scope.current, { rotate: -90 }],
      [scope.current, { scale: 1.5 }],
      [scope.current, { rotate: 0 }],
      [scope.current, { scale: 1 }],
    ]);
  }

  return (
    <div
      className="w-[150px] h-[150px] rounded-[30px] bg-white cursor-pointer"
      ref={scope}
      onClick={sequence}
    />
  );
};

export default AnimateSequene;
