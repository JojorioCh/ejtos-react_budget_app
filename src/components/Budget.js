import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, dispatch, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const [currencySymbol, setCurrencySymbol] = useState(currency); // Initialize with the current currency

  useEffect(() => {
    setCurrencySymbol(currency);
  }, [currency]);

  const handleBudgetChange = (event) => {
    const updatedBudget = parseInt(event.target.value, 10);

    // Calculate total spending
    const totalSpending = expenses.reduce(
      (total, expense) => total + expense.cost,
      0
    );

    // Ensure updatedBudget doesn't go below total spending and doesn't exceed 20000
    if (updatedBudget >= totalSpending && updatedBudget <= 20000) {
      setNewBudget(updatedBudget); // Update the local state
      dispatch({
        type: "SET_BUDGET", // Define an appropriate action type
        payload: updatedBudget, // Send the updated budget value as payload
      });
    } else if (updatedBudget < totalSpending) {
      alert("Budget can't be lower than total spending.");
    } else {
      alert("Budget can't exceed 20,000.");
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currencySymbol} </span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default Budget;
