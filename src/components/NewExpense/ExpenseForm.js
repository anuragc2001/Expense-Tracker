import './ExpenseForm.css'
import { useState } from 'react'

function NewExpenseForm({ onSaveExpenseData }) {
    const [titleChange, setTitleChange] = useState('')
    const [dateChange, setDateChange] = useState('')
    const [amountChange, setAmountChange] = useState('')

    const titleChangeHandler = (e) => {
        setTitleChange(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setDateChange(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setAmountChange(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title: titleChange,
            amount: Number(amountChange),
            date: (dateChange) ? new Date(dateChange) : 0
        }

        if (expenseData.title && expenseData.amount && expenseData.date) {
            onSaveExpenseData(expenseData)
        }
        setAmountChange('')
        setDateChange('')
        setTitleChange('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={titleChange} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amountChange} min="0.00" step="0.00" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={dateChange} min="2021-01-01" max="2024-01-01" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm