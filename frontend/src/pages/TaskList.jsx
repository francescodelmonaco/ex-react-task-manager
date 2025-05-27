import TaskRow from "../components/TaskRow";

export default function TaskList() {
    return (
        <>
            <h1>Lista dei Task</h1>

            <div className="table">
                <ul className="table-head">
                    <li><h3>Nome</h3></li>
                    <li><h3>Stato</h3></li>
                    <li><h3>Data di Creazione</h3></li>
                </ul>

                {/* elenco task */}
                <div>
                    <ul className="tasks-list">
                        <TaskRow />
                    </ul>
                </div>
            </div>
        </>
    )
}