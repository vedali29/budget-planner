// src/BudgetContext.js
import React, { createContext, useState } from 'react';

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [preferredCurrency, setPreferredCurrency] = useState('USD');
  const [conversionRates, setConversionRates] = useState({});

  return (
    <BudgetContext.Provider value={{
      userInfo, setUserInfo,
      income, setIncome,
      expenses, setExpenses,
      preferredCurrency, setPreferredCurrency,
      conversionRates, setConversionRates
    }}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };
