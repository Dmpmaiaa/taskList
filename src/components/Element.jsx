import styles from '../styles/Element.module.css'
import { FaPencilAlt } from "react-icons/fa";

export function Element({ tasks, ...props }) {
    return (
        <>
            {tasks.map((task, idx) => (
                <li className={
                    [
                        styles.liItem,
                        tasks[idx].completed ? styles.completed : styles.uncompleted,
                    ].join(' ')
                } key={task.id}>

                    <button  className={styles.editBtn} onClick={() => props.editTask(idx)}>
                       <FaPencilAlt className={styles.pencil}/>
                    </button>

                    <span>{task.content}</span>
                    <div>
                        <input type="checkbox" onChange={() => props.markAsCompleted(task.id)} />

                        <button
                            onClick={() => props.delete(idx)}>
                            Remove
                        </button>
                    </div>
                </li>

            ))}
        </>
    )
}