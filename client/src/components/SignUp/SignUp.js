import React, {useState} from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { signUp } from '../../actions/jwtauth';

export const SignUp = () => {
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(signUp(authData));
  }



  const handleOnChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  }


  return (
    <div>
      <section className="Login_page">
        <div class="wrapper">
          <div class="title-text">
            <div class="title login">Sign Up</div>
          </div>
          <div class="form-container">
            <div class="form-inner">
              <form class="signUp" onSubmit={handleSubmit}>
                <div class="field">
                  <input type="text" placeholder="First Name" required name='firstName' onChange={handleOnChange} />
                </div>
                <div class="field">
                  <input type="text" placeholder="Last Name" required name='lastName' onChange={handleOnChange} />
                </div>
                <div class="field">
                  <input type="text" placeholder="Email Address" required name='email' onChange={handleOnChange} />
                </div>
                <div class="field">
                  <input type="password" placeholder="Password" required name='password' onChange={handleOnChange} />
                </div>
                <div>
                  <button className="SignUpBtn" type="submit">Sign Up</button>
                </div>
                <div class="login-link">
                  Already Have an account? <Link to="/login">Login now</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
