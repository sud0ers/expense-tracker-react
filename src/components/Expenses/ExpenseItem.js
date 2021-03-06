import React from 'react';
import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props) {

//  const [title, setTitle] = useState(props.title);
// //  console.log('Evaluated')

//   const clickHandler = ()=>{
//     setTitle('Updated');
//     // console.log(title);
//   }

  
  return (
    <Card className='expense-item'>
      <div> 
        <ExpenseDate date = {props.date}/>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price'>₹{props.amount}</div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
