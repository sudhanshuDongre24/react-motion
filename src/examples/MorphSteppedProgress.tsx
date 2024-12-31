import React, { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

const MorphSteppedProgress = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [1, 2, 3, 4];

  const prevStep = () => {
    if (currentStep !== 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const nextStep = () => {
    if (currentStep !== steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen gap-10 flex-col">
      <div className=" p-8 bg-white shadow-lg rounded-md w-full max-w-2xl">
        <div className="flex items-center justify-between gap-4">
          {steps.map((step) => {
            return (
              <>
                <div className="relative">
                  <motion.div
                    className={`w-10 h-10 flex items-center justify-center shrink-0 border-2 rounded-full font-semibold text-sm relative z-10 transitions-colors duration-500 ease-in-out  ${
                      currentStep >= step
                        ? "text-white bg-indigo-700 border-indigo-400 border-3 "
                        : "text-gray-300 border-gray-300"
                    }`}
                    initial={false}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <span>{step}</span>
                  </motion.div>
                </div>
                {step <= steps.length - 1 && (
                  <div className="w-full h-1 rounded-full bg-gray-200 relative ">
                    <motion.div
                      className="absolute top-0 bottom-0 bg-indigo-600 rounded-full w-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${step <= currentStep ? "100%" : "0%"}`,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      {/* Navigation */}
      <div className="flex  gap-5">
        <button
          className="border-1 rounded-lg bg-black text-white py-2 px-4 disabled:text-gray-600 disabled:cursor-not-allowed "
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Prev
        </button>
        <button
          className="border-1 rounded-lg bg-black text-white px-4 py-2 disabled:text-gray-600 disabled:cursor-not-allowed"
          onClick={nextStep}
          disabled={currentStep === steps.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MorphSteppedProgress;
