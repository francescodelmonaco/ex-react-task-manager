import { useNavigate, useParams } from "react-router-dom"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Modal from "../components/Modal"

export default function TaskDetail() {

    const { id } = useParams();

    const navigate = useNavigate();

    const { tasks, removeTask } = useContext(GlobalContext);

    const task = tasks.find(t => t.id === parseInt(id));

    const [modal, setModal] = useState(false);

    if (!task) {
        return (
            <h2>Task non trovata ❌</h2>
        )
    };

    const handleDelete = async () => {
        try {
            await removeTask(task.id);
            alert("Task elimininata correttamente!");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
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

                    <button
                        className="delete-btn"
                        onClick={() => setModal(true)}
                    >Elimina Task</button>
                </div>

                <Modal
                    title={"Conferma di eliminazione"}
                    content={"Confermi di voler cancellare la task?"}
                    show={modal}
                    onClose={() => setModal(false)}
                    onConfirm={handleDelete}
                />
            </div>
        </>
    )
}