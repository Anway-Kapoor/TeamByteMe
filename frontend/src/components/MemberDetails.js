import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../style.css";

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="container">
      {member ? (
        <div className="member-details">
          <h2>{member.name}</h2>
          <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
          
          <div className="member-info">
            <strong>Role:</strong>
            <span>{member.role}</span>
          </div>
          
          <div className="member-info">
            <strong>Email:</strong>
            <span>{member.email}</span>
          </div>
          
          <Link to="/view" className="back-link">← Back to All Members</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MemberDetails;

