// src/Step2.js//Income and expense
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../components/BudgetContext';
import './Step2.css'

const Step2 = ({ setCurrentStep }) => {
    const { income, setIncome, expenses, setExpenses } = useContext(BudgetContext);
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
  
    const handleAddExpense = () => {
      if (expenseName && expenseAmount) {
        setExpenses([...expenses, { name: expenseName, amount: parseFloat(expenseAmount) }]);
        setExpenseName('');
        setExpenseAmount('');
      }
    };
  
    const handleDeleteExpense = (index) => {
      const newExpenses = expenses.filter((_, i) => i !== index);
      setExpenses(newExpenses);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setCurrentStep(3); // Move to the next step
    };
  
    return (
      <div className="step2-container">
        <h2>Step 2: Income and Expenses</h2>
        <form onSubmit={handleSubmit}>
          <label>Monthly Income:</label>
          <input type="number" value={income} onChange={(e) => setIncome(parseFloat(e.target.value))} required />
          
          <label>Expense Name:</label>
          <input type="text" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} />
          
          <label>Expense Amount:</label>
          <input type="number" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} />
          
          <button type="button" onClick={handleAddExpense}>Add Expense</button>
          
          <div>
            {expenses.map((expense, index) => (
              <div key={index} className="expense-item">
                <span>{expense.name}: ${expense.amount.toFixed(2)}</span>
                <button type="button" onClick={() => handleDeleteExpense(index)}>Delete</button>
              </div>
            ))}
          </div>
          
          <button type="submit">Save and Continue</button>
        </form>
      </div>
    );
};

export default Step2;
