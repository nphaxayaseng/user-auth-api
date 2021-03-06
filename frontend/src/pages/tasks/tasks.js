import React from 'react';
import AddTask from '../../components/addTask/addTask';
import TaskList from '../../components/taskList/TaskList';
import './tasks.css';

const Tasks = () => {

    return (
        <div className="task-lisk__main-container">
       <h1>Task List</h1>
       <AddTask />
       <TaskList/>
    </div>
      );
}
 
export default Tasks;