import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Clock, MapPin, ChevronRight, ExternalLink } from 'lucide-react';
import { fetchNextGP, fetchDriverStandings, fetchConstructorStandings, fetchLatestNews } from '../api/f1-api';

/* ── Countdown helper ─────────────────────────────────── */
function useCountdown(targetDate) {
    const calc = useCallback(() => {
        if (!targetDate) return null;
        const diff = new Date(targetDate) - new Date();
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            days: Math.floor(diff / 86400000),
            hours: Math.floor((diff % 86400000) / 3600000),
            minutes: Math.floor((diff % 3600000) / 60000),
            seconds: Math.floor((diff % 60000) / 1000),
        };
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(calc);
    useEffect(() => {
        const id = setInterval(() => setTimeLeft(calc()), 1000);
        return () => clearInterval(id);
    }, [calc]);
    return timeLeft;
}

/* ── Single countdown unit ────────────────────────────── */
const TimeUnit = ({ value, label }) => (
    <div className="time-unit">
        <span className="time-value">{String(value).padStart(2, '0')}</span>
        <span className="time-label">{label}</span>
    </div>
);

/* ── Main Component ───────────────────────────────────── */
const Home = () => {
    const [loading, setLoading] = useState(true);
    const [nextGP, setNextGP] = useState(null);
    const [drivers, setDrivers] = useState([]);
    const [constructors, setConstructors] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        const load = async () => {
            const [gp, dr, co, nw] = await Promise.allSettled([
                fetchNextGP(),
                fetchDriverStandings(),
                fetchConstructorStandings(),
                fetchLatestNews(),
            ]);
            setNextGP(gp.value ?? null);
            setDrivers((dr.value ?? []).slice(0, 10));
            setConstructors((co.value ?? []).slice(0, 10));
            setNews(nw.value ?? []);
            setLoading(false);
        };
        load();
    }, []);

    const raceDateTime = nextGP ? `${nextGP.date}T${nextGP.time ?? '14:00:00Z'}` : null;
    const countdown = useCountdown(raceDateTime);

    const top3 = drivers.slice(0, 3);
    const featured = news[0] ?? null;
    const rest = news.slice(1, 7);   // 6 items → 3-col grid (2 rows)

    if (loading) {
        return (
            <div className="page-loading">
                <div className="spinner" />
                <p>Chargement en temps réel…</p>
            </div>
        );
    }

    return (
        <div className="home-page">

            {/* ── Row 1 : GP widget + Top 3 ── */}
            <div className="home-top-row">

                {/* Next GP Card */}
                {nextGP && (
                    <div className="widget gp-widget">
                        <div className="widget-header">
                            <Clock size={18} /> Prochain Grand Prix
                        </div>
                        <div className="gp-name">
                            <MapPin size={16} /> Grand Prix de {nextGP.Circuit.Location.country}
                        </div>
                        <div className="gp-circuit">{nextGP.Circuit.circuitName}</div>
                        <div className="gp-date">
                            {new Date(nextGP.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                        </div>
                        {countdown && (
                            <div className="countdown">
                                <TimeUnit value={countdown.days} label="jours" />
                                <span className="countdown-sep">:</span>
                                <TimeUnit value={countdown.hours} label="heures" />
                                <span className="countdown-sep">:</span>
                                <TimeUnit value={countdown.minutes} label="min" />
                                <span className="countdown-sep">:</span>
                                <TimeUnit value={countdown.seconds} label="sec" />
                            </div>
                        )}
                        <div className="gp-round">Round {nextGP.round} / Saison {nextGP.season}</div>
                    </div>
                )}

                {/* Top 3 Drivers */}
                {top3.length > 0 && (
                    <div className="widget top3-widget">
                        <div className="widget-header">
                            <Trophy size={18} /> Top 3 Pilotes 2026
                        </div>
                        <div className="top3-grid">
                            {top3.map((entry, i) => {
                                const medal = ['🥇', '🥈', '🥉'][i];
                                return (
                                    <div key={entry.Driver.driverId} className={`top3-card pos-${i + 1}`}>
                                        <span className="top3-medal">{medal}</span>
                                        <div className="top3-name">
                                            {entry.Driver.givenName}<br />
                                            <strong>{entry.Driver.familyName}</strong>
                                        </div>
                                        <div className="top3-team">{entry.Constructors?.[0]?.name}</div>
                                        <div className="top3-pts">{entry.points} pts</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* ── Row 2 : Standings ── */}
            <div className="standings-row">
                {/* Driver standings */}
                {drivers.length > 0 && (
                    <div className="widget standings-widget">
                        <div className="widget-header">
                            <Trophy size={18} /> Championnat Pilotes
                        </div>
                        <table className="standings-table">
                            <thead>
                                <tr><th>#</th><th>Pilote</th><th>Écurie</th><th>Pts</th></tr>
                            </thead>
                            <tbody>
                                {drivers.map(e => (
                                    <tr key={e.Driver.driverId}>
                                        <td className="pos">{e.position}</td>
                                        <td><strong>{e.Driver.givenName.charAt(0)}. {e.Driver.familyName}</strong></td>
                                        <td className="team-col">{e.Constructors?.[0]?.name}</td>
                                        <td className="pts">{e.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Constructor standings */}
                {constructors.length > 0 && (
                    <div className="widget standings-widget">
                        <div className="widget-header">
                            <Trophy size={18} /> Championnat Constructeurs
                        </div>
                        <table className="standings-table">
                            <thead>
                                <tr><th>#</th><th>Équipe</th><th>Pts</th></tr>
                            </thead>
                            <tbody>
                                {constructors.map(e => (
                                    <tr key={e.Constructor.constructorId}>
                                        <td className="pos">{e.position}</td>
                                        <td><strong>{e.Constructor.name}</strong></td>
                                        <td className="pts">{e.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* ── Row 3 : Featured article ── */}
            {featured && (
                <div className="home-section">
                    <h2 className="section-title">À la une</h2>
                    <a href={featured.link} target="_blank" rel="noopener noreferrer" className="featured-article">
                        <div className="featured-image" style={{ backgroundImage: `url(${featured.image})` }} />
                        <div className="featured-body">
                            <span className="article-tag">{featured.category}</span>
                            <h3 className="featured-title">{featured.title}</h3>
                            <p className="featured-excerpt">{featured.excerpt}</p>
                            <span className="article-date">
                                {new Date(featured.date).toLocaleDateString('fr-FR')}
                            </span>
                        </div>
                    </a>
                </div>
            )}

            {/* ── Row 4 : News grid (3 cols) ── */}
            {rest.length > 0 && (
                <div className="home-section">
                    <h2 className="section-title">Dernières actus F1</h2>
                    <div className="news-grid-3col">
                        {rest.map(item => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="news-tile"
                            >
                                <div className="news-tile-img" style={{ backgroundImage: `url(${item.image})` }}>
                                    <div className="news-tile-overlay" />
                                    <div className="news-tile-content">
                                        <h4>{item.title}</h4>
                                        <span>{new Date(item.date).toLocaleDateString('fr-FR')}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* ── Row 5 : Quick links to internal DB ── */}
            <div className="home-section">
                <h2 className="section-title">Base de données</h2>
                <div className="quick-links">
                    <Link to="/drivers" className="quick-link-card">
                        <strong>Pilotes</strong>
                        <ChevronRight size={20} />
                    </Link>
                    <Link to="/teams" className="quick-link-card">
                        <strong>Écuries</strong>
                        <ChevronRight size={20} />
                    </Link>
                    <Link to="/seasons" className="quick-link-card">
                        <strong>Saisons</strong>
                        <ChevronRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
