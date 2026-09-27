const express = require("express");
const mongoose = require("mongoose");

const studentRoutes = require("./routes/studentRoutes");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// MongoDB connection
const mongoURI = "mongodb+srv://chinnikusuma973_db_user:h4ZgyrE8nuhZNdZH@cluster0.fwz2iek.mongodb.net/?appName=Cluster0";

mongoose.connect(mongoURI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error);
    });

// Home route
app.get("/", (req, res) => {
    res.send("Week 9 MongoDB CRUD API");
});

// Student routes
app.use("/students", studentRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
