import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { teams } from '../data/database';

const Teams = () => {
    return (
        <div style={{ paddingBottom: '60px' }}>
            <div className="page-header">
                <h1 className="page-header-title">
                    <Shield size={30} color="var(--f1-red)" style={{ marginRight: '-4px' }}/>
                    Écuries
                </h1>
                <p className="page-header-sub">{teams.length} équipes en compétition</p>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                {teams.map(team => (
                    <Link to={`/teams/${team.id}`} key={team.id} className="team-card animate-fade-up">
                        <img src={team.logo} alt={team.name} className="team-logo" loading="lazy" />
                        <h3 className="team-name">{team.name}</h3>
                        <div className="team-country">
                            <span>📍</span> {team.country}
                        </div>
                        <div className="team-stats-row">
                            <div className="team-stat">
                                <span className="team-stat-value">{team.championships}</span>
                                <span className="team-stat-label">Titres</span>
                            </div>
                            <div className="team-stat">
                                <span className="team-stat-value">{team.wins}</span>
                                <span className="team-stat-label">Victoires</span>
                            </div>
                            <div className="team-stat">
                                <span className="team-stat-value">{team.podiums}</span>
                                <span className="team-stat-label">Podiums</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Teams;
