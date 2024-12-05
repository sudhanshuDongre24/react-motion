import React, { useRef } from "react";
import { useSpring, useTransform } from "motion/react";
import { motion } from "framer-motion-3d";
import { Canvas, useThree } from "@react-three/fiber";

const Shapes = ({ isHover, isPress, mouseX, mouseY }) => {
  return (
    <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
      <Camera mouseX={mouseX} mouseY={mouseY} />
    </Canvas>
  );
};

export default Shapes;

function Camera({ mouseX, mouseY, ...props }) {
  const cameraX = useSmoothTranform(mouseX, spring, (x) => x / 350);
  const cameraY = useSmoothTranform(mouseY, spring, (y) => y / 350);

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef = useRef();

  return <motion.perspectiveCamera />;
}

function useSmoothTranform(value, springOptions, tranformer) {
  return useSpring(useTransform(value, tranformer), springOptions);
}

const spring = { stiffness: 600, damping: 30 };
const mouseToLightRotation = (v) => (-1 * v) / 140;
