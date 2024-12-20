import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { FiArrowRight } from "react-icons/fi";

const HoverImageLink = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="About"
          subHeading="Learn wath we do here"
          href="#"
          imgSrc="https://plus.unsplash.com/premium_photo-1733864822205-f521d24b1319?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
        />
        <Link
          heading="Client"
          subHeading="We work with great people"
          imgSrc="https://images.unsplash.com/photo-1734275923064-fc1aa3103c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="Portfolio"
          subHeading="Our work speaks for itself"
          imgSrc="https://images.unsplash.com/photo-1731076274484-e3882b02d523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="Careers"
          subHeading="We want cool people"
          imgSrc="https://plus.unsplash.com/premium_photo-1732661449056-d107ca58ca24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5N3x8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
      </div>
    </section>
  );
};

export default HoverImageLink;

interface LinkProps {
  heading: string;
  imgSrc: string;
  subHeading: string;
  href: string;
}

const Link = ({ heading, imgSrc, subHeading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      ref={ref}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8 "
    >
      <div>
        <motion.span
          variants={{ initial: { x: 0 }, whileHover: { x: -16 } }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-50 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{ initial: { x: 0 }, whileHover: { x: 16 } }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
          <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
            {subHeading}
          </span>
        </motion.span>
      </div>

      <motion.img
        style={{ top, left, translateX: "-50%", translateY: "-50%" }}
        src={imgSrc}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring", duration: 1.2 }}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />
      <motion.div
        variants={{
          initial: { x: "25%", opacity: 0 },
          whileHover: { x: "0%", opacity: 1 },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
