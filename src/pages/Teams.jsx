import { Link } from 'react-router-dom';
import { teams } from '../data/database';

const Teams = () => {
    return (
        <div className="container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
            <h1 className="section-title">Écuries de Formule 1</h1>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>
                {teams.map(team => (
                    <Link to={`/teams/${team.id}`} key={team.id} className="team-card animate-fade-up">
                        <img src={team.logo} alt={team.name} className="team-logo" loading="lazy" />
                        <h3 className="team-name">{team.name}</h3>

                        <div className="team-country" style={{ marginBottom: '16px' }}>
                            Base: {team.country}
                        </div>

                        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{team.championships}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Titres</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{team.wins}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Victoires</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{team.podiums}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Podiums</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Teams;
