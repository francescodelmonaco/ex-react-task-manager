import { BrowserRouter, Routes, Route } from "react-router-dom"

// layouts
import DefaultLayout from "./layouts/DefaultLayout"

// components
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={TaskList} />
            <Route path="/addtask" Component={AddTask} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}