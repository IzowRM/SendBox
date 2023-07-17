import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: ""
  });

  // title value
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    // setUserInput({
    // ...userInput,
    //enteredTitle:event.target.value,

    //})
    //setUserInput((prevState) => {
    // return { ...prevState, enteredTitle: event.target.value };
    //});
  }

  //Amount value
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    //  setUserInput({
    //   ...userInput,
    //  enteredAmount: event.target.value
    //});

    //setUserInput((prevState) => {
    // return { ...prevState, enteredAmount: event.target.value };
    //});
  }

  //Date Value
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);

    //setUserInput({
    //...userInput,
    //enteredDate: event.target.value
    // });

    //    setUserInput((prevState) => {
    //    return { ...prevState, enteredDate: event.target.value };
    //});
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>

        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense </button>
      </div>
    </form>
  );
}
export default ExpenseForm;
