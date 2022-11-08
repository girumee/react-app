import ExpenseItem from "./ExpenseItem";
import './Expenses.css';


function expenses(props) {
    return (
        <div className="expense">
            <ExpenseItem 
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
            />
        </div>
    )
}