const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoDBUrl = process.env.MONGO_URI;
  const maxRetries = 5; // Maximum number of connection retries
  const retryInterval = 5000; // Retry interval in milliseconds (e.g., 5 seconds)
  let retryCount = 0;

  const connectWithRetry = async () => {
    try {
      const conn = await mongoose.connect(mongoDBUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
      console.error('MongoDB Connection Error:', error);

      if (retryCount < maxRetries) {
        retryCount++;
        console.log(`Retrying connection in ${retryInterval / 1000} seconds...`);
        setTimeout(connectWithRetry, retryInterval);
      } else {
        console.error('Max connection retries reached. Exiting...');
        process.exit(1);
      }
    }
  };

  // Call the function to initiate the connection with retry logic
  connectWithRetry();
};

module.exports = connectDB;
