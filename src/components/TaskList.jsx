import { useState } from "react"
import { Element } from "./Element"
import { v4 as uuidv4 } from 'uuid'
import styles from "../styles/TaskList.module.css"

export function TaskList(props) {
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState("")


    //Manages change in the input field
    const handleChange = e => {
        setInputValue(e.target.value)
    }

    // Adds new task to task list
    const handleSubmit = e => {
        e.preventDefault()

        if (inputValue.length > 0) {
            setTasks(prevState => (
                [...prevState,
                {
                    id: uuidv4(),
                    content: inputValue,
                    completed: false,
                    editing: false
                }
                ]
            ))

            setInputValue("")
        }
    }

    //Manages removal of tasks from list
    const handleDelete = (idx) => {
        setTasks(tasks.filter((_, i) => idx !== i))
    }
    
    // Manages complettion of task with checkbox
    const handleCheckbox = (id) => {
        setTasks(prevState =>
            prevState.map((ele) => ele.id === id ? { ...ele, completed: !ele.completed } : ele))

    }

    //Manages edits
    const handleEdit = (idx) => {
        setTasks(prevState => 
            prevState.map((ele, i) => (
                idx === i ? {...ele, editing: !ele.editing} : ele))
        )
                
        }



    return (
        <div className={styles.wrapper}>
            <form onSubmit={(e) => handleSubmit(e)} >
                <input
                    className={styles.mainInput}
                    autoComplete="off"
                    value={inputValue}
                    placeholder="Add tasks" name="tasks"
                    onChange={(e) => handleChange(e)}
                    type="text"
                />

                <button>Add</button>
            </form>

            <ul>
                <Element
                    tasks={tasks}
                    delete={(idx) => handleDelete(idx)}
                    markAsCompleted={(id) => handleCheckbox(id)}
                    editTask={(i) => handleEdit(i)} />
            </ul>

        </div>
    )
}