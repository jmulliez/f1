import { NavLink } from 'react-router-dom';
import { Flag } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <NavLink to="/" className="brand">
                    <Flag size={28} color="#e10600" />
                    <span>F1</span> INFO
                </NavLink>

                <ul className="nav-links">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            end
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/drivers"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Pilotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/teams"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Écuries
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/seasons"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Saisons
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
