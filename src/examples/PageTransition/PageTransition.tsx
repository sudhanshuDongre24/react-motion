import * as React from "react";
import { render } from "react-dom";
import { Link, useLocation, useRouter } from "wouter";
import { motion, AnimatePresence } from "motion/react";

import "./style.css";

const Home = () => (
  <>
    <img src="https://picsum.photos/200/300?random=1" />
    <h2>Home</h2>
  </>
);

const About = () => (
  <>
    <img src="https://picsum.photos/200/300?random=2" />
    <h2>About</h2>
  </>
);

const Other = () => (
  <>
    <img src="https://picsum.photos/200/300?random=3" />
    <h2>Other</h2>
  </>
);

const routes = {
  "/": Home,
  "/about": About,
  "/other": Other,
};

const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const PageTransition = () => {
  useRouter();
  const [location] = useLocation();
  const Route = routes[location];
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="about">About</Link>{" "}
        <Link to="other">Other</Link>
      </nav>
      <AnimatePresence initial={false}>
        <motion.div
          className="route-container"
          key={location}
          {...AnimationSettings}
        >
          <Route />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
