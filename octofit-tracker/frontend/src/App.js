
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App bg-light">
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">OctoFit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#users">Users</a></li>
              <li className="nav-item"><a className="nav-link" href="#teams">Teams</a></li>
              <li className="nav-item"><a className="nav-link" href="#activities">Activities</a></li>
              <li className="nav-item"><a className="nav-link" href="#leaderboard">Leaderboard</a></li>
              <li className="nav-item"><a className="nav-link" href="#workouts">Workouts</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Bootstrap Heading */}
      <div className="container">
        <h1 className="display-4 mb-4 text-primary">Welcome to OctoFit Tracker</h1>
        <p className="lead">Track your fitness activities, join teams, and compete on the leaderboard!</p>

        {/* Bootstrap Card */}
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

        {/* Bootstrap Table Example */}
        <h2 className="mb-3">Sample Activities</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>User</th>
              <th>Activity</th>
              <th>Duration (min)</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Iron Man</td>
              <td>Running</td>
              <td>30</td>
              <td>Marvel</td>
            </tr>
            <tr>
              <td>Batman</td>
              <td>Cycling</td>
              <td>45</td>
              <td>DC</td>
            </tr>
            <tr>
              <td>Superman</td>
              <td>Swimming</td>
              <td>60</td>
              <td>DC</td>
            </tr>
          </tbody>
        </table>

        {/* Bootstrap Link */}
        <a className="btn btn-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>

        {/* Bootstrap Form Example */}
        <h2 className="mb-3">Log Activity</h2>
        <form className="mb-4">
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">User Name</label>
            <input type="text" className="form-control" id="userName" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="activityType" className="form-label">Activity Type</label>
            <select className="form-select" id="activityType">
              <option>Running</option>
              <option>Cycling</option>
              <option>Swimming</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="duration" className="form-label">Duration (min)</label>
            <input type="number" className="form-control" id="duration" placeholder="Enter duration" />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>

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
  );
}

export default App;
