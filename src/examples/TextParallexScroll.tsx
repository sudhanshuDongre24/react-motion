import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const IMG_PADDING = 12;

const TextParallexScroll = () => {
  return <div>TextParallexScroll</div>;
};

export default TextParallexScroll;

const TextParallexScrollComponent = ({
  imgUrl,
  subHeading,
  heading,
  children,
}) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]"></div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return <motion.div />;
};

const OverlayCopy = ({ subHeading, heading }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
};
