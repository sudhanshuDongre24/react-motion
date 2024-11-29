import React, { useEffect } from "react";
import { useAnimate, useInView } from "motion/react";

const AnimateSequene = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);

  /* function sequence() {
    animate([
      [scope.current, { rotate: -90 }],
      [scope.current, { scale: 1.5 }],
      [scope.current, { rotate: 0 }],
      [scope.current, { scale: 1 }],
    ]);
  } */

  return (
    /*  <div
      className="w-[150px] h-[150px] rounded-[30px] bg-white cursor-pointer"
      ref={scope}
      onClick={sequence}
    /> */

    <ul ref={scope}>
      <li />
      <li />
      <li />
    </ul>
  );
};

export default AnimateSequene;
