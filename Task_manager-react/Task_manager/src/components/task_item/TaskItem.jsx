import TaskDate from '../task_date/TaskDate';
import './TaskItem.css';

function TaskItem(props) {
    const {title,date,description} = props.task;
  return (
    <div className='card task-item'>
        <TaskDate date={date}/>
        <div className='task-name'>{title}</div>
        <div className='task-description'>{description}</div>
        
    </div>
  )
}

export default TaskItem;