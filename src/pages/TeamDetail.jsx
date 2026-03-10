import { useParams, Link, Navigate } from 'react-router-dom';
import { getTeamById, getDriversByTeamAndSeason, seasons } from '../data/database';

const TeamDetail = () => {
    const { id } = useParams();
    const team = getTeamById(id);

    if (!team) {
        return <Navigate to="/teams" replace />;
    }

    const seasonYears = Object.keys(seasons).sort(); // 2024, 2025, 2026

    return (
        <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>

            <div className="detail-header animate-fade-up">
                <div style={{ width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--f1-white)', borderRadius: 'var(--border-radius-lg)', padding: '48px', flexShrink: 0 }}>
                    <img src={team.logo} alt={team.name} style={{ width: '100%', maxWidth: '200px' }} />
                </div>

                <div className="detail-info">
                    <div className="detail-subtitle">Écurie Créée en {team.established}</div>
                    <h1 className="detail-title">{team.name}</h1>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '48px' }}>
                        <div>
                            <div className="stat-label">Directeur d'équipe</div>
                            <div style={{ fontWeight: 600, fontSize: '1.25rem' }}>{team.principal}</div>
                        </div>

                        <div>
                            <div className="stat-label">Base</div>
                            <div style={{ fontWeight: 600, fontSize: '1.25rem' }}>{team.country}</div>
                        </div>

                        <div>
                            <div className="stat-label">Moteur</div>
                            <div style={{ fontWeight: 600, fontSize: '1.25rem' }}>{team.engine}</div>
                        </div>
                    </div>

                    <div className="detail-stats">
                        <div className="detail-stat-card">
                            <div className="stat-label">Titres Constructeurs</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{team.championships}</div>
                        </div>
                        <div className="detail-stat-card">
                            <div className="stat-label">Victoires</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{team.wins}</div>
                        </div>
                        <div className="detail-stat-card">
                            <div className="stat-label">Podiums</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{team.podiums}</div>
                        </div>
                        <div className="detail-stat-card">
                            <div className="stat-label">Pole Positions</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{team.poles}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', marginTop: '64px' }}>

                <div>
                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Histoire de l'écurie</h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                        {team.history}
                    </p>
                </div>

                <div>
                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '32px' }}>Pilotes par Saison</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {seasonYears.map(year => {
                            const driversList = getDriversByTeamAndSeason(team.id, year);
                            if (driversList.length === 0) return null;

                            return (
                                <div key={year} style={{ backgroundColor: 'var(--f1-dark-gray)', borderRadius: 'var(--border-radius-md)', padding: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <h3 style={{ color: 'var(--f1-red)', marginBottom: '16px', fontSize: '1.5rem' }}>Saison {year}</h3>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {driversList.map(driver => (
                                            <Link to={`/drivers/${driver.id}`} key={driver.id} className="season-driver-pill" style={{ justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    <img src={driver.image} alt={driver.surname} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', backgroundColor: '#333' }} />
                                                    <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>{driver.name} <strong style={{ fontWeight: 800 }}>{driver.surname}</strong></span>
                                                </div>
                                                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.25rem', fontWeight: 800 }}>{driver.number}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeamDetail;
