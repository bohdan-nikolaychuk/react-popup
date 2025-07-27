import React, { useState } from 'react';
import { useStep } from './StepPopupProvider';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';

const StepPopup = () => {
  const [open, setOpen] = useState(false);
  const { step, nextStep, prevStep } = useStep();

  const renderStep = () => {
    switch (step) {
      case 0: return <StepOne />;
      case 1: return <StepTwo />;
      case 2: return <StepThree />;
      default: return <div>Готово!</div>;
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Відкрити форму</button>
      {open && (
        <div style={{
          position: 'fixed',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -30%)',
          background: '#fff',
          padding: 20,
          borderRadius: 8,
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          zIndex: 9999,
          minWidth: 300
        }}>
          <div>{renderStep()}</div>
          <div style={{ marginTop: 20 }}>
            {step > 0 && <button onClick={prevStep}>Назад</button>}
            {step < 2 && <button onClick={nextStep} style={{ marginLeft: 10 }}>Далі</button>}
            {step === 2 && <button onClick={() => setOpen(false)} style={{ marginLeft: 10 }}>Закінчити</button>}
          </div>
        </div>
      )}
    </>
  );
};

export default StepPopup;