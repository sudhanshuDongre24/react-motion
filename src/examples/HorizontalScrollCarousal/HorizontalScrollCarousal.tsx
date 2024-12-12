import { useScroll, useTransform } from "motion/react";
import React from "react";

const HorizontalScrollCarousal = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll Down
        </span>
      </div>
      <HorizontScrollComponent />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll Up
        </span>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousal;

const HorizontScrollComponent = () => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "95%"]);

  return <section ref={targetRef} className="relative"></section>;
};
