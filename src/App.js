import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from 'react'
function App() {

  const [expenses, setExpenses] = useState([])

  const addExpenseData = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: String('e' + (expenses.length + 1))
    }
    setExpenses((prevState) => [newExpenseData, ...prevState])
    console.log(newExpenseData)
  }
  return (
    <div className="App">
      <NewExpense onAddExpenseData={addExpenseData} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
