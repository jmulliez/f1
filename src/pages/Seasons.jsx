import { useState } from 'react';
import { Link } from 'react-router-dom';
import { seasons, teams, getDriversByTeamAndSeason } from '../data/database';

const Seasons = () => {
    const [selectedYear, setSelectedYear] = useState('2024');
    const availableYears = Object.keys(seasons).sort();

    return (
        <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '24px' }}>
                <h1 className="section-title" style={{ margin: 0 }}>Sélectionnez une Saison</h1>

                <div style={{ display: 'flex', gap: '8px', backgroundColor: 'var(--f1-dark-gray)', padding: '8px', borderRadius: 'var(--border-radius-md)' }}>
                    {availableYears.map(year => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            style={{
                                padding: '12px 32px',
                                borderRadius: 'var(--border-radius-sm)',
                                backgroundColor: selectedYear === year ? 'var(--f1-red)' : 'transparent',
                                color: selectedYear === year ? 'white' : 'var(--text-secondary)',
                                fontWeight: 700,
                                fontSize: '1.125rem',
                                transition: 'all 0.2s'
                            }}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '24px' }}>
                {teams.map(team => {
                    const teamDrivers = getDriversByTeamAndSeason(team.id, selectedYear);

                    if (teamDrivers.length === 0) return null;

                    return (
                        <div key={team.id} className="season-team-block animate-fade-up">
                            <Link to={`/teams/${team.id}`} className="season-team-info" style={{ textDecoration: 'none' }}>
                                <img src={team.logo} alt={team.name} style={{ width: '80px', objectFit: 'contain' }} />
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{team.name}</h3>
                                    <span style={{ color: 'var(--text-secondary)' }}>Moteur: {team.engine}</span>
                                </div>
                            </Link>

                            <div className="season-drivers" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', flexGrow: 1 }}>
                                {teamDrivers.map(driver => (
                                    <Link to={`/drivers/${driver.id}`} key={driver.id} className="season-driver-pill">
                                        <img
                                            src={driver.image}
                                            alt={driver.surname}
                                            style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', backgroundColor: '#333' }}
                                        />
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1 }}>{driver.name}</span>
                                            <span style={{ fontWeight: 800, fontSize: '1.25rem', lineHeight: 1.2 }}>{driver.surname}</span>
                                        </div>
                                        <span style={{ marginLeft: 'auto', fontWeight: 800, color: 'rgba(255,255,255,0.2)', fontSize: '1.5rem' }}>
                                            {driver.number}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Seasons;
