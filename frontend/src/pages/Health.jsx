import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { fetchTransactions } from '../features/transactions/transactionSlice';

function Health() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { transactions } = useSelector((state) => state.transactions);

  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!user) {
      navigate('/');
      return;
    }
    if (!user || !user.branch) {
      console.log("User or user's branch is undefined");
      return;
    }
    
    console.log(transactions);
console.log(user);
    dispatch(fetchTransactions())
      .then(() => {
        const filtered = transactions.filter(
          (transaction) =>
            transaction.branch === user.branch && transaction.coverage_type === 'Health'
        );
        setFilteredTransactions(filtered);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch(reset());
      });
  }, [user, isError, message, navigate, dispatch, transactions]);

  if (!user || isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="health">
        <h2>Health Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>Date of payment</th>
              <th>Policy Number</th>
              <th>Client’s name</th>
              <th>Description</th>
              <th>Amount Paid</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.date_of_payment}</td>
                <td>{transaction.policy_number}</td>
                <td>{transaction.client_name}</td>
                <td>{transaction.description}</td>
                <td>Ksh {transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Health;
