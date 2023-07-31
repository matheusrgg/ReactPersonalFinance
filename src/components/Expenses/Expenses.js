import React, { useState } from 'react';
import FilterExpense from '../FilterExpense/FilterExpense';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const saveFilterDataHandler = (enteredFilterData) => {
    setFilteredYear(enteredFilterData)
    //estou escutando  a seleção do ano
    console.log("informação do filtro", filteredYear)
    //fazer um filtro da array com esses
    //criar uma nova array talvez?
  }

  return (
    <div>
     
      <Card className="expenses">
      <FilterExpense
        select={filteredYear}
        onSaveFilterData={saveFilterDataHandler}
      />
      {props.items.map((expense)=> (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
      ))}
     
      </Card>
    </div>

  );
}

export default Expenses;
