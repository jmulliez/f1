import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getTeamById, getDriversByTeamAndSeason, seasons } from '../data/database';

const TeamDetail = () => {
    const { id } = useParams();
    const team = getTeamById(id);

    if (!team) return <Navigate to="/teams" replace />;

    const seasonYears = Object.keys(seasons).sort((a, b) => b - a);

    return (
        <div style={{ paddingBottom: '80px' }}>

            <Link to="/teams" className="back-btn">
                <ArrowLeft size={16} /> Retour aux écuries
            </Link>

            <div className="detail-header animate-fade-up">
                <div style={{
                    width: '300px', flexShrink: 0,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '48px',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <img src={team.logo} alt={team.name} style={{ width: '100%', maxWidth: '200px', objectFit: 'contain' }} />
                </div>

                <div className="detail-info">
                    <div className="detail-subtitle">Créée en {team.established}</div>
                    <h1 className="detail-title">{team.name}</h1>

                    <div className="info-grid" style={{ marginBottom: '24px' }}>
                        <div className="info-item">
                            <div>
                                <div className="info-item-label">Directeur d'équipe</div>
                                <div className="info-item-value">{team.principal}</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div>
                                <div className="info-item-label">Base</div>
                                <div className="info-item-value">{team.country}</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div>
                                <div className="info-item-label">Motoriste</div>
                                <div className="info-item-value">{team.engine}</div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-stats">
                        <div className="detail-stat-card">
                            <div className="stat-label" style={{ marginBottom: '6px' }}>Titres Constructeurs</div>
                            <div className="detail-stat-value">{team.championships}</div>
                        </div>
                        <div className="detail-stat-card">
                            <div className="stat-label" style={{ marginBottom: '6px' }}>Victoires</div>
                            <div className="detail-stat-value">{team.wins}</div>
                        </div>
                        <div className="detail-stat-card">
                            <div className="stat-label" style={{ marginBottom: '6px' }}>Podiums</div>
                            <div className="detail-stat-value">{team.podiums}</div>
                        </div>
                        <div className="detail-stat-card">
                            <div className="stat-label" style={{ marginBottom: '6px' }}>Pole Positions</div>
                            <div className="detail-stat-value">{team.poles}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '48px', marginTop: '8px' }}>

                <div>
                    <h2 className="section-title-large">Histoire de l'écurie</h2>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                        {team.history}
                    </p>
                </div>

                <div>
                    <h2 className="section-title-large">Pilotes par saison</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {seasonYears.map(year => {
                            const driversList = getDriversByTeamAndSeason(team.id, year);
                            if (driversList.length === 0) return null;
                            return (
                                <div key={year} style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '20px'
                                }}>
                                    <h3 style={{
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        color: 'var(--f1-red)',
                                        marginBottom: '14px',
                                        fontSize: '1.4rem',
                                        fontWeight: 700
                                    }}>Saison {year}</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {driversList.map(driver => (
                                            <Link to={`/drivers/${driver.id}`} key={driver.id} className="season-driver-pill" style={{ justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    <img src={driver.image} alt={driver.surname} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)' }} />
                                                    <span style={{ fontWeight: 700, fontSize: '1rem' }}>{driver.name} <strong style={{ fontWeight: 900 }}>{driver.surname}</strong></span>
                                                </div>
                                                <span style={{
                                                    fontFamily: "'Barlow Condensed', sans-serif",
                                                    color: 'rgba(255,255,255,0.15)',
                                                    fontSize: '1.5rem',
                                                    fontWeight: 800
                                                }}>{driver.number}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeamDetail;
