import './ExpenseFilter.css';

const ExpensesFilter = ({ selected, onChangeFilter }) => {

    const dropdownChangeHandler = (event) => {
        onChangeFilter(event.target.value);
    };
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={selected} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='all'>All</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;