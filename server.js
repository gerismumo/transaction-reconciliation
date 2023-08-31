const express = require('express');
const dotenv = require('dotenv');
const { errorHandler } = require('./backend/middleware/errorMiddleware');
const connectDB = require('./backend/config/db');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/transactions', require('./backend/routes/transactionRoutes'));
app.use('/api/users', require('./backend/routes/userRoutes'));

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
