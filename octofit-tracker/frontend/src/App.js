import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';
import logo from '../docs/octofitapp-small.png';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <div className="logo">
                        <img src={logo} alt="Octofit Logo" />
                        <h1>Welcome to Octofit Tracker</h1>
                    </div>
                </header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Octofit Tracker</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/activities">Activities</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/teams">Teams</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/users">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/workouts">Workouts</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container mt-4">
                    <Routes>
                        <Route path="/activities" element={<Activities />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/workouts" element={<Workouts />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
