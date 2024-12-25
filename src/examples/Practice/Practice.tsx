import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  animate,
  useMotionValue,
  isBrowser,
  usePresence,
} from "motion/react";

const Practice = () => {
  const [isPresent, safeToRemove] = usePresence();

  console.log(id);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[100px] h-[100px]  bg-indigo-700" />
    </div>
  );
};

export default Practice;

/*
 const Practice = () => {
  const [button, setButton] = React.useState<boolean>(false);
  const count = useMotionValue(0);
  const x = useMotionValue(0);
  console.log(count);

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });
    return () => controls.stop();
  }, []); 

  useEffect(() => {
    const timeout = setTimeout(() => x.set(100), 1000);
    return () => clearTimeout(timeout);
  }, []);

  function handleButton() {
    setButton(!button);
  }
 const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center  relative flex-col gap-10 f;e">
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
            className="w-[100px] h-[100px]  bg-[#0cdcf7] border-[10px]"
          />
        ) : null}
      </AnimatePresence>
      <motion.button
        className="  text-[#0f1115] rounded-xl py-4 px-8 text-center  bg-[#0cdcf7]"
        whileTap={{ y: 1 }}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  );
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <div className="flex justify-center items-center min-h-screen gap-20 bg-black">
      {<motion.section
        className="h-[200px] w-[200px] bg-red-500 "
        style={{ x: -500 }}
      />

      <motion.button
        className="h-20 w-20 rounded-lg bg-blue-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      />
      <motion.li
        className="bg-red-400 h-20 w-20"
        initial={{ transform: "translateX(-100px)" }}
        animate={{ transform: "translateX(0)" }}
        transition={{ type: "spring", duration: 1 }}
      />

      <motion.div className="w-20 h-20 bg-yellow-400" style={{ originX: 10 }} />
      <motion.ul
        initial={{ "--rotate": "0deg" }}
        animate={{ "--rotate": "60deg" }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <li
          style={{ transform: "--rotate(var(--rotate))" }}
          className="w-20 h-20 bg-red-300"
        />
        <li
          style={{ transform: "--rotate(var(--rotate))" }}
          className="w-20 h-20 bg-red-300"
        />
        <li
          style={{ transform: "--rotate(var(--rotate))" }}
          className="w-20 h-20 bg-red-300"
        />
      </motion.ul> }

      {<motion.div
        className="w-20 h-20 bg-red-300 rounded-full"
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
      />
      <motion.div
        className="w-20 h-20 rounded-full bg-orange-400"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      /> }
      {
      <button onClick={handleButton}>Click</button>

      <AnimatePresence>
        {button && (
          <motion.div
            className="w-20 h-20 rounded-full bg-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence> }
      {
      <motion.ul
        initial="hidden"
        whileInView="visible"
        className="w-[500px] h-[600px] bg-red-600"
        variants={list}
        transition={{ duration: 1 }}
      >
        <motion.li
          className="w-20 h-20 bg-red-100 m-2"
          variants={item}
          transition={{ duration: 2 }}
        />
        <motion.li
          className="w-20 h-20 bg-red-100 m-2"
          variants={item}
          transition={{ duration: 2 }}
        />
        <motion.li
          className="w-20 h-20 bg-red-100 m-2"
          variants={item}
          transition={{ duration: 2 }}
        />
        <motion.li
          className="w-20 h-20 bg-red-100 m-2"
          variants={item}
          transition={{ duration: 2 }}
        />
      </motion.ul> }
      {<motion.pre className="text-red-500">{count}</motion.pre> }

      {<motion.div
        animate={{ x: 100 }}
        className="w-20 h-20 bg-red-500"
        transition={{ duration: 0.3, delay: 1, ease: "linear" }}
      /> }
      {<motion.div
        className="w-20 h-20 bg-red-400 rounded-full"
        whileHover={{
          scale: 1.5,
          transition: { duration: 0.3 },
        }}
      /> }

      {<motion.div
        className="w-20 h-20 bg-red-400 rounded-full"
        initial={{ x: 0, opacity: 0 }}
        animate={{
          x: 500,
          opacity: 1,
          transition: {
            default: { type: "spring", stiffness: 200, duration: 5 },
            opacity: { ease: "linear" },
          },
        }}
      /> }

      {<motion.div
        className="w-20 h-20 bg-red-500 rounded "
        animate={{ x: 90 }}
        transition={{ type: "spring", bounce: 0.7, visualDuration: 0.2 }}
      /> }

      {<motion.div
        className="w-20 h-20 bg-red-500 rounded "
        animate={{ x: 200 }}
        transition={{ type: "spring", damping: 10 }}
      /> }
      {  <motion.div
        className="w-20 h-20 bg-red-500 rounded "
        animate={{ x: 200 }}
        transition={{ type: "spring", mass: 10 }}
      /> }
      {<motion.div className="w-20 h-20 bg-red-500 rounded " style={{ x }} />
      <motion.div
        className="w-20 h-20 bg-blue-500 rounded "
        initial={["visible", "active"]}
        style={{ x }}
      /> }

      { <button className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300">
        <span>Hover</span>



        <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />



        <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      

        <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

        <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
      </button>}
    </div>
  );
};

*/
