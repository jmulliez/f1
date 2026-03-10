import { useParams, Link, Navigate } from 'react-router-dom';
import { Flag, Trophy, Award, MapPin, Calendar, Activity } from 'lucide-react';
import { getDriverById, getDriverHistory, teams } from '../data/database';

const DriverDetail = () => {
    const { id } = useParams();
    const driver = getDriverById(id);

    if (!driver) {
        return <Navigate to="/drivers" replace />;
    }

    const currentTeam = teams.find(t => t.id === driver.currentTeamId);
    const driverHistory = getDriverHistory(driver.id);
    const historyYears = Object.keys(driverHistory).sort((a, b) => b.localeCompare(a)); // Newest first

    return (
        <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>

            <div className="detail-header animate-fade-up">
                <div className="detail-image">
                    <span className="driver-card-number" style={{ zIndex: 10, position: 'absolute', top: 20, right: 30, fontSize: '6rem', opacity: 0.2 }}>{driver.number}</span>
                    <img src={driver.image} alt={driver.name} style={{ position: 'relative', zIndex: 1 }} />
                </div>

                <div className="detail-info">
                    <div className="detail-subtitle">{driver.number} • {driver.nationality}</div>
                    <h1 className="detail-title">{driver.name} <strong>{driver.surname}</strong></h1>

                    <div role="list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Flag size={24} color="var(--f1-red)" />
                            <div>
                                <div className="stat-label">Nationalité</div>
                                <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>{driver.nationality}</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Calendar size={24} color="var(--f1-red)" />
                            <div>
                                <div className="stat-label">Date de Naissance</div>
                                <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>{new Date(driver.birthDate).toLocaleDateString('fr-FR')}</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <MapPin size={24} color="var(--f1-red)" />
                            <div>
                                <div className="stat-label">Écurie Actuelle</div>
                                <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>{currentTeam?.name}</div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-stats">
                        <div className="detail-stat-card">
                            <div className="stat-label">Championnats</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{driver.championships}</div>
                        </div>
                        <div className="detail-stat-card">
                            <div className="stat-label">Victoires</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{driver.wins}</div>
                        </div>
                        <div className="detail-stat-card">
                            <div className="stat-label">Podiums</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{driver.podiums}</div>
                        </div>
                        <div className="detail-stat-card">
                            <div className="stat-label">Points</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{driver.points}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', marginTop: '64px' }}>

                <div>
                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Biographie</h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                        {driver.bio}
                    </p>
                </div>

                <div>
                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Historique par Saison</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {historyYears.map(year => {
                            const teamId = driverHistory[year];
                            const teamDesc = teams.find(t => t.id === teamId);

                            return (
                                <div key={year} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', backgroundColor: 'var(--f1-dark-gray)', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div>
                                        <div style={{ color: 'var(--f1-red)', fontWeight: 800, fontSize: '1.25rem' }}>{year}</div>
                                        <div style={{ fontSize: '1.125rem', fontWeight: 600 }}>Écurie: {teamDesc?.name}</div>
                                    </div>
                                    <Link to={`/teams/${teamId}`} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                                        Voir l'écurie
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DriverDetail;
