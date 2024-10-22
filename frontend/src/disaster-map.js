import React from 'react';
import './styles.css';

function DisasterMap() {
    return (
        <div className="container disaster-map-container">
            <h1 className="disaster-map-title">Disaster Map</h1>
            <div className="disaster-map-circle"></div>
            <footer className="footer">
                © journalctl, 2024-present.
            </footer>
        </div>
    );
}

export default DisasterMap;
