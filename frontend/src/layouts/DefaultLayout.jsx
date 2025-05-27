import { NavLink, Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>
                            Lista Task
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/addtask"}>
                            Aggiungi una Task
                        </NavLink>
                    </li>
                </ul>

            </nav>

            <main>
                <Outlet />
            </main>
        </>
    )
}