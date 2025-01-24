import { motion } from "motion/react";

const Practice = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
      dragElastic={0.5}
      className="w-[100px] h-[100px] bg-sky-700 m-auto rounded-xl"
    >
      temp
    </motion.div>
  );
};

export default Practice;
