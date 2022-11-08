import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "el",
      title: "Toilet Paper",
      amount: 98.78,
      date: new Date(2020, 6, 11),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 500.99,
      date: new Date(2021, 7, 11),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 140.69,
      date: new Date(2021, 8, 12),
    },
    {
      id: "e4",
      title: "New Desk(Wooden)",
      amount: 297.9,
      date: new Date(2021, 8, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;