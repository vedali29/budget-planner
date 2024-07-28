// src/components/Step3.js
import React, { useContext, useEffect, useState } from 'react';
import { BudgetContext } from '../components/BudgetContext'
import { getConversionRates } from '../api';
import './Step3.css'; 

const Step3 = () => {
  const { income, expenses, preferredCurrency, conversionRates, setConversionRates } = useContext(BudgetContext);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const sumExpenses = expenses.reduce((total, exp) => total + parseFloat(exp.amount), 0);
    setTotalExpenses(sumExpenses);
  }, [expenses]);

  useEffect(() => {
    const fetchConversionRates = async () => {
      try {
        const rates = await getConversionRates(preferredCurrency);
        setConversionRates(rates);
      } catch (error) {
        console.error("Failed to fetch conversion rates", error);
      }
    };

    fetchConversionRates();
  }, [preferredCurrency, setConversionRates]);

  const remainingBudget = income - totalExpenses;
  const convertedRemainingBudget = remainingBudget * (conversionRates[preferredCurrency] || 1);

  return (
    <div className="step3-container">
      <h2>Budget Summary</h2>
      <div className="summary-item">
        <strong>Total Income:</strong> {income} {preferredCurrency}
      </div>
      <div className="summary-item">
        <strong>Total Expenses:</strong> {totalExpenses} {preferredCurrency}
      </div>
      <div className="summary-item">
        <strong>Remaining Budget:</strong> {remainingBudget} {preferredCurrency}
      </div>
      <div className="summary-item">
        <strong>Converted Remaining Budget:</strong> {convertedRemainingBudget.toFixed(2)} {preferredCurrency}
      </div>
    </div>
  );
};

export default Step3;
