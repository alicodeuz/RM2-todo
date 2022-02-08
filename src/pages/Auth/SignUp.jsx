import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from '../../utils/axios';
import microsoft from '../../assets/images/microsoft.png';
import { StyledSignUp } from './Auth.style';
import { signUpAction } from '../../store/auth/actions';
// import {useHistory} from 'react-router-dom'

function SignUp() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = async () => {
    try {
      const { email, password, username } = user;
      if (email && password && username) {
        setLoading(true);
        const a = await signUpAction(user);
        console.log(a)
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You have successfully registered',
          footer: `<a href="/">Home page</a>`
        });
        setLoading(false);

      } else {
        Swal.fire({
          icon: 'error',
          text: 'Please fill all required fields',
        });
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: error.response?.data?.error?.message || 'Something went wrong',
      });
      setLoading(false);
    }
  }
  const { password, username, email } = user;

  return (
    <StyledSignUp>
      <div className="signin">
        <div className='sign-in__header'>
          <img src={microsoft} alt="microsoft" onClick={() => navigate('/')} />
          <h2>Sign up</h2>
        </div>
        <div className="sign-in__body">
          <div className='sign-in__input-wrapper'>
            {/* <label htmlFor="">Username/Email</label> */}
            <input
              type="text"
              name="username"
              value={username}
              placeholder='Username'
              onChange={handleInputChange}
            />
          </div>
          <div className='sign-in__input-wrapper'>
            {/* <label htmlFor="">Username/Email</label> */}
            <input
              type="text"
              name="email"
              value={email}
              placeholder='Email'
              onChange={handleInputChange}
            />
          </div>
          <div className='sign-in__input-wrapper'>
            {/* <label htmlFor="">Password</label> */}
            <input
              type="text"
              name="password"
              value={password}
              placeholder='Password'
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="sign-in__footer">
          <p>Have account? <Link to="/sign-in">Sign in now!</Link> </p>
        </div>
        <div className="signin__actions">
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Creating...' : 'Sign up'}
          </button>
        </div>
      </div>
    </StyledSignUp>

  )
}

export default SignUp;