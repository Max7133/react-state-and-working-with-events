import React, { useState } from "react";
import ExpenseForm from "../NewExpense/ExpenseForm";
import "./NewExpense.css";

// in App.js <NewExpense onAddExpense={addExpenseHandler} />
const NewExpense = (props) => {
  // true or false state, to show or not show the form
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // getting the object from ExpenseForm (line 58)
      ...enteredExpenseData,
      // for random key
      id: Math.random.toString(),
    };
    // because of the name in App.js <NewExpense onAddExpense={addExpenseHandler} />
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  // Should be triggered when Add New Expense button is clicked
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  // 1st step, passing expenseData that I get from ExpenseForm component to the NewExpense component (line 18)
  // onSaveExpenseData(line 21) receivses saveExpenseDataHandler (line 7) as a value
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
