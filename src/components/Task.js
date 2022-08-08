//import React from 'react'
//import {FaTimes} from  "react-icon-library/fa"
import Button from './Button'

const Task = ({task, onDelete, onToggle}) => {

    // const onClick = () => {
    //     console.log("Click")
    // }

    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} >
            <h3>
                {task.text} 
                {/* {<FaTimes style={{color:"red", cursor:"pointer"}} /> } */}
               { <Button color="red" text="x" cursor= "ponter" onClick={() => onDelete(task.id)} />}
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
 