export default async function handler(req, res) {
    const resp = await fetch(
        'https://holfuy.com/api/measurements/latest/?s=1589&m=JSON&tu=C&su=m/s'
    );
    const data = await resp.json();
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');
    res.json(data);
}
