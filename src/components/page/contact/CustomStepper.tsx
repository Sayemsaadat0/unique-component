'use client'
import React, { useState } from "react";
import { Stepper } from "react-form-stepper";

const CustomStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "Step 1" },
    { label: "Step 2" },
    { label: "Step 3" }
  ];

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        connectorStateColors={true} // Use color based on step state

        connectorStyleConfig={{
          activeColor: "#2196F3",
          completedColor: "#4CAF50",
          disabledColor: "#BDBDBD",
          size: 2,
          style: "solid",  // Add the style property here
        }}
      />
      <button
        onClick={handleNextStep}
        disabled={activeStep === steps.length - 1}
        className={`mt-4 px-4 py-2 rounded ${
          activeStep === steps.length - 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
      >
        Next Step
      </button>
    </div>
  );
};

export default CustomStepper;

/* 
const StepperComponent = dynamic(() => import("./CustomStepper"), {
  ssr: false,
});
*/
