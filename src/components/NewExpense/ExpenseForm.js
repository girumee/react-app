import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = () => {
    console.log('Title Changed!');
  };
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" min="0.1" step="0.1" onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()} />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31"/>
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
