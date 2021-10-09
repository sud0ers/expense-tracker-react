import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSES = [];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
    // console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items= {expenses}/>
    </div>
  );
}

export default App;
