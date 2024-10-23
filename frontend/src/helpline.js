import React from 'react';
import './styles.css';

const HelplinePage = () => {
  return (
    <div className="container helpline-container">
      <header>
        <div className="logo">GeoWatch</div>
        <nav className="nav-buttons">
          <a href="index.html" className="nav-button">home</a>
          <a href="disaster-map.html" className="nav-button">disaster map</a>
          <a href="recent-reports.html" className="nav-button">recent reports</a>
        </nav>
      </header>
      
      <h1 className="page-title">Emergency Helpline Numbers</h1>
      
      <div className="helpline-grid">
        <div className="helpline-card">
          <h2>General Emergency</h2>
          <p className="phone-number">911</p>
          <p>For immediate life-threatening emergencies</p>
        </div>
        
        <div className="helpline-card">
          <h2>Medical Emergency</h2>
          <p className="phone-number">1-800-123-4567</p>
          <p>For urgent medical assistance</p>
        </div>
        
        <div className="helpline-card">
          <h2>Fire Department</h2>
          <p className="phone-number">1-800-555-3434</p>
          <p>For fire-related emergencies</p>
        </div>
        
        <div className="helpline-card">
          <h2>Poison Control</h2>
          <p className="phone-number">1-800-222-1222</p>
          <p>For exposure to toxic substances</p>
        </div>
      </div>
      
      <footer className="footer">
        © journalctl, 2024-present.
      </footer>
    </div>
  );
};

export default HelplinePage;