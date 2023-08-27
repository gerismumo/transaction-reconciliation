import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../features/auth/authSlice'
import { gettransactions } from '../features/transactions/transactionSlice';

function Health() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { transactions, isError, message } = useSelector((state) => state.transactions);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/');
      return;
    }
    dispatch(gettransactions());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.branch === user.branch && transaction.coverage_type === 'Health'
  );

  return (
    <>
      <div className="health">
        <h2>Health Transactions </h2>
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
         
          {filteredTransactions.length > 0 ? (
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
          ) : (
              <p>No health insurance transactions yet</p>
          )}
          
        </table>
      </div>
    </>
  );
}

export default Health;
