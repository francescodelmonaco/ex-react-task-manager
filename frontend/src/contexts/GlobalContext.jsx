import { createContext, useState, useEffect, useContext } from "react"
import axios from "axios"

const GlobalContext = createContext();

const url = import.meta.env.VITE_API_URL;

const GlobalProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`${url}/tasks`)
            .then(res => setTasks(res.data))
            .catch(err => console.error(err))
    }, []);

    const value = {
        tasks
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };