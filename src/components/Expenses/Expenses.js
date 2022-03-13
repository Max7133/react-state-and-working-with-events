import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
//../UI/Card" because I need to get out of expenses folder to the componets, and go to UI folder
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  // function Expenses(props) {

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Filtering expenses
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // If no expenses found in certain year
  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent =
      filteredExpenses.length > 0 &&
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
  }

  // props.items.map --- Retransforms the array to an array full of JSX items
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
