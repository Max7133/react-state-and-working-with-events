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

  // props.items.map --- Retransforms the array to an array full of JSX items
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
