import React from "react";
import ExpenseForm from "../NewExpense/ExpenseForm";
import "./NewExpense.css";

// in App.js <NewExpense onAddExpense={addExpenseHandler} />
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // getting the object from ExpenseForm (line 58)
      ...enteredExpenseData,
      // for random key
      id: Math.random.toString(),
    };
    // because of the name in App.js <NewExpense onAddExpense={addExpenseHandler} />
    props.onAddExpense(expenseData);
  };
  // 1st step, passing expenseData that I get from ExpenseForm component to the NewExpense component (line 18)
  // onSaveExpenseData(line 21) receivses saveExpenseDataHandler (line 7) as a value
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
    </div>
  );
};

export default NewExpense;
