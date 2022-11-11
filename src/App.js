import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => { 
  const expenses = [
    {
      id: "el",
      title: "New Mobile",
      amount: 400.24,
      date: new Date(2020, 6, 10),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 500.99,
      date: new Date(2021, 7, 9),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 140.69,
      date: new Date(2021, 8, 12),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 297.9,
      date: new Date(2021, 10, 7),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's Started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
