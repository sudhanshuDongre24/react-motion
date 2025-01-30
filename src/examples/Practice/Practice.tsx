import { motion, MotionConfig, useReducedMotion } from "motion/react";
import { createContext, useContext, useState } from "react";

// Create a context for animation preferences
const AnimationPreferencesContext = createContext({
  fastAnimations: false, // Default: respect reduced motion
  setFastAnimations: () => {}, // Placeholder
});

// Custom hook to access and update animation preferences
function useAnimationPreferences() {
  const context = useContext(AnimationPreferencesContext);
  if (!context) {
    throw new Error(
      "useAnimationPreferences must be used within an AnimationPreferencesProvider"
    );
  }
  return context;
}

// Provider for animation preferences
function AnimationPreferencesProvider({ children }) {
  const [fastAnimations, setFastAnimations] = useState(false);

  const value = { fastAnimations, setFastAnimations };
  return (
    <AnimationPreferencesContext.Provider value={value}>
      {children}
    </AnimationPreferencesContext.Provider>
  );
}

function AnimatedComponent() {
  const { fastAnimations, setFastAnimations } = useAnimationPreferences();
  const shouldReduceMotion = useReducedMotion();

  const baseTransition = { duration: 0.5, ease: "easeInOut" };

  const dynamicTransition = fastAnimations
    ? { duration: 0.2, ease: "easeOut" } // Faster animation
    : shouldReduceMotion
    ? { duration: 0 } // No animation for reduced motion
    : baseTransition; // Default transition

  return (
    <motion.div
      animate={{ x: 100, opacity: 1 }}
      initial={{ x: 0, opacity: 0 }}
      transition={dynamicTransition}
    >
      <p>This div animates!</p>
      <button onClick={() => setFastAnimations(!fastAnimations)}>
        {fastAnimations ? "Slower Animations" : "Faster Animations"}
      </button>
    </motion.div>
  );
}

function ComplexExample() {
  return (
    <AnimationPreferencesProvider>
      <MotionConfig>
        {" "}
        {/* Global MotionConfig */}
        <div>
          <AnimatedComponent />
          <AnimatedComponent />{" "}
          {/* Another instance of the animated component */}
        </div>
        {/* Example of overriding the global config for a specific component */}
        <motion.div
          style={{ backgroundColor: "lightgray", padding: 20, marginTop: 20 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.8, bounce: 0.2 }} // Override transition
        >
          This div has a different transition.
        </motion.div>
      </MotionConfig>
    </AnimationPreferencesProvider>
  );
}

export default ComplexExample;
