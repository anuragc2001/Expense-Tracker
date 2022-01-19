import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense({ onAddExpenseData }) {

    const saveExpensedData = (enteredExpenseData) => {
        const expenseData = {
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