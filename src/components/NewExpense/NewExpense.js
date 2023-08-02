import React ,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import AddNewExpense from './AddNewExpense';

const NewExpense = (props) => {

  const [isButtonClicked, setButtonClicked] = useState(false);

 const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  const hadleButtonClick=()=>{
    setButtonClicked(true)
  }

  const handleCancelClick = () => {
    setButtonClicked(false);
  };


  if(!isButtonClicked){
    return (
      <div className='new-expense'>
        <AddNewExpense onClick={hadleButtonClick} />
      </div>
    )
  }else{
    return (
      <div className='new-expense'>
        <ExpenseForm 
           onSaveExpenseData={saveExpenseDataHandler} 
        onCancelClick={handleCancelClick}

           />
      </div>
    );
  }


 
};

export default NewExpense;
