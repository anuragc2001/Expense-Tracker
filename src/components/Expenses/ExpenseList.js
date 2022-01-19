import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'

const message = <h2 className="expenses-list__fallback">Found No Expenses</h2>
function ExpenseList({ items }) {

    if (items.length === 0) {
        return message
    }

    return (
        <ul className="expenses-list">
            {items.map(expense => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={expense.id}
                />
            ))}
        </ul>

    )
}


export default ExpenseList