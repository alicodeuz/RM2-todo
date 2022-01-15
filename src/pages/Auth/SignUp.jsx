import React from 'react';
import { Link } from 'react-router-dom';
import microsoft from '../../assets/images/microsoft.png';
import { StyledSignUp } from './Auth.style';
// import {useHistory} from 'react-router-dom'

function SignUp() {
  // let history =useHistory();

  return (
    <StyledSignUp>
      <div className="signin">
        <div className='sign-in__header'>
          <img src={microsoft} alt="microsoft" />
          <h2>Sign up</h2>
        </div>
        <div className="sign-in__body">
          <div className='sign-in__input-wrapper'>
            {/* <label htmlFor="">Username/Email</label> */}
            <input type="text" name="username" placeholder='Username' />
          </div>
          <div className='sign-in__input-wrapper'>
            {/* <label htmlFor="">Username/Email</label> */}
            <input type="text" name="email" placeholder='Email' />
          </div>
          <div className='sign-in__input-wrapper'>
            {/* <label htmlFor="">Password</label> */}
            <input type="text" name="password" placeholder='Password' />
          </div>
        </div>
        <div className="sign-in__footer">
          <p>Have account? <Link to="/sign-in">Sign in now!</Link> </p>
        </div>
        <div className="signin__actions">
          <button>Sign up</button>
        </div>
      </div>
    </StyledSignUp>

  )
}

export default SignUp;