import { useParams } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function TaskDetail() {

    const { id } = useParams();

    const { tasks } = useContext(GlobalContext);

    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return (
            <h2>Task non trovata ❌</h2>
        )
    };

    return (
        <>
            <div>
                <h1>Info Task</h1>

                <div className="task-info">
                    <p><strong>Nome:</strong> {task.title}</p>
                    <p><strong>Descrizione:</strong> {task.description}</p>
                    <p><strong>Stato:</strong> {task.status}</p>
                    <p><strong>Data di creazione:</strong> {new Date(task.createdAt).toLocaleDateString()}</p>

                    <button className="delete-btn">Elimina Task</button>
                </div>
            </div>
        </>
    )
}