import React from 'react';
import './styles.css';

const RecentReportsPage = () => {
  return (
    <div className="container recent-reports-container">
      <header>
        <div className="logo">GeoWatch</div>
        <nav className="nav-buttons">
          <a href="index.html" className="nav-button">home</a>
          <a href="disaster-map.html" className="nav-button">disaster map</a>
          <a href="helpline.html" className="nav-button">helpline</a>
        </nav>
      </header>

      <h1 className="page-title">Recent Disaster Reports</h1>

      <div className="news-grid">
        <div className="news-card">
          <img src="https://i.ibb.co/WHYs3sD/Fishing-boat-wreckage-Ofunato-tsunami-city-Japan-March-11-2011.webp" alt="Earthquake in Japan" className="news-image" />
          <h2>Magnitude 6.2 Earthquake Strikes Japan's Coast</h2>
          <p className="news-snippet">A powerful earthquake has hit off the coast of Japan, triggering tsunami warnings...</p>
          <p className="news-source">Source: Global Disaster Watch</p>
          <p className="news-time">2 hours ago</p>
        </div>

        <div className="news-card">
          <img src="https://i.ibb.co/1dDV2ZC/maria-goes-91917.webp" alt="Hurricane approaching Florida" className="news-image" />
          <h2>Hurricane Maria Intensifies, Heading Towards Florida</h2>
          <p className="news-snippet">Hurricane Maria has strengthened to a Category 4 storm and is expected to make landfall...</p>
          <p className="news-source">Source: Weather Alert Network</p>
          <p className="news-time">5 hours ago</p>
        </div>

        <div className="news-card">
          <img src="https://i.ibb.co/kK7t7rD/istockphoto-1292455434-612x612.jpg" alt="Wildfire in California" className="news-image" />
          <h2>Massive Wildfire Spreads in Northern California</h2>
          <p className="news-snippet">A fast-moving wildfire has forced thousands to evacuate in Northern California...</p>
          <p className="news-source">Source: Emergency Response Team</p>
          <p className="news-time">1 day ago</p>
        </div>
      </div>

      <footer className="footer">
        © journalctl, 2024-present.
      </footer>
    </div>
  );
};

export default RecentReportsPage;