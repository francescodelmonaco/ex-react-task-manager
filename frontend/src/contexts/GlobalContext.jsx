import { createContext, useContext } from "react"
import useTasks from "../../hooks/useTasks"

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const value = useTasks();

    return (
        <GlobalContext.Provider value={{ ...value }}>
            {children}
        </GlobalContext.Provider >
    )
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext, GlobalContext };