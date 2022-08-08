// import React from 'react'
import Task from './Task'



const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <>
            {tasks.map((task) => (
                <Task 
                key={task.id} 
                task={task} 
                onDelete={onDelete} 
                onToggle={onToggle}/>
            ))}
            
        </> //map run the function 'task' that'll and go through the
        // and out put in h3 the 'text' in each of the tasks above
    )
}

export default Tasks
