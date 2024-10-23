import React from 'react';
import './styles.css';


function App() {
    return (
        <div id="root">
            <div className="container">
                <header>
                    <div className="logo">GeoWatch</div>
                    <nav className="nav-buttons">
                        <a href="disaster-map.html" className="nav-button">disaster map</a>
                        <a href="helpline.html" className="nav-button">helpline</a>
                        <a href="recent-reports.html" className="nav-button">recent reports</a>
                    </nav>
                </header>

                <div className="search-container">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search a location or enter coordinates"
                    />
                    <div className="search-icon">🔍</div>
                </div>

                <footer className="footer">
                    © journalctl, 2024-present.
                </footer>
            </div>
        </div>
    );
}

export default App;
