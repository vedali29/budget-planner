// src/Step4.js//Review and save
import React, { useContext } from 'react';
import { BudgetContext } from '../components/BudgetContext';
import './Step4.css'

const Step4 = ({ setCurrentStep }) => {
  const { userInfo, income, expenses, preferredCurrency } = useContext(BudgetContext);

  return (
    <div className="step4-container">
      <h2>Review and Save</h2>
      <div className="review-section">
        <h3>User Information</h3>
        <p><strong>Name:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>Preferred Currency:</strong> {preferredCurrency}</p>
      </div>
      <div className="review-section">
        <h3>Income and Expenses</h3>
        <p><strong>Monthly Income:</strong> {income} {preferredCurrency}</p>
        <div>
          <strong>Expenses:</strong>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>{expense.name}: {expense.amount} {preferredCurrency}</li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={() => setCurrentStep(3)}>Back</button>
      <button onClick={() => console.log('Save logic here')}>Save and Finish</button>
    </div>
  );
};

export default Step4;
