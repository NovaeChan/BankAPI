import React, { useEffect, useState } from 'react';
import { setUsername, setPassword, setToken, setLoggedIn } from '../reducers/login';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProfile, getLogin } from "../api/apiCalls"
import { setFirstName, setLastName } from '../reducers/user';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const email = useSelector(state => state.login.username)
    const password = useSelector(state => state.login.password)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await getLogin(email, password);

        if(response.status === 200){
            localStorage.setItem("token", response.body.token);
            const token = localStorage.getItem("token");
            const userData = await fetchProfile(token);
            if(userData){
                dispatch(setLoggedIn(true));
                dispatch(setToken(token));
                dispatch(setFirstName(userData.firstName));
                dispatch(setLastName(userData.lastName));
                navigate("/profilePage");
            }
        }
        if(response === "error"){
            return(
                alert("Identifiants erronés")
            )
        }
    }

    const handleRemember = (event) => {
        if(event.target.checked){
            localStorage.setItem("remember", event.target.checked)
        }
        else{
            localStorage.setItem("remember", event.target.checked)
        }
    }

    return (
        <main className="main bg-dark">
            {}
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="email" required onChange={(event) => dispatch(setUsername(event.target.value))}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name='password' required onChange={(event) => dispatch(setPassword(event.target.value))}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" name='remember-me' onChange={handleRemember}/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Login;