import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // make sure to create this CSS file

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="homepage">
            <header className="header">
                <img src="/logo.png" alt="Lost & Found Logo" className="logo" />
                <h1>Campus Lost & Found</h1>
                <p>Find what’s lost. Return what’s found.</p>
            </header>

            <section className="highlights">
                <div className="highlight">
                    <h2>📦 500+ Items Returned</h2>
                    <p>Thanks to our active campus community.</p>
                </div>
                <div className="highlight">
                    <h2>🏆 Best Student Initiative</h2>
                    <p>Awarded by University in 2025</p>
                </div>
            </section>

            <div className="actions">
                <button onClick={() => navigate('/report')}>📢 Report Lost/Found</button>
                <button onClick={() => navigate('/view')}>🔍 View Reported Items</button>
            </div>

            <footer>
                <p>© 2025 Campus Lost & Found System</p>
            </footer>
        </div>
    );
};

export default HomePage;
