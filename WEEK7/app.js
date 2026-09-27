const express = require("express");

const app = express();

// Set EJS as template engine
app.set("view engine", "ejs");

// To read form data
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
    res.render("index", {
        name: "Kusuma",
        course: "Artificial Intelligence and Machine Learning",
        college: "SVECW"
    });
});

// Form page
app.get("/form", (req, res) => {
    res.render("form", {
        error: "",
        name: "",
        email: "",
        age: ""
    });
});

// Form submission
app.post("/submit", (req, res) => {

    const { name, email, age } = req.body;

    // Validation
    if (!name || !email || !age) {
        return res.render("form", {
            error: "All fields are required!",
            name: name,
            email: email,
            age: age
        });
    }

    if (age < 18) {
        return res.render("form", {
            error: "Age must be 18 or above!",
            name: name,
            email: email,
            age: age
        });
    }

    res.send(`
        <h1>Registration Successful</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Age: ${age}</p>
    `);
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});