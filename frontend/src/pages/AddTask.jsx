import { useState, useRef, useMemo } from "react"

const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

export default function AddTask() {

    const [title, setTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef();

    // validazione title
    const titleError = useMemo(() => {
        if (!title.trim())
            return "Il nome della task non può essere vuoto"

        if ([...title].some(c => symbols.includes(c)))
            return "Il nome della task non può contenere simboli"

        return ""
    }, [title]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            title: title.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value
        };

        console.log(newTask);
    }

    return (
        <>
            <h1>Aggiungi Task</h1>

            {/* form per aggiunta nuovo task */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Nome del task</label>
                    <input
                        type="text"
                        name="title"
                        id=""
                        placeholder="Inserisci la tua nuova task"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    {titleError &&
                        <p className="error">{titleError}</p>
                    }
                </div>

                <div>
                    <label htmlFor="">Descrizione</label>
                    <textarea
                        name="description"
                        placeholder="Descrivi la tua task"
                        ref={descriptionRef}
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="">Stato</label>
                    <select
                        name="status"
                        ref={statusRef}
                    >
                        <option value="to-do">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={titleError}
                >Aggiungi Task</button>
            </form>
        </>
    )
}