const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Connect to MongoDB first, then start server
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
})
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    
    app.use('/api/tasks', taskRoutes);

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err.message);
    process.exit(1);
  });
