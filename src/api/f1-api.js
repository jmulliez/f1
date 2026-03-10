// API Base URLs
const JOLPICA_BASE = 'https://api.jolpi.ca/ergast/f1';
// Using Motorsport.com french RSS feed for F1 news, converted to JSON
const NEWS_RSS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://fr.motorsport.com/rss/f1/news/';

/**
 * Fetches the next upcoming Grand Prix from the current season schedule.
 */
export const fetchNextGP = async () => {
    try {
        const response = await fetch(`${JOLPICA_BASE}/current.json`);
        const data = await response.json();
        const races = data.MRData.RaceTable.Races;
        
        const now = new Date();
        
        // Find the first race whose date is in the future
        const nextRace = races.find(race => {
            const raceDate = new Date(`${race.date}T${race.time || '00:00:00Z'}`);
            return raceDate > now;
        });

        // If the season is over, return the last race or a generic message
        if (!nextRace && races.length > 0) {
            return races[races.length - 1]; 
        }

        return nextRace;
    } catch (error) {
        console.error('Error fetching next GP:', error);
        return null;
    }
};

/**
 * Fetches the current driver standings.
 */
export const fetchDriverStandings = async () => {
    try {
        const response = await fetch(`${JOLPICA_BASE}/current/driverStandings.json`);
        const data = await response.json();
        return data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];
    } catch (error) {
        console.error('Error fetching driver standings:', error);
        return [];
    }
};

/**
 * Fetches the current constructor standings.
 */
export const fetchConstructorStandings = async () => {
    try {
        const response = await fetch(`${JOLPICA_BASE}/current/constructorStandings.json`);
        const data = await response.json();
        return data.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings || [];
    } catch (error) {
        console.error('Error fetching constructor standings:', error);
        return [];
    }
};

/**
 * Fetches the latest F1 news from Motorsport.com RSS feed.
 */
export const fetchLatestNews = async () => {
    try {
        const response = await fetch(NEWS_RSS_URL);
        const data = await response.json();
        
        if (data.status === 'ok') {
            // Transform the RSS items to match our previous mock data structure
            return data.items.map((item, index) => {
                // Determine image: sometimes it's in enclosure, sometimes thumbnail
                let imageUrl = 'https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/fom-website/2023/Red%20Bull/Miami/Sunday/GettyImages-1488102377'; // Fallback
                if (item.enclosure && item.enclosure.link) {
                    imageUrl = item.enclosure.link;
                } else if (item.thumbnail) {
                    imageUrl = item.thumbnail;
                }

                return {
                    id: item.guid || `news-${index}`,
                    title: item.title,
                    date: item.pubDate,
                    category: 'F1', // Motorsport.com F1 feed is specifically F1
                    excerpt: item.description.replace(/<[^>]+>/g, '').substring(0, 150) + '...', // Strip HTML and truncate
                    content: item.content || item.description,
                    link: item.link, 
                    image: imageUrl,
                    featured: index === 0 // Make the first news item featured
                };
            });
        }
        return [];
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};
