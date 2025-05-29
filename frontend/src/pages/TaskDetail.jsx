import { useNavigate, useParams } from "react-router-dom"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Modal from "../components/Modal"
import EditTaskModal from "../components/EditTaskModal";

export default function TaskDetail() {

    const { id } = useParams();

    const navigate = useNavigate();

    const { tasks, removeTask, updateTask } = useContext(GlobalContext);

    const task = tasks.find(t => t.id === parseInt(id));

    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(false);

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

    const handleUpdate = async updatedTask => {
        try {
            await updateTask(updatedTask);
            setEdit(false)
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    return (
        <>
            <div>
                <h1>Info Task</h1>

                <div className="task-info">
                    <p><strong>Nome:</strong> {task.title}</p>
                    <p><strong>Descrizione:</strong> {task.description}</p>
                    <p><strong>Stato:</strong> {task.status}</p>
                    <p><strong>Data di creazione:</strong> {new Date(task.createdAt).toLocaleDateString()}</p>

                    <div className="task-btn">
                        <button
                            className="edit-btn"
                            onClick={() => setEdit(true)}
                        >Modifica Task</button>

                        <button
                            className="delete-btn"
                            onClick={() => setModal(true)}
                        >Elimina Task</button>
                    </div>
                </div>

                <Modal
                    title={"Conferma di eliminazione"}
                    content={<p>Confermi di voler cancellare la task?</p>}
                    show={modal}
                    onClose={() => setModal(false)}
                    onConfirm={handleDelete}
                />

                <EditTaskModal
                    task={task}
                    show={edit}
                    onClose={() => setEdit(false)}
                    onSave={handleUpdate}
                />
            </div>
        </>
    )
}