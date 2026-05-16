const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const db = require('./config/db');

// Routes
const authRoutes = require('./route/authRoutes');
const testRoutes = require('./route/testRoutes');
const storeRoutes = require('./route/storeRoutes');
const ratingRoutes =require('./route/ratingRoutes');
const adminRoutes =require('./route/adminRoutes');
const ownerRoutes =require('./route/ownerRoutes');
const userRoutes =require('./route/userRoutes');


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes Middleware
app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/owner', ownerRoutes);
app.use('/api/users', userRoutes);


// Default Route
app.get('/', (req, res) => {
  res.send('API Running Successfully');
});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});