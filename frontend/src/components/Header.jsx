import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
// import { gettransactions } from '../features/transactions/transactionSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  // const { transactions, isError, message } = useSelector(
  //   (state) => state.transactions
  // );

  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   }

  //   // dispatch(gettransactions());
  //   return () => {
  //     dispatch(reset());
  //   };
  // }, [user, navigate, isError, message, dispatch]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <>
      <div className='header'>
        <nav>
          <div className='logo'>
            <h2>Insurance</h2>
          </div>
          <div className='links'>
            {user && (
              <div className='middle-links'>
                <ul>
                  <li>
                    <Link to='/health'>Health</Link>
                  </li>
                  <li>
                    <Link to='/property'>Property</Link>
                  </li>
                  <li>
                    <Link to='/privatevc'>PrivateVehicle/Comprehensive</Link>
                  </li>
                  <li>
                    <Link to='/privatevtp'>PrivateVehicle/Third Party</Link>
                  </li>
                  <li>
                    <Link to='/commercialvc'>Commercial Vehicle/ Comprehensive</Link>
                  </li>
                  <li>
                    <Link to='/commercialvtp'>Commercial Vehicle/third Party</Link>
                  </li>
                  <li>
                    <Link to='/register'>New Client</Link>
                  </li>
                </ul>
              </div>
            )}

            <div className='auth-links'>
              <ul>
                {user ? (
                  <>
                    <li>
                      <button style={{ cursor: 'pointer'}} onClick={onLogout}>Logout</button>
                    </li>
                  </>
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
