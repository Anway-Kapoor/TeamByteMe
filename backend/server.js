const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const memberRoutes = require("./routes/members");
const path = require("path");
require('dotenv').config();

const app = express();

// Configure CORS for production
const allowedOrigins = [
  process.env.FRONTEND_URL || "https://frontend-six-hazel-40.vercel.app",
  "https://frontend-bsiqzc69r-anways-projects-a2c4007e.vercel.app",
  "https://frontend-2v0i3v7qc-anways-projects-a2c4007e.vercel.app",
  "https://frontend-ebon-seven-20.vercel.app"
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
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
