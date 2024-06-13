import TaskList from '../task_list/TaskList';
import TaskForm from '../task_form/TaskForm';
import { useState } from 'react';
import './Tasks.css';

const TASKS =[{
  name:'Leetcode',
  description:"Daily challenge",
  date:new Date()
},{
  name:'GeeksforGeeks',
  description:"contest",
  date:new Date()
},{
  name:'Codechef',
  description:"Biweekly contest",
  date:new Date()
},{
  name:'edmatrix',
  description:"assesment",
  date:new Date()
}]

function Tasks() {
    const [tasks,setTasks]=useState([]);

    const addTasks = async(newObj) => {
      await fetch('http://localhost:5000/task/create',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(newObj)
      })
        
        setTasks([...tasks , newObj ]);
    }

    
     const deleteTask=async(id)=>{
      await fetch('http://localhost:5000//tasks/:id',{
        method:"DELETE",
        headers:{
          'Content-Type':'application/json'
        },
       body:JSON.stringify(id)
      })
      deleteTask([...tasks,id]);
     }

  return (
    <div className='tasks'>
      <h1 className='heading'>Task Manager</h1>
     <TaskForm addTask={addTasks} deleteTask={deleteTask}/>
     
      <TaskList list={tasks} />
    </div>
  )
}

export default Tasks