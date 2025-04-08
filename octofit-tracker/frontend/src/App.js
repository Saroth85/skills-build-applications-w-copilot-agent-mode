import React from 'react';
import './App.css';
import logo from './octofitapp-small.png';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="logo">
                    <img src={logo} alt="Octofit Logo" />
                    <h1>Welcome to Octofit Tracker</h1>
                </div>
            </header>
            {/* ...existing content... */}
        </div>
    );
}

export default App;