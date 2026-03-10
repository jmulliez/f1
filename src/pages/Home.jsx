import { Link } from 'react-router-dom';
import { ChevronRight, Trophy, Users, Calendar } from 'lucide-react';
import { drivers, teams } from '../data/database';

const Home = () => {
    const popularDrivers = drivers.slice(0, 3);
    const topTeams = teams.slice(0, 3);

    return (
        <div>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-tag">Saison 2024-2026</span>
                        <h1>L'expérience ultime de la Formule 1</h1>
                        <p>
                            Plongez dans l'univers de la catégorie reine du sport automobile.
                            Découvrez les statistiques, l'histoire et les palmarès de vos pilotes
                            et écuries favoris à travers les récentes saisons.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <Link to="/drivers" className="btn-primary">
                                Découvrir les pilotes <ChevronRight size={20} />
                            </Link>
                            <Link to="/seasons" className="btn-primary" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                                Explorer les saisons
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container" style={{ padding: '80px 24px' }}>
                <h2 className="section-title">Pilotes Principaux</h2>
                <div className="grid">
                    {popularDrivers.map(driver => (
                        <Link to={`/drivers/${driver.id}`} key={driver.id} className="driver-card">
                            <div className="driver-card-image-wrap">
                                <span className="driver-card-number">{driver.number}</span>
                                <img src={driver.image} alt={`${driver.name} ${driver.surname}`} loading="lazy" />
                            </div>
                            <div className="driver-card-content">
                                <div className="driver-team">{teams.find(t => t.id === driver.currentTeamId)?.name}</div>
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
                    ))}
                </div>
            </div>

            <div className="container" style={{ padding: '0 24px 80px' }}>
                <h2 className="section-title">Écuries Légendaires</h2>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>
                    {topTeams.map(team => (
                        <Link to={`/teams/${team.id}`} key={team.id} className="team-card">
                            <img src={team.logo} alt={team.name} className="team-logo" loading="lazy" />
                            <h3 className="team-name">{team.name}</h3>
                            <div className="team-country"><Trophy size={16} /> {team.championships} Titres Constructeurs</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
