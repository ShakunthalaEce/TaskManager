/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import './TaskForm.css'

// function TaskForm(props) {
//     const {addTask} =props;
//     const [title,setTitle] = useState('');
//     const [amount,setAmount] = useState('');
//     const [date,setDate] = useState('');

    
//     const handleTitleChange = (event) => {
//         setTitle(event.target.value);
//     }
//     const handleAmountChange = (event) => setAmount(event.target.value);
//     const handleDateChange = (event) => setDate(event.target.value);

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         console.log(title,amount,date);
//         const data = {name : title,amount : amount,date : new Date(date)};
//         addTask(data);
//         setTitle('')
//         setDate('')
//         setAmount('')
//     }
    

//   return (
//     <div className='new-task'>
//         <form className='task-form' onSubmit={handleFormSubmit}>
//         <div className='input-group'>
//             <label>Title</label>
//             <input type='text' placeholder='Enter the title' onChange={handleTitleChange} />
//         </div>
//         <div className='input-group'>
//             <label>Amount</label>
//             <input type='text' placeholder='Enter the Amount' onChange={handleAmountChange} />
//         </div>
//         <div className='input-group'>
//             <label>Date</label>
//             <input type='date' onChange={handleDateChange}  />
//         </div>

//         <div className='form-control-buttons'>
//             <button >Cancel</button>
//             <button type='submit'>Add Task</button>
//         </div>
//     </form>
//     </div>
//   )
// }

// export default TaskForm

import { useEffect, useState } from 'react'
import './TaskForm.css'

function TaskForm(props) {
    const {addTask} =props;
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [date,setDate] = useState('');


    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handleDateChange = (event) => setDate(event.target.value);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(title,description,date);
        const data = {title : title,description : description,date : new Date(date)};
        addTask(data);
        setTitle('')
        setDate('')
        setDescription('')
    }
    

  return (
    <div className='new-task'>
        <form className='task-form' onSubmit={handleFormSubmit}>
        <div className='input-group'>
            <label className='task-form label'>Title</label>
            <input type='text' placeholder='Enter the title' onChange={handleTitleChange} />
        </div>
        <div className='input-group'>
            <label className='task-form label'>Description</label>
            <input type='text' placeholder='Enter the description' onChange={handleDescriptionChange} />
        </div>
        <div className='input-group'>
            <label className='task-form label'>Date</label>
            <input type='date' onChange={handleDateChange}  />
        </div>

        <div className='form-control-buttons'>
            <button >Cancel</button>
            <button type="reset">Delete</button>
            <button type='submit'>Add Task</button>
        </div>
    </form>
    </div>
  )
}

export default TaskForm