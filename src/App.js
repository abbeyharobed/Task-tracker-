//import logo from './logo.svg';
//import './App.css';

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Button from './components/Button'
import { useState } from "react"


const App = () => {

    const [showAddTask, setShowAddTask]= useState(false)

    const [tasks, setTasks] = useState(
        [
            {
            id: 1,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:20pm",
            reminder: true,
            },
            {
            id: 2,
            text: "School Meeting",
            day: "Feb 6th at 2:20pm",
            reminder: true,
            },
            {
            id: 3,
            text: "Shopping",
            day: "Feb 5th at 7:20pm",
            reminder: true,
            }
            
        ]
    )
        //Add Task
        const addTask =(task) => {
            const id = Math.floor(Math.random() * 10000) + 1
            const newTask = {id, ...task}
            setTasks([...tasks, newTask])

        }

        //delete Task
        const deleteTask = (id) => {
            setTasks(tasks.filter((task) => task.id !== id))
        }

        //toggle reminder
        const toggleReminder = (id) => {
            setTasks(tasks.map((task)=> task.id === id ? {...task,reminder: !task.reminder}: task))
        }        
    return (
      <div className="container">
            <Header 
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
            />     
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ?<Tasks tasks={tasks} 
            onDelete={deleteTask} onToggle={toggleReminder} /> : "No Task"
            }
        </div>
    )
}

export default App 
