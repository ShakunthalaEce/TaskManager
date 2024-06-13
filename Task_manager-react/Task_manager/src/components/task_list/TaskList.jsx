import TaskItem from '../task_item/TaskItem';
import './TaskList.css';

function TaskList({list}) {
    // const { list } = props;
  return (
    <div className='tasks-list'>
        {
            list.map( (item,index) => {
                return (
                    <TaskItem task={item} key={index}/>
                );
            })
        }
        
    </div>
  )
}
 export default TaskList;