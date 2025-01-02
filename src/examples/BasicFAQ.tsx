import React, { Dispatch, SetStateAction, useState } from "react";
import { motion } from "motion/react";

const BasicFAQ = () => {
  return (
    <div className="flex mt-16 justify-center min-h-screen">
      <div className="px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h3 className="mb-4 text-center text-3xl font-semibold">
            Frequent asked Question
          </h3>
          <AccordianItem>Why is the sky blue?</AccordianItem>
          <AccordianItem>Why did the chicken cross the road?</AccordianItem>
          <AccordianItem>
            How many lick doest it take to get to the center of a tootsie pop?
          </AccordianItem>
          <AccordianItem>Where's Waldo?</AccordianItem>
        </div>
      </div>
    </div>
  );
};

export default BasicFAQ;

const AccordianItem = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className="border-b-[1px] border-b-slate-300"
      onClick={() => setOpen(!open)}
    >
      <button className="flex  w-full items-center justify-between gap-2 py-6">
        <motion.span
          initial={false}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left font-medium"
          animate={{ color: open ? "rgba(3,6, 23, 0)" : "rgba(3,6,23)" }}
        >
          {children}
        </motion.span>
        <motion.span
          initial={false}
          animate={{
            color: open ? "rgb(124, 58,237)" : "rgb(3,6,23)",
          }}
        >
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              type: "spring",
              bounce: 0.5,
            }}
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-2xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </motion.svg>
        </motion.span>
      </button>
      <motion.div
        layout
        className="overflow-hidden text-slate-600"
        animate={{ height: open ? "72px" : 0, marginBottom: open ? "24px" : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </p>
      </motion.div>
    </div>
  );
};
