import { useParams, Link, Navigate } from 'react-router-dom';
import { Flag, Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { getDriverById, getDriverHistory, teams } from '../data/database';

const DriverDetail = () => {
    const { id } = useParams();
    const driver = getDriverById(id);

    if (!driver) return <Navigate to="/drivers" replace />;

    const currentTeam = teams.find(t => t.id === driver.currentTeamId);
    const driverHistory = getDriverHistory(driver.id);
    const historyYears = Object.keys(driverHistory).sort((a, b) => b.localeCompare(a));

    return (
        <div style={{ paddingBottom: '80px' }}>

            <Link to="/drivers" className="back-btn">
                <ArrowLeft size={16} /> Retour aux pilotes
            </Link>

            <div className="detail-header animate-fade-up">
                <div className="detail-image">
                    <span style={{
                        position: 'absolute', top: 16, right: 20,
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: '6rem', fontWeight: 900,
                        color: 'rgba(255,255,255,0.06)', lineHeight: 1, zIndex: 0
                    }}>
                        {driver.number}
                    </span>
                    <img src={driver.image} alt={driver.name} style={{ position: 'relative', zIndex: 1 }} />
                </div>

                <div className="detail-info">
                    <div className="detail-subtitle"># {driver.number} · {driver.nationality}</div>
                    <h1 className="detail-title">{driver.name} <strong>{driver.surname}</strong></h1>

                    <div className="info-grid" style={{ marginBottom: '24px' }}>
                        <div className="info-item">
                            <div className="info-item-icon"><Flag size={18} /></div>
                            <div>
                                <div className="info-item-label">Nationalité</div>
                                <div className="info-item-value">{driver.nationality}</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-item-icon"><Calendar size={18} /></div>
                            <div>
                                <div className="info-item-label">Date de naissance</div>
                                <div className="info-item-value">{new Date(driver.birthDate).toLocaleDateString('fr-FR')}</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-item-icon"><MapPin size={18} /></div>
                            <div>
                                <div className="info-item-label">Écurie actuelle</div>
                                <div className="info-item-value">{currentTeam?.name ?? '—'}</div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-stats">
                        <div className="detail-stat-card">
                            <div className="stat-label" style={{ marginBottom: '6px' }}>Championnats</div>
                            <div className="detail-stat-value">{driver.championships}</div>
                        </div>
                        <div className="detail-stat-card">
                            <div className="stat-label" style={{ marginBottom: '6px' }}>Victoires</div>
                            <div className="detail-stat-value">{driver.wins}</div>
                        </div>
                        <div className="detail-stat-card">
                            <div className="stat-label" style={{ marginBottom: '6px' }}>Podiums</div>
                            <div className="detail-stat-value">{driver.podiums}</div>
                        </div>
                        <div className="detail-stat-card">
                            <div className="stat-label" style={{ marginBottom: '6px' }}>Points</div>
                            <div className="detail-stat-value">{driver.points}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '48px', marginTop: '8px' }}>

                <div>
                    <h2 className="section-title-large">Biographie</h2>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                        {driver.bio}
                    </p>
                </div>

                <div>
                    <h2 className="section-title-large">Historique par saison</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {historyYears.map(year => {
                            const teamId = driverHistory[year];
                            const teamDesc = teams.find(t => t.id === teamId);
                            return (
                                <div key={year} className="timeline-item">
                                    <span className="timeline-year">{year}</span>
                                    <span className="timeline-team">{teamDesc?.name ?? '—'}</span>
                                    <Link to={`/teams/${teamId}`} className="btn-secondary">
                                        Voir l'écurie
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DriverDetail;
