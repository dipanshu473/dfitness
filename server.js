const express = require('express');
const cors = require('cors');
const path = require('path');

const connectDB = require('./db');
const routes = require('./routes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

/* Frontend Files */
app.use(express.static(path.join(__dirname)));

/* API Routes */
app.use('/api', routes);

/* Main Route */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

/* Port */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
