import axios from 'axios'

const API_URL = '/api/transactions/'
// Get user transactions
const getTransactions = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const addtransaction = async (transactionData) => {

  const response = await axios.post(API_URL , transactionData)

  return response.data
}

const transactionService = {
  getTransactions,
  addtransaction,
}


export default transactionService
