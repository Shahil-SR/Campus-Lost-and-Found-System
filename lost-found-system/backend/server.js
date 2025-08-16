const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

// ✅ Register routes BEFORE app.listen()
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

// ✅ Start server AFTER everything is set up
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
