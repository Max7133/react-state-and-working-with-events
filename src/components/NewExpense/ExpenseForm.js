import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // 2nd option: I could pass in 1 useState instead of 3
  /*   const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */
  // Handling user input
  // JS way
  // document.getElementById('').addEventListener('click', (event) => {})
  // React way
  const titleChangeHandler = (event) => {
    // 1st option
    setEnteredTitle(event.target.value);
    // 2nd option
    /*     setUserInput({
      // takes an object, pull out all the key value pairs,
      // and adds them to this new object, and then I can still override key value pairs
      ...userInput,
      enteredTitle: event.target.value,
    }); */
    // 3rd option
    // I get the previous state snapshot
    /*     setUserInput((prevState) => {
      //return new state snapshot, and makes sure that the prevState was the latest before updating the state
      return { ...prevState, enteredTitle: event.target.value };
    }); */
    console.log(enteredTitle);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*     setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    }); */
    console.log(enteredAmount);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /*     setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    }); */
    console.log(enteredDate);
  };

  const submitHandler = (event) => {
    // prevents the default request sent to server, after this, after submitting the form, the page won't reload
    event.preventDefault();

    // combined object, to combine all entered data
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      // constructing a new Date with built in Date contructor, I passed the entered date, that will parse that date string and convert it into a date object
      date: new Date(enteredDate),
    };
    console.log(expenseData);

    // executing saveExpenseDataHandler = (enteredExpenseData) from NexExpense (line 7.)
    // I can do that(even if its not defined in ExpenseForm) because I'm passing a pointer edit in NewExpense(line 21) <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
    props.onSaveExpenseData(expenseData);
    // because I binded value to enteredTitle in the return(), after the form is submited it will clear all the text inputed in to that form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      {/* All inputs */}
      <div className="new-expense__controls">
        {/* Single Input */}
        <div className="new-expense__control">
          {/* First Input */}
          <label>Title</label>
          {/* Input Type */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
