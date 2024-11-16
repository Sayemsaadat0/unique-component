// import React from "react";
// import dynamic from "next/dynamic";

// const StepperComponent = dynamic(() => import("./CustomStepper"), {
//   ssr: false,
// });

// const ContactManagement = () => {
//   return (
//     <div>
//       <StepperComponent />
//     </div>
//   );
// };

// export default ContactManagement;

// "use client";
// import React, { useState } from "react";
// import Stepper from "awesome-react-stepper";

// const ContactManagement = () => {
//   // Initial dummy data
//   const [steps, setSteps] = useState([
//     { label: "Form Completion", isCompleted: true },
//     { label: "Medical Completion", isCompleted: true },
//     { label: "Flight Booking", isCompleted: true },
//     { label: "Departure", isCompleted: true },
//   ]);

//   const [finalMessage, setFinalMessage] = useState<string>("");

//   // Handler to toggle step completion
//   const handleStepClick = (index: number) => {
//     setSteps((prevSteps) =>
//       prevSteps.map((step, i) =>
//         i === index ? { ...step, isCompleted: !step.isCompleted } : step
//       )
//     );
//   };

//   // Check if all steps are completed
//   const allStepsCompleted = steps.every((step) => step.isCompleted);

//   const handleSubmit = () => {
//     setFinalMessage("Thank you! All steps are completed.");
//   };

//   return (
//     <div className="p-10 bg-white/50">
//       <Stepper
//         strokeColor="#17253975"
//         fillStroke="#172539"
//         activeColor="#172539"
//         activeProgressBorder="2px solid #17253975"
//         submitBtn={
//           <button
//             className="stepperBtn"
//             onClick={handleSubmit}
//             disabled={!allStepsCompleted} // Enable only if all steps are done
//           >
//             Submit
//           </button>
//         }
//         continueBtn={<></>} // Remove Next button as steps are manually clickable
//         backBtn={<></>} // Remove Back button
//       >
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className={`stepperSubDiv ${
//               step.isCompleted
//                 ? "bg-green-100 cursor-not-allowed"
//                 : "bg-red-100 cursor-pointer"
//             }`}
//             onClick={() => !step.isCompleted && handleStepClick(index)} // Clickable only if incomplete
//           >
//             <h1
//               className={`text-black ${
//                 step.isCompleted ? "text-green-500" : "text-red-500"
//               }`}
//             >
//               {step.label} {step.isCompleted ? "✔️" : "❌"}
//             </h1>
//           </div>
//         ))}
//       </Stepper>
//       {allStepsCompleted && (
//         <div className="mt-4">
//           <p className="text-blue-500">{finalMessage || "All steps are completed!"}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactManagement;


"use client"
import React, { useState, useEffect } from 'react';

type StepData = { [key: string]: boolean };

const ContactManagement = () => {
  // Initial dummy data with some steps completed and others pending
  // Initial dummy data with some steps completed and others pending
  const initialData: StepData[] = [
    { cv: true },
    { medical: true },
    { ticket: false },
    { flight: false },
    { departed: false },
  ];
  const stepNames = ['cv', 'medical', 'ticket', 'flight', 'departed'];
  // State to track the current step and the data
  const [stepsData, setStepsData] = useState<StepData[]>(initialData);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Set initial active step based on the data
  useEffect(() => {
    // Find the first step that is 'false' and set it as the active step
    const firstIncompleteStep = stepsData.findIndex(step => Object.values(step)[0] === false);
    setCurrentStep(firstIncompleteStep === -1 ? stepsData.length - 1 : firstIncompleteStep);
  }, [stepsData]);

  // Handler for the Next button click
  const handleNext = () => {
    const updatedData = [...stepsData];

    // Mark the current step as true
    const currentStepKey = `step${currentStep + 1}` as keyof StepData;
    updatedData[currentStep] = { [currentStepKey]: true };

    // Update the steps data
    setStepsData(updatedData);

    // Move to the next step if it's not the last step
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(currentStep + 1);
    }

    // Check if all steps are completed
    const allCompleted = updatedData.every((step) => Object.values(step)[0] === true);
    if (allCompleted) {
      setIsCompleted(true);
    }
  };

  return (
    <div className="stepper-container">
      <h2>Custom Stepper</h2>

      {/* Display all steps */}
      <div className="flex gap-5">
        {stepsData.map((step, index) => {
          const stepStatus = Object.values(step)[0];
          const stepName = stepNames[index];
          return (
            <div
              key={index}
              className={`step relative ${stepStatus ? 'completed' : 'pending'} ${currentStep === index ? '' : ''}`}
            >
              <div >
                {/* after:content-[''] after:absolute after:left-1/2 after:top-2 after:transform after:-translate-x-1/2 after:w-full after:h-0.5 after:bg-red-500 */}
                <div className={` h-1   ${stepStatus === true ? 'bg-red-500  ' : 'bg-white'}`}>

                </div>
                <p className='min-w-48'>{stepName}</p>
                {/* <div className='w-full h-2 bg-red-500'></div> */}
              </div>

            </div>
          );
        })}
      </div>

      {/* Next Button */}
      <button onClick={handleNext} disabled={isCompleted || Object.values(stepsData[currentStep])[0]}>
        {isCompleted ? 'Final Completed' : 'Next'}
      </button>

      {/* Completion message */}
      {isCompleted && <p>All steps completed!</p>}
    </div>
  );
};

export default ContactManagement;
