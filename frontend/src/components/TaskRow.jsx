import { useGlobalContext } from "../contexts/GlobalContext"
import { memo } from "react"

function TaskRow() {
    const { tasks } = useGlobalContext();

    const statusStyle = (status) => {
        if (status === "To do") {
            return "red-pill"
        } else if (status === "Doing") {
            return "yellow-pill"
        } else {
            return "green-pill"
        }
    }

    return (
        <>
            {
                tasks.map(t => {
                    return (
                        <li key={t.id} className="task-row">
                            <span>{t.title}</span>
                            <span
                                className={statusStyle(t.status)}
                            >{t.status}</span>
                            <span>{t.createdAt}</span>
                        </li >
                    )
                })
            }
        </>
    )
};

export default memo(TaskRow);