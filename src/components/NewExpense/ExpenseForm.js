import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  /* const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(""); */
  // I could pass in 1 useState instead of 3
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  // Handling user input
  // JS way
  // document.getElementById('').addEventListener('click', (event) => {})
  // React way
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput({
      // takes an object, pull out all the key value pairs,
      // and adds them to this new object, and then I can still override key value pairs
      ...userInput,
      enteredTitle: event.target.value,
    });
    console.log(enteredTitle);
  };
  const amountChangeHandler = (event) => {
    //setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
    console.log(enteredAmount);
  };
  const dateChangeHandler = (event) => {
    //setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
    console.log(enteredDate);
  };
  return (
    <form>
      {/* All inputs */}
      <div className="new-expense__controls">
        {/* Single Input */}
        <div className="new-expense__control">
          {/* First Input */}
          <label>Title</label>
          {/* Input Type */}
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
