import './Expenses.css'
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react'
import ExpensesChart from './ExpensesChart';
function Expenses({ items }) {

    const currYear = new Date().getFullYear()
    const [filteredYear, setFilteredYear] = useState(currYear);

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredItems = filteredYear === 'all' ? items : items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className="expenses">
            <ExpensesChart expenses={filteredItems} />
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseList items={filteredItems} />
        </Card>
    );
}
export default Expenses;