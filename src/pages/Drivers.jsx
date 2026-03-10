import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { drivers, seasons, teams } from '../data/database';

const Drivers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSeason, setSelectedSeason] = useState('all');
    const [selectedTeam, setSelectedTeam] = useState('all');
    const [selectedNationality, setSelectedNationality] = useState('all');

    const nationalities = [...new Set(drivers.map(d => d.nationality))].sort();
    const sortedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));

    const filteredDrivers = drivers.filter(driver => {
        // Search
        const searchMatch = `${driver.name} ${driver.surname}`.toLowerCase().includes(searchTerm.toLowerCase());
        if (!searchMatch) return false;

        // Nationality
        if (selectedNationality !== 'all' && driver.nationality !== selectedNationality) return false;

        // Filter by season/team logic
        if (selectedSeason !== 'all' || selectedTeam !== 'all') {
            let matchSeason = false;
            let matchTeam = false;

            // Handle specific season check
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
        <div className="container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
            <h1 className="section-title">Pilotes de Formule 1</h1>

            <div className="filter-bar">
                <div style={{ position: 'relative', flexGrow: 1, minWidth: '250px' }}>
                    <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} />
                    <input
                        type="text"
                        placeholder="Rechercher un pilote..."
                        className="search-input"
                        style={{ paddingLeft: '48px', width: '100%' }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <select
                    className="select-input"
                    value={selectedSeason}
                    onChange={(e) => setSelectedSeason(e.target.value)}
                >
                    <option value="all">Toutes les Saisons</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                </select>

                <select
                    className="select-input"
                    value={selectedTeam}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                >
                    <option value="all">Toutes les Écuries</option>
                    {sortedTeams.map(t => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                </select>

                <select
                    className="select-input"
                    value={selectedNationality}
                    onChange={(e) => setSelectedNationality(e.target.value)}
                >
                    <option value="all">Toutes les Nationalités</option>
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
                                <div className="driver-team">{team?.name}</div>
                                <h3 className="driver-name">{driver.name} <span className="driver-surname">{driver.surname}</span></h3>

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
                    )
                })}
                {filteredDrivers.length === 0 && (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px', color: 'rgba(255,255,255,0.5)' }}>
                        Aucun pilote ne correspond à vos critères de recherche.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Drivers;
