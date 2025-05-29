import { useState, useRef } from "react"
import Modal from "./Modal"

export default function EditTaskModal({ show, onClose, task, onSave }) {
    const [editedTask, setEditedTask] = useState(task);
    const editFormRef = useRef();

    const changeEditedTask = (key, e) => {
        setEditedTask(prev => ({ ...prev, [key]: e.target.value }))
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSave(editedTask);
    };

    return (
        <Modal
            title="Modifica Task"
            content={
                <form ref={editFormRef} onSubmit={handleSubmit}>
                    <div>
                        <label>Nome Task</label>
                        <input
                            type="text"
                            value={editedTask.title}
                            onChange={e => changeEditedTask("title", e)}
                        />
                    </div>

                    <div>
                        <label>Descrizione</label>
                        <textarea
                            value={editedTask.description}
                            onChange={e => changeEditedTask("description", e)}
                        />
                    </div>

                    <div>
                        <label>Stato</label>
                        <select
                            name="status"
                            value={status}
                            onChange={e => changeEditedTask("status", e)}
                        >
                            <option value="To do">To do</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                </form>
            }
            confirmText="Salva"
            show={show}
            onClose={onClose}
            onConfirm={() => editFormRef.current.requestSubmit()}
        />
    )
}