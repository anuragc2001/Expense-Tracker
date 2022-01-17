import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense({ onAddExpenseData }) {

    const saveExpensedData = (enteredExpenseData) => {
        const expenseData = {
            id: 'e' + String(Math.floor(Math.random() * 10) + 5),
            ...enteredExpenseData
        }

        onAddExpenseData(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpensedData} />
        </div>
    )
}

export default NewExpense