import React from 'react';
import ReactDOM from 'react-dom/client';
import StepPopupProvider from './step/StepPopupProvider';
import StepPopup from './step/StepPopup';

window.injectReactStepPopup = function (containerId = 'react-popup-root') {
  const container = document.getElementById(containerId);
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
      <StepPopupProvider>
        <StepPopup />
      </StepPopupProvider>
    );
  }
};