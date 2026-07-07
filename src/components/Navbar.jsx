import { NavLink } from "react-router-dom"
import navLinks from "../data/navLinks";


const Navbar = () => {
  
  const linkClass = ({ isActive }) => `p-1 inline-block transition-all duration-300 hover:scale-125 hover:text-red-600 ${ isActive ? 'text-red-300 border-b-2' : 'text-gray-900'}`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-2 py-5">
            <h1 className="text-2xl font-bold text-blue-600">
                Sly dev
            </h1>

            <ul className="flex font-medium gap-7">
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <NavLink
                          to={link.path}
                          className={linkClass}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar