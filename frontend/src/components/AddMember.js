import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../style.css";

function AddMember() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("email", email);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/members", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/view");
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <h2>Add New Team Member</h2>
        <div className="page-nav">
          <Link to="/" className="btn">Home</Link>
          <Link to="/view" className="btn">View All Members</Link>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Profile Image</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Adding..." : "Add Member"}
        </button>
      </form>
    </div>
  );
}

export default AddMember;
