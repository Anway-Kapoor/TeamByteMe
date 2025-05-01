import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Home() {
  return (
    <div className="container">
      <div className="home">
        <header className="home-header">
          <h1>Student Team Management</h1>
          <p className="home-description">A modern platform to manage your team members efficiently. Add new members, view their details, and keep track of your entire team in one place.</p>
        </header>
        
        <div className="home-navigation">
          <Link to="/add" className="btn btn-primary">Add New Member</Link>
          <Link to="/view" className="btn btn-secondary">View All Members</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

