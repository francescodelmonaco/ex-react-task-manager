import { useGlobalContext } from "../contexts/GlobalContext"

// components
import TaskRow from "../components/TaskRow"

export default function TaskList() {

    const { tasks } = useGlobalContext();

    return (
        <>
            <h1>Lista dei Task</h1>

            <table>
                <thead>
                    <tr>
                        <th className="border-r">Nome</th>
                        <th className="border-r">Stato</th>
                        <th>Data di creazione</th>
                    </tr>
                </thead>

                {/* elenco task */}
                <tbody>
                    {
                        tasks.map(t => (
                            <TaskRow key={t.id} task={t} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}