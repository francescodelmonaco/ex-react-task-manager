import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./contexts/GlobalContext"

// layouts
import DefaultLayout from "./layouts/DefaultLayout"

// components
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"
import TaskDetail from "./pages/TaskDetail"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={TaskList} />
              <Route path="/addtask" Component={AddTask} />
              <Route path="/task/:id" Component={TaskDetail} />
            </Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  )
}