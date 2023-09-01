const path = require('path');
const express = require('express');
const colors = require('colors');
const cookieParser = require("cookie-parser");
const http = require("http");
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
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use('/api/users', require('./routes/userRoutes'));


// Serve frontend
if (process.env.NODE_ENV === 'production') {
  
  app.get('/', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
