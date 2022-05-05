import "./index.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id:"e1",
      title:"School Fee",
      amount:250,
      date: new Date(2021, 5, 26)
    },
    {
      id:"e2",
      title:"Books",
      amount:300,
      date: new Date(2021, 6, 26)
    },
    {
      id:"e3",
      title:"House Rent",
      amount:2300,
      date: new Date(2021, 12, 26)
    },
    {
      id:"e4",
      title:"Food",
      amount:2500,
      date: new Date(2021, 4, 26)
    }
  ];
  return (
    <div>
      <ExpenseItem
        date={expense[0].date}
        title={expense[0].title}
        amount={expense[0].amount}>
      </ExpenseItem>

      <ExpenseItem
         date={expense[1].date}
         title={expense[1].title}
         amount={expense[1].amount}>
      </ExpenseItem>

      <ExpenseItem
         date={expense[2].date}
         title={expense[2].title}
         amount={expense[2].amount}>
      </ExpenseItem>

      <ExpenseItem
         date={expense[3].date}
         title={expense[3].title}
         amount={expense[3].amount}>
      </ExpenseItem>

    </div>
  );
}

export default App;
