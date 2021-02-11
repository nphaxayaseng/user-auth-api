const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// database setup
require('dotenv').config();
require('./config/db');

// --- MIDDLE WARE ---
app.use(express.json ());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`))