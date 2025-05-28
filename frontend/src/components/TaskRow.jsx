import { memo } from "react"

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
            <td className="border-r">{task.title}</td>

            <td className="text-center border-r">
                <span className={statusStyle(task.status)}>{task.status}</span>
            </td>

            <td className="text-center">{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    )
};

export default memo(TaskRow);