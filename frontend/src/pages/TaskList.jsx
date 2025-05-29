import { useGlobalContext } from "../contexts/GlobalContext"
import { useMemo, useState } from "react"

// components
import TaskRow from "../components/TaskRow"

export default function TaskList() {

    const { tasks } = useGlobalContext();

    const [sortBy, setSortBy] = useState("createdAt");
    const [sortOrder, setSortOrder] = useState(1);

    const sortIcon = sortOrder === 1 ? "↓" : "↑";

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1);
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
    };

    const sortedTask = useMemo(() => {
        return [...tasks].sort((a, b) => {
            let compare;

            if (sortBy === "title") {
                compare = a.title.localeCompare(b.title)
            } else if (sortBy === "status") {
                const statusOptions = ["To do", "Doing", "Done"];
                compare = statusOptions.indexOf(a.status) - statusOptions.indexOf(b.status);
            } else if (sortBy === "createdAt") {
                compare = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            }

            return compare * sortOrder;
        })
    }, [tasks, sortBy, sortOrder]);

    return (
        <>
            <h1>Lista dei Task</h1>

            <table>
                <thead>
                    <tr>
                        <th
                            className="border-r"
                            onClick={() => handleSort("title")}
                        >
                            <div>
                                <span>Nome</span>
                                <span>{sortBy === "title" && sortIcon}</span>
                            </div>
                        </th>

                        <th
                            className="border-r"
                            onClick={() => handleSort("status")}
                        >
                            <div>
                                <span>Stato</span>
                                <span>{sortBy === "status" && sortIcon}</span>
                            </div>
                        </th>

                        <th
                            onClick={() => handleSort("createdAt")}
                        >
                            <div>
                                <span>Data di creazione</span>
                                <span>{sortBy === "createdAt" && sortIcon}</span>
                            </div>
                        </th>
                    </tr>
                </thead>

                {/* elenco task */}
                <tbody>
                    {
                        sortedTask.map(t => (
                            <TaskRow key={t.id} task={t} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}