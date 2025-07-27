import React, { createContext, useContext, useState } from 'react';

const StepContext = createContext();

export const useStep = () => useContext(StepContext);

const StepPopupProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));

  return (
    <StepContext.Provider value={{ step, nextStep, prevStep }}>
      {children}
    </StepContext.Provider>
  );
};

export default StepPopupProvider;