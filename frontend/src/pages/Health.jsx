import React from "react";
import {  useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {  reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import {useNavigate } from 'react-router-dom'
import { fetchTransactions } from "../features/transactions/transactionSlice";
function Health () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )
    const { transactions } = useSelector((state) => state.transactions);
    console.log(transactions);
    useEffect(() => {
      if (isError) {
        toast.error(message)
      }
  
      if (!user) {
        
        navigate('/');
      }
      dispatch(fetchTransactions());
      dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    return(
        <>
         {/* < Header /> */}
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
                {transactions.map((transaction) => (
                  <tr>
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
    )
}
 export default Health;