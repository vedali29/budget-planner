// src/Step1.js
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../components/BudgetContext';
import './Step1.css'; // Import the CSS file

const Step1 = ({ setCurrentStep }) => {
    const { userInfo, setUserInfo } = useContext(BudgetContext);
    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [preferredCurrency, setPreferredCurrency] = useState(userInfo.preferredCurrency);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setUserInfo({ name, email, preferredCurrency });
      setCurrentStep(2); // Move to the next step
    };
  
    return (
      <div className="step1-container">
        <h2>Step 1: User Information</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          
          <label>Preferred Currency:</label>
          <select value={preferredCurrency} onChange={(e) => setPreferredCurrency(e.target.value)} required>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            {/* Add more currencies as needed */}
          </select>
          
          <button type="submit">Save and Continue</button>
        </form>
      </div>
    );
};

export default Step1;
