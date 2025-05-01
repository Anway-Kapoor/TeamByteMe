import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Home() {
  return (
    <div className="container">
      <div className="home">
        <header>
          <h1>Student Team Management</h1>
          <p>A modern platform to manage your team members efficiently. Add new members, view their details, and keep track of your entire team in one place.</p>
        </header>
        
        <div className="navigation">
          <Link to="/add" className="btn">Add New Member</Link>
          <Link to="/view" className="btn">View All Members</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

