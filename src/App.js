import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from 'react'
function App() {


  let expenseItems = JSON.parse(localStorage.getItem('expenses') || '[]')

  if (expenseItems.length > 0) {
    expenseItems = expenseItems.map(expenseItem => {
      return {
        ...expenseItem,
        date: new Date(expenseItem.date)
      }
    })
  }
  const [expenses, setExpenses] = useState(expenseItems)

  const addExpenseData = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: String('e' + (expenses.length + 1))
    }
    setExpenses((prevState) => {
      localStorage.setItem('expenses', JSON.stringify([newExpenseData, ...prevState]))
      return [newExpenseData, ...prevState]
    })
  }
  return (
    <div className="App">
      <NewExpense onAddExpenseData={addExpenseData} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
