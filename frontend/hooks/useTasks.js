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

    function addTask(newTask) {

    };

    function removeTask(taskId) {

    };

    function upsateTask(updatedTask) {

    };

    return { tasks, addTask, removeTask, upsateTask }
}