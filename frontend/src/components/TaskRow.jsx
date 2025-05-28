import { memo } from "react"
import { Link } from "react-router-dom"

function TaskRow({ task }) {

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
        <tr>
            <td className="border-r">
                <Link to={`/task/${task.id}`}>
                    {task.title}
                </Link>
            </td>

            <td className="text-center border-r">
                <span className={statusStyle(task.status)}>{task.status}</span>
            </td>

            <td className="text-center">{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    )
};

export default memo(TaskRow);