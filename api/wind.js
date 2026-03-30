module.exports = async function handler(req, res) {
    try {
        const resp = await fetch(
            'https://api.holfuy.com/live/?s=1589&m=JSON&tu=C&su=m/s'
        );
        if (!resp.ok) {
            res.status(502).json({ error: 'Holfuy API error', status: resp.status });
            return;
        }
        const data = await resp.json();
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');
        res.json(data);
    } catch (e) {
        res.status(500).json({ error: String(e) });
    }
};
