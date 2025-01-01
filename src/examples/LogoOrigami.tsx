import React, { ReactElement, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { SiAmazon, SiGithub, SiGoogle, SiMeta, SiTwitch } from "react-icons/si";

const LogoOrigami = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-12 bg-neutral-950 px-4 py-24 md:flex-row">
      <LogoRolodex
        items={[
          <LogoItem className="text-neutral-900 bg-orange-300" key={1}>
            <SiAmazon />
          </LogoItem>,
          <LogoItem className="text-neutral-900 bg-green-300" key={2}>
            <SiGoogle />
          </LogoItem>,
          <LogoItem className="text-neutral-900 bg-blue-300" key={3}>
            <SiMeta />
          </LogoItem>,
          <LogoItem className="text-black bg-white" key={4}>
            <SiGithub />
          </LogoItem>,
          <LogoItem className="text-neutral-900 bg-purle-300" key={5}>
            <SiTwitch />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

export default LogoOrigami;

const DELAY_IN_MS = 2500;
const TRANSITION_DURARTION_IN_SECS = 1.5;

const LogoRolodex = ({ items }: { items: ReactElement[] }) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);
    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  return (
    <div
      style={{ transform: "rotateY(-20deg)", transformStyle: "preserve-3d" }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800 "
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0,100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURARTION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          transition={{
            duration: TRANSITION_DURARTION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{ transform: "translateZ(1px)" }}
        className="absolute left-0 right-0 top-1/2 z-[9999999999] -trans-y-1/2 border-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};
