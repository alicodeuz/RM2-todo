import React from 'react';
import { Link } from 'react-router-dom';
import microsoft from '../../assets/images/microsoft.png';
import { StyledSignIn } from './Auth.style';
// import {useHistory} from 'react-router-dom'

function SignIn() {
  // let history =useHistory();

  return (
    <StyledSignIn>
      <div className="signin">
        <div className='sign-in__header'>
          <img src={microsoft} alt="microsoft" />
          <h2>Sign in</h2>
        </div>
        <div className="sign-in__body">
          <div className='sign-in__input-wrapper'>
            {/* <label htmlFor="">Username/Email</label> */}
            <input type="text" name="identifier" placeholder='Email' />
          </div>
          <div className='sign-in__input-wrapper'>
            {/* <label htmlFor="">Password</label> */}
            <input type="text" name="password" placeholder='Password' />
          </div>
        </div>
        <div className="sign-in__footer">
          <p>No account? <Link to="/sign-up">Create one!</Link> </p>
        </div>
        <div className="signin__actions">
          <button>Sign in</button>
        </div>
      </div>
    </StyledSignIn>

  )
}

export default SignIn;