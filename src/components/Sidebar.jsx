import { NavLink } from 'react-router-dom';
import { Flag, Home, Users, Shield, Calendar, Activity } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { to: '/', label: 'Accueil', icon: <Home size={18} />, end: true },
        { to: '/drivers', label: 'Pilotes', icon: <Users size={18} /> },
        { to: '/teams', label: 'Écuries', icon: <Shield size={18} /> },
        { to: '/seasons', label: 'Saisons', icon: <Calendar size={18} /> },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <div className="brand-logo-wrap">
                    <Flag size={20} color="white" />
                </div>
                <div className="brand-text">
                    <span className="brand-f1">F1 INFO</span>
                    <span className="brand-info">Saison 2026</span>
                </div>
            </div>

            <div className="sidebar-section-label">Navigation</div>

            <nav className="sidebar-nav">
                {navItems.map(item => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                    >
                        <span className="sidebar-icon">{item.icon}</span>
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <span className="sidebar-footer-dot" />
                <span>Données via Jolpica &amp; Motorsport</span>
            </div>
        </aside>
    );
};

export default Sidebar;
