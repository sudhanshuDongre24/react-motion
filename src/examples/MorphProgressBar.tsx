import React, { useState } from "react";
import { motion } from "motion/react";
import { PiWheelchairMotionDuotone } from "react-icons/pi";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
const MorphProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl px-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isActive = index + 1 === currentStep;
            const isCompleted = index + 1 < currentStep;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: isActive ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div>{isCompleted ? "✔" : index + 1} </motion.div>
                <p
                  className={`mt-2 text-sm ${
                    isActive ? "text-blue-500 font-bold" : "text-gray-600"
                  }`}
                >
                  {step}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="relative w-full h-2 bg-gray-300 mt-6 rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          ></motion.div>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MorphProgressBar;
