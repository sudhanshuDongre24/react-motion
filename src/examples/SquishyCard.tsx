import React from "react";
import { motion } from "motion/react";

const SquishyCard = () => {
  return (
    <section className="bg-neutral-900 px-4 py-12">
      <div className="mx-auto w-fit">
        <Card />
      </div>
    </section>
  );
};

export default SquishyCard;

const Card = () => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-4 py-0.5 text-sm font-light text-white">
          Pro
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: { scale: 1 },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          $299/
          <br />
          Month
        </motion.span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quis!
        </p>
      </div>
      <button
        className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white py-2 text-center font-mono
       font-black uppercase text-neutral-800 backdrop-blur translate-colors hover:bg-white/30 hover:text-white"
      >
        Get it Now
      </button>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        ry="43.5"
        rx="101.5"
        fill="#262626"
      />
    </motion.svg>
  );
};
