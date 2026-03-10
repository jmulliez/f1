import { NavLink } from 'react-router-dom';
import { Flag, Home, Users, Shield, Calendar, Activity } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { to: '/', label: 'Accueil', icon: <Home size={20} />, end: true },
        { to: '/drivers', label: 'Pilotes', icon: <Users size={20} /> },
        { to: '/teams', label: 'Écuries', icon: <Shield size={20} /> },
        { to: '/seasons', label: 'Saisons', icon: <Calendar size={20} /> },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <Flag size={28} color="#e10600" />
                <span><span className="brand-f1">F1</span> INFO</span>
            </div>

            <nav className="sidebar-nav">
                {navItems.map(item => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <Activity size={14} />
                <span>Données via Jolpica &amp; Motorsport</span>
            </div>
        </aside>
    );
};

export default Sidebar;
