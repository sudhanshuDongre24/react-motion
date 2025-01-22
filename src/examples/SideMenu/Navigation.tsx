import React from "react";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, delayChildren: -1 },
  },
};

const Navigation = () => {
  return <div>Navigation</div>;
};

export default Navigation;
