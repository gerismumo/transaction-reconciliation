import React from "react";
import {  useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {  reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import {useNavigate } from 'react-router-dom'
function PrivateVTP () {
     const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )
  
    useEffect(() => {
      if (isError) {
        toast.error(message)
      }
  
      if (!user) {
        
        navigate('/');
      }
  
      dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])
    return(
        <>
         {/* < Header /> */}
        <div className="health">
            <h2>Private Third Party Transactions</h2>
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
                <tr>
                    <td>2023-08-26</td>
                    <td>P12345</td>
                    <td>John Doe</td>
                    <td>Check-up</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>2023-08-25</td>
                    <td>P67890</td>
                    <td>Jane Smith</td>
                    <td>Medication</td>
                    <td>$50</td>
                </tr>
                {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
        </>
    )
}
 export default PrivateVTP;