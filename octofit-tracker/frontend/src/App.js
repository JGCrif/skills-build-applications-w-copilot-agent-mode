
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <div className="App bg-light">
        {/* Bootstrap Navigation with react-router-dom */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">OctoFit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={
              <>
                <h1 className="display-4 mb-4 text-primary">Welcome to OctoFit Tracker</h1>
                <p className="lead">Track your fitness activities, join teams, and compete on the leaderboard!</p>
                <div className="row mb-4">
                  <div className="col-md-6 mx-auto">
                    <div className="card shadow">
                      <div className="card-body">
                        <h5 className="card-title">Get Started</h5>
                        <p className="card-text">Sign up, log your activities, and join your favorite superhero team!</p>
                        <button className="btn btn-primary" onClick={() => setShowModal(true)}>Show Info Modal</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            } />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>

          {/* Bootstrap Modal Example */}
          <div className={`modal fade${showModal ? ' show d-block' : ''}`} tabIndex="-1" role="dialog" style={{background: showModal ? 'rgba(0,0,0,0.5)' : 'none'}}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Welcome to OctoFit Tracker!</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p>This app uses Bootstrap for a modern, responsive UI. Explore the features and join a team!</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
