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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={props.expensesprop[0].title}
          amount={props.expensesprop[0].amount}
          date={props.expensesprop[0].date}
        />
        <ExpenseItem
          title={props.expensesprop[1].title}
          amount={props.expensesprop[1].amount}
          date={props.expensesprop[1].date}
        />
        <ExpenseItem
          title={props.expensesprop[2].title}
          amount={props.expensesprop[2].amount}
          date={props.expensesprop[2].date}
        />
        <ExpenseItem
          title={props.expensesprop[3].title}
          amount={props.expensesprop[3].amount}
          date={props.expensesprop[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
