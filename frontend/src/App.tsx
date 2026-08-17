import React, { useEffect, useState } from 'react';

export default function App() {
  const [health, setHealth] = useState<string>('loading');

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((j) => setHealth(j.status))
      .catch(() => setHealth('offline'));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <h1>RiftCity V1 — Dashboard (Dev)</h1>
      <p>Server health: <strong>{health}</strong></p>
      <section style={{ marginTop: 20 }}>
        <h2>Quick dashboard</h2>
        <div>Character: PlayerOne</div>
        <div>Level: 1</div>
        <div>XP: 0</div>
        <div>Health: 100</div>
        <div>Energy: 100</div>
      </section>
    </div>
  );
}
