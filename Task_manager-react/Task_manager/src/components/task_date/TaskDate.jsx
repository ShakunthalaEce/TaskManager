import './TaskDate.css';

function TaskDate(props) {
    const {date} = props;
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month:'long'});
    console.log(day);
  return (
    <div className='task-date'>
    <div className='task-date-month'>{month}</div>
    <div className='task-date-day'>{day}</div>
    <div className='task-date-year'>{year}</div>
   </div>
  )
}

export default TaskDate;