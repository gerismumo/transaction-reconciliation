const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
  {
    
    date_of_payment: {
      type: String
    },
    policy_number: {
      type: String,
      ref: 'User',
    },
    client_name: {
      type: String,
      ref: 'User',
    },
    branch: {
      type: String,
      ref: 'User',
    },
    description: {
      type: String
    },
    amount: {
      type: Number
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Transaction', transactionSchema);
