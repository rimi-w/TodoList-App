import { Link, Outlet } from "react-router-dom";
import Footer from './Footer'

export default function NavBar() {
    return (
        <div className="flex flex-col justify-start items-center">
            <nav className="w-screen min-w-[300px] min-h-[70px] text-4xl px-10 pt-10 flex flex-col items-start">
                <Link to='/'><div className="mr-[50px]">🗓</div></Link>
            </nav>
            <Outlet />
            <Footer />
        </div>
    )
}