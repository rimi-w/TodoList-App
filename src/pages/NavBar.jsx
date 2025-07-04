import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav>
                <Link to='/'><div className="menu">Home</div></Link>
                <Link to='/todoList'><div className="menu">To do List</div></Link>
                <Link to='/todoList?todo'><div className="menu"></div></Link>
            </nav>
            <Outlet />
        </>
    )
}