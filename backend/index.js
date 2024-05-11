const connectToMongo = require('./db');
const express = require('express');

// Connect to MongoDB
connectToMongo();

// Create Express app and set port
const app = express();



const port = 5000;

// Middleware to parse request body as JSON
app.use(express.json());

// Routes

// Start the server
app.listen(port, () => {
    console.log(`I-NoteBook Is Listening at http://localhost:${port}`);
});
