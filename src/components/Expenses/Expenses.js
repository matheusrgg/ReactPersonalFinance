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
    console.log("informação do filtro 1", filteredYear)
    console.log("informação do filtro 2", enteredFilterData)
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


        {/* {props.items.filter(expenses => expenses.date.getFullYear() == filteredYear).map(expense =>(
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
      ))} */}

        {console.log("o que vem aqui?", props.items[0].date.getFullYear())}
        {props.items.map((expense) => (
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
