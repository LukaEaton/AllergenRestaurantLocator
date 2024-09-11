import { Link, Outlet } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import '../styles/NavBar.css'

function NavBar(){
    return ( 
        <>
            <nav>
                <ul className="links">
                <li>
                    <Link to="/">
                        <IoHome />
                    </Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                </ul>
            </nav>
            <div id="body">
                <Outlet/>
            </div>
        </>
    )
}

export default NavBar