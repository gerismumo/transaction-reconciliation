import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    policy_number: '',
    id_number: '',
    annual_premium: '',
    branch: '',
    coverage_type: '',
    password: '',
    password2: '',
  });

  const { name, email, policy_number, id_number, annual_premium, branch, coverage_type, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const branches = ['Select a branch', 'Mombasa', 'Nairobi'];
  const coverageTypes = [
    'Select coverage type',
    'Health',
    'Property',
    'PrivateVehicle/Comprehensive',
    'PrivateVehicle/Third Party',
    'CommercialVehicle/Comprehensive',
    'CommercialVehicle/third Party',
  ];
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
        navigate('/health');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password,
        policy_number,
        id_number,
        annual_premium,
        branch,
        coverage_type,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='registration-form'>
      <section className='heading' style={{ color: '#fff' }}>
        <h1>
          <FaUser /> Register
        </h1>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          
          <div className='form-group'>
            <label>Select Branch:</label>
            <select
              className='form-control'
              name='branch'
              value={branch}
              onChange={onChange}
            >
              {branches.map((branchOption) => (
                <option
                  key={branchOption}
                  value={branchOption}
                >
                  {branchOption}
                </option>
              ))}
            </select>
          </div>
  
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter Name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    value={email}
                    placeholder='Enter Email'
                    onChange={onChange}
                  />
          </div>
          {user ? (
              <>
                <div className='form-group'>
                <input
                      type='text'
                      className='form-control'
                      id='policy_number'
                      name='policy_number'
                      value={policy_number}
                      placeholder='Enter Policy Number'
                      onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input
                      type='number'
                      className='form-control'
                      id='id_number'
                      name='id_number'
                      value={id_number}
                      placeholder='Enter ID Number'
                      onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                      <label>Select Coverage Type:</label>
                      <select
                        className='form-control'
                        name='coverage_type'
                        value={coverage_type}
                        onChange={onChange}
                      >
                        {coverageTypes.map((coverageTypeOption) => (
                          <option
                            key={coverageTypeOption}
                            value={coverageTypeOption}
                          >
                            {coverageTypeOption}
                          </option>
                        ))}
                      </select>
                </div>
                <div className='form-group'>
                      <input
                        type='number'
                        className='form-control'
                        id='annual_premium'
                        name='annual_premium'
                        value={annual_premium}
                        placeholder='Enter Annual Premium'
                        onChange={onChange}
                      />
                </div> 
              </>
           ) : (
            <>
            <div className='form-group'>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    name='password'
                    value={password}
                    placeholder='Enter password'
                    onChange={onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className='form-control'
                    id='password2'
                    name='password2'
                    value={password2}
                    placeholder='Confirm password'
                    onChange={onChange}
                  />
                </div>
                </>
          )}
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </div>
        </form>
      </section>
    </div>
  );
}

export default Register;



  
  
  