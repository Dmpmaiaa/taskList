import styles from '../styles/Element.module.css'

export function Element({ tasks, ...props }) {
    return (
        <>
            {tasks.map((task, idx) => (
                <li className={tasks[idx].completed ? styles.completed : styles.uncompleted}   key={task.id}>
                    
                    <button>
                        Edit
                    </button>

                    {task.content}

                    <input type="checkbox" onChange={() => props.markAsCompleted(task.id)}/>

                    <button
                        onClick={() => props.delete(idx)}>
                        Remove
                    </button>
                </li>

            ))}
        </>
    )
}