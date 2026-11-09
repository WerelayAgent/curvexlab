export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json({
    launched: true,
    name: "CurveX Lab",
    ticker: "CURVEXLAB",
    chain: "pump.fun",
    x_url: "https://x.com/curveXLab",
    site_url: "https://curvexlab.fun",
    launched_at: "2026-11-10T00:23:00.000Z",
    ca: "Ez5QEu77S67dkBm9qDvbGZASjqAgcpFjUeVVMPeLpump",
    buy_url: "https://pump.fun/coin/Ez5QEu77S67dkBm9qDvbGZASjqAgcpFjUeVVMPeLpump",
    chart_url: "https://dexscreener.com/solana/Ez5QEu77S67dkBm9qDvbGZASjqAgcpFjUeVVMPeLpump",
    explorer_url: "https://solscan.io/token/Ez5QEu77S67dkBm9qDvbGZASjqAgcpFjUeVVMPeLpump",
    bot_online: false
  });
}
