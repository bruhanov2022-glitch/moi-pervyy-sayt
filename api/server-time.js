
export default function handler(req, res) {
  const now = new Date();
  const serverTime = now.toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });
  res.status(200).json({ time: serverTime });
}
