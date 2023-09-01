const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the "public" directory
  app.use(express.static(path.join(__dirname, 'public')));

  // Catch-all route for any other requests, serving the main HTML file
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
