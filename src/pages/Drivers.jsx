import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Users } from 'lucide-react';
import { drivers, seasons, teams } from '../data/database';

const Drivers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSeason, setSelectedSeason] = useState('all');
    const [selectedTeam, setSelectedTeam] = useState('all');
    const [selectedNationality, setSelectedNationality] = useState('all');

    const nationalities = [...new Set(drivers.map(d => d.nationality))].sort();
    const sortedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));

    const filteredDrivers = drivers.filter(driver => {
        const searchMatch = `${driver.name} ${driver.surname}`.toLowerCase().includes(searchTerm.toLowerCase());
        if (!searchMatch) return false;

        if (selectedNationality !== 'all' && driver.nationality !== selectedNationality) return false;

        if (selectedSeason !== 'all' || selectedTeam !== 'all') {
            let matchSeason = false;
            let matchTeam = false;
            const yearsToCheck = selectedSeason === 'all' ? Object.keys(seasons) : [selectedSeason];

            for (const year of yearsToCheck) {
                for (const [teamId, driverIds] of Object.entries(seasons[year])) {
                    if (driverIds.includes(driver.id)) {
                        matchSeason = true;
                        if (selectedTeam === 'all' || selectedTeam === teamId) {
                            matchTeam = true;
                        }
                    }
                }
            }
            if (selectedSeason !== 'all' && !matchSeason) return false;
            if (selectedTeam !== 'all' && !matchTeam) return false;
        }
        return true;
    });

    return (
        <div style={{ paddingBottom: '60px' }}>
            <div className="page-header">
                <h1 className="page-header-title">
                    <Users size={30} color="var(--f1-red)" style={{ marginRight: '-4px' }}/>
                    Pilotes
                </h1>
                <p className="page-header-sub">{filteredDrivers.length} pilote{filteredDrivers.length !== 1 ? 's' : ''} trouvé{filteredDrivers.length !== 1 ? 's' : ''}</p>
            </div>

            <div className="filter-bar">
                <div style={{ position: 'relative', flexGrow: 1, minWidth: '250px' }}>
                    <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                    <input
                        type="text"
                        placeholder="Rechercher un pilote…"
                        className="search-input"
                        style={{ paddingLeft: '44px', width: '100%' }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <select className="select-input" value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
                    <option value="all">Toutes les saisons</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                </select>

                <select className="select-input" value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
                    <option value="all">Toutes les écuries</option>
                    {sortedTeams.map(t => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                </select>

                <select className="select-input" value={selectedNationality} onChange={(e) => setSelectedNationality(e.target.value)}>
                    <option value="all">Toutes les nationalités</option>
                    {nationalities.map(n => (
                        <option key={n} value={n}>{n}</option>
                    ))}
                </select>
            </div>

            <div className="grid">
                {filteredDrivers.map(driver => {
                    const team = teams.find(t => t.id === driver.currentTeamId);
                    return (
                        <Link to={`/drivers/${driver.id}`} key={driver.id} className="driver-card animate-fade-up">
                            <div className="driver-card-image-wrap">
                                <span className="driver-card-number">{driver.number}</span>
                                <img src={driver.image} alt={`${driver.name} ${driver.surname}`} loading="lazy" />
                            </div>
                            <div className="driver-card-content">
                                <div className="driver-team">{team?.name ?? '—'}</div>
                                <h3 className="driver-name">
                                    {driver.name} <span className="driver-surname">{driver.surname}</span>
                                </h3>
                                <div className="driver-stats">
                                    <div className="stat-item">
                                        <span className="stat-value">{driver.wins}</span>
                                        <span className="stat-label">Victoires</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-value">{driver.podiums}</span>
                                        <span className="stat-label">Podiums</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-value">{driver.championships}</span>
                                        <span className="stat-label">Titres</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
                {filteredDrivers.length === 0 && (
                    <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
                        <Search size={36} color="var(--text-muted)" />
                        <p>Aucun pilote ne correspond à vos critères.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Drivers;
