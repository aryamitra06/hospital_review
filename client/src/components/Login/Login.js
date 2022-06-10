import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useDispatch } from 'react-redux';
import { signIn } from "../../actions/jwtauth";
export const Login = () => {
    const dispatch = useDispatch();
    const [authData, setAuthData] = useState({ email: '', password: '' });
    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(signIn(authData));
    }
    const handleOnChange = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <section className="Login_page">
                <div class="wrapper">
                    <div class="title-text">
                        <div class="title login">Login</div>
                    </div>
                    <div class="form-container">
                        <div class="form-inner">
                            <form class="login" onSubmit={handleSubmit}>
                                <div class="field">
                                    <input type="text" placeholder="Email Address" name='email' required onChange={handleOnChange} />
                                </div>
                                <div class="field">
                                    <input type="password" placeholder="Password" name='password' required onChange={handleOnChange} />
                                </div>
                                <div>
                                    <button className="LoginBtn" type="submit">Login</button>
                                </div>
                                <div class="signup-link">
                                    Not a member? <Link to="/signup">Signup now</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
