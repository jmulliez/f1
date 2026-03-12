import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { seasons, teams, getDriversByTeamAndSeason } from '../data/database';

const Seasons = () => {
    const [selectedYear, setSelectedYear] = useState('2026');
    const availableYears = Object.keys(seasons).sort((a, b) => b - a);

    return (
        <div style={{ paddingBottom: '60px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
                <div className="page-header" style={{ marginBottom: 0 }}>
                    <h1 className="page-header-title">
                        <Calendar size={30} color="var(--f1-red)" style={{ marginRight: '-4px' }}/>
                        Saisons
                    </h1>
                    <p className="page-header-sub">Compositions par équipe</p>
                </div>

                <div className="season-year-tabs">
                    {availableYears.map(year => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`season-year-tab ${selectedYear === year ? 'active' : ''}`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {teams.map(team => {
                    const teamDrivers = getDriversByTeamAndSeason(team.id, selectedYear);
                    if (teamDrivers.length === 0) return null;

                    return (
                        <div key={team.id} className="season-team-block animate-fade-up">
                            <Link to={`/teams/${team.id}`} className="season-team-info" style={{ textDecoration: 'none' }}>
                                <img src={team.logo} alt={team.name} style={{ width: '70px', objectFit: 'contain' }} />
                                <div>
                                    <h3 style={{ fontSize: '1.15rem', marginBottom: '4px', letterSpacing: '-0.02em' }}>{team.name}</h3>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                                        {team.engine}
                                    </span>
                                </div>
                            </Link>

                            <div className="season-drivers">
                                {teamDrivers.map(driver => (
                                    <Link to={`/drivers/${driver.id}`} key={driver.id} className="season-driver-pill">
                                        <img
                                            src={driver.image}
                                            alt={driver.surname}
                                            style={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)' }}
                                        />
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1 }}>{driver.name}</span>
                                            <span style={{ fontWeight: 800, fontSize: '1.05rem', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{driver.surname}</span>
                                        </div>
                                        <span style={{ marginLeft: 'auto', fontWeight: 800, color: 'rgba(255,255,255,0.15)', fontSize: '1.4rem', fontFamily: "'Barlow Condensed', sans-serif" }}>
                                            {driver.number}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Seasons;
