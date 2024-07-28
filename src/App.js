// src/App.js
import React, { useState } from 'react';
import { BudgetProvider } from './components/BudgetContext';
import Step1 from './multipurposeForm/Step1';
import Step2 from './multipurposeForm/Step2';
import Step3 from './multipurposeForm/Step3';
import Step4 from './multipurposeForm/Step4';
import './App.css'

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1 setCurrentStep={setCurrentStep} />;
      case 2: return <Step2 setCurrentStep={setCurrentStep} />;
      case 3: return <Step3 setCurrentStep={setCurrentStep} />;
      case 4: return <Step4 setCurrentStep={setCurrentStep} />;
      default: return <Step1 setCurrentStep={setCurrentStep} />;
    }
  };

  return (
    <BudgetProvider>
      <div className="App">
        {renderStep()}
        <div className="navigation-buttons">
          {currentStep > 1 && <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>}
          {currentStep < 4 && <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>}
        </div>
      </div>
    </BudgetProvider>
  );
};

export default App;
