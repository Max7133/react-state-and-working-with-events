import React from "react";
import ExpenseForm from "../NewExpense/ExpenseForm";
import "./NewExpense.css";

// in App.js <NewExpense onAddExpense={addExpenseHandler} />
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    // because of the name in App.js <NewExpense onAddExpense={addExpenseHandler} />
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
    </div>
  );
};

export default NewExpense;
