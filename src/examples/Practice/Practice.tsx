import { useAnimate, usePresence } from "motion/react";
import React, { useEffect } from "react";

const Practice = () => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {};
      enterAnimation();
    } else {
      const exitAnimation = async () => {};
      exitAnimation();
    }
  }, [isPresent]);

  return (
    <ul ref={scope}>
      <li />
      <li />
      <li />
      <li />
    </ul>
  );
};

export default Practice;
