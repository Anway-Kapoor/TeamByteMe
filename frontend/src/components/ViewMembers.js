import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style.css";

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api/members";
    axios.get(apiUrl)
      .then(res => setMembers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="page-header">
        <h2>All Team Members</h2>
        <div className="page-nav">
          <Link to="/" className="btn">Home</Link>
          <Link to="/add" className="btn">Add New Member</Link>
        </div>
      </div>
      
      <div className="cards">
        {members.length > 0 ? (
          members.map(member => (
            <div key={member._id} className="card">
              <img src={`${process.env.REACT_APP_API_URL?.replace('/api/members', '') || "http://localhost:5000"}/uploads/${member.image}`} alt={member.name} />
              <div className="card-content">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <Link to={`/member/${member._id}`} className="btn">View Details</Link>
              </div>
            </div>
          ))
        ) : (
          <p>No team members found. Add some members to get started!</p>
        )}
      </div>
    </div>
  );
}

export default ViewMembers;
