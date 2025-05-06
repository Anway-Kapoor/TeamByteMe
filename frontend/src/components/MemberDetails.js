import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../style.css";

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api/members";
    axios.get(`${apiUrl}/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="container">
      <div className="page-header">
        <h2>Member Details</h2>
        <div className="page-nav">
          <Link to="/" className="btn">Home</Link>
          <Link to="/view" className="btn">All Members</Link>
          <Link to="/add" className="btn">Add Member</Link>
        </div>
      </div>
      
      {member ? (
        <div className="member-details">
          <h2>{member.name}</h2>
          <img src={`${process.env.REACT_APP_API_URL?.replace('/api/members', '') || "http://localhost:5000"}/uploads/${member.image}`} alt={member.name} />
          
          <div className="member-info">
            <strong>Role:</strong>
            <span>{member.role}</span>
          </div>
          
          <div className="member-info">
            <strong>Email:</strong>
            <span>{member.email}</span>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MemberDetails;

