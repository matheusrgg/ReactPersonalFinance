import React, { useState } from 'react';
import FilterExpense from '../FilterExpense/FilterExpense';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const saveFilterDataHandler = (enteredFilterData) => {
    setFilteredYear(enteredFilterData)
    // console.log("tentando entender setFilteredYear", setFilteredYear);
    // console.log("tentando entender filteredYear", filteredYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <FilterExpense
          select={filteredYear}
          onSaveFilterData={saveFilterDataHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>

  );
}

export default Expenses;
