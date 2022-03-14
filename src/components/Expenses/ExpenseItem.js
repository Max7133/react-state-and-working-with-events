import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

//../UI/Card" because I need to get out of expenses folder to the componets, and go to UI folder
const ExpenseItem = (props) => {
  // function ExpenseItem(props) {
  // useState() is a React hook, only is called insided of React component fun like ExpenseItem(), and not in nested fun like clickHangler() bellow
  // title points at props.title, setTitle updates the title, use convention like that
  // first element title === currentState, setTitle === updated state
  // props.title because I named it "title" in Expenses.js return()
  // this title variable replaces //<h2>{props.title}</h2> with <h2>{title}</h2>

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
