import React from "react";
import "./Card.css";

// function Card(props) {
const Card = (props) => {
  //3.) Anything I receive as a className from outside is added to "card " string
  //4.) <div className={classes}> instead of <div className="card"></div>
  const classes = "card " + props.className;
  //custom wrapper example <Card></Card>
  //to create them
  //1.) I need to accept props as a attribute
  //2.) props.children which allows to create wrapper components, everything between <Card></Card> will work
  // return <div> className="card"</div>
  return <div className={classes}>{props.children}</div>;
};

export default Card;
