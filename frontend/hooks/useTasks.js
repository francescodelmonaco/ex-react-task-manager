import { useState, useEffect } from "react"
import axios from "axios"

const url = import.meta.env.VITE_API_URL;

export default function useTasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`${url}/tasks`)
            .then(res => setTasks(res.data))
            .catch(err => console.error(err))
    }, []);

    const addTask = async newTask => {
        const res = await fetch(`${url}/tasks`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        });

        const { success, message, task } = await res.json();

        if (!success) throw new Error(message);

        setTasks(prev => [...prev, task]);
    };

    const removeTask = async taskId => {
        const res = await fetch(`${url}/tasks/${taskId}`, {
            method: "DELETE"
        });

        const { success, message } = await res.json();

        if (!success) throw new Error(message);

        setTasks(prev => prev.filter(t => t.id !== taskId));
    };

    const updateTask = async updatedTask => {
        const res = await fetch(`${url}/tasks/${updatedTask.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTask)
        });

        const { success, message, task } = await res.json();

        if (!success) throw new Error(message);

        setTasks(prev => prev.map(t => t.id === task.id ? task : t))
    };

    return { tasks, addTask, removeTask, updateTask }
}