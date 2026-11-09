export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json({
    launched: false,
    name: "CurveX Lab",
    ticker: "CURVEX",
    chain: "launchlab",
    x_url: "https://x.com/curveXLab",
    site_url: "https://curvexlab.fun",
    launched_at: null,
    ca: null,
    buy_url: null,
    chart_url: null,
    explorer_url: null,
    bot_online: false
  });
}
