const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const memberRoutes = require("./routes/members");
const path = require("path");
require('dotenv').config();

const app = express();

// Configure CORS for production
app.use(cors({
  origin: process.env.FRONTEND_URL || "https://frontend-six-hazel-40.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/members", memberRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// For Vercel serverless functions
module.exports = app;
