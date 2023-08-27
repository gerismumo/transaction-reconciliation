import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { gettransactions } from '../features/transactions/transactionSlice';

function  CommercialVC() {
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
      transaction.branch === user.branch && transaction.coverage_type === 'CommercialVehicle/Comprehensive'
  );

    return(
        <>
        {/* < Header /> */} 
        <div className="health">
            <h2>Commercial Vehicle Comprehensive Transactions</h2>
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
              <p>No Commercial Vehicle Comprehensive insurance transactions yet</p>
          )}
          
          </table>
        </div>
        </>
    )
}
 export default CommercialVC;