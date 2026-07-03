import { NavLink } from "react-router-dom"

const Navbar = () => {
  
  const linkClass = ({ isActive }) => `p-1 inline-block transition-all duration-300 hover:scale-125 hover:text-red-600 ${ isActive ? 'text-red-300 border-b-2' : 'text-gray-900'}`;

  return (
    <header className="bg-white shadow-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-2 py-5">
            <h1 className="text-2xl font-bold text-blue-600">
                Sly dev
            </h1>

            <ul className="flex font-medium gap-7">
                <li>
                    <NavLink to={'/'} className={linkClass}>Home</NavLink>
                </li>

                <li>
                    <NavLink to={'/about'} className={linkClass}>About</NavLink>
                </li>

                <li>
                    <NavLink to={'/skills'} className={linkClass}>Skills</NavLink>
                </li>

                <li>
                    <NavLink to={'/projects'} className={linkClass}>Projects</NavLink>
                </li>

                <li>
                    <NavLink to={'/contact'} className={linkClass}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar