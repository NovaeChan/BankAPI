import React, { useState } from 'react';
import { loginPending, loginSuccess, loginError, loginRemember } from '../reducers/login';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/apiCalls';



function Login() {
    const { isLoading, error, isRemember } = useSelector((state) => state.login)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget
        setCredentials({
            ...credentials,
            [name] : value
        })
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await login(credentials)
            if(response != "error"){
                const token = localStorage.getItem("token")
                console.log(token);
                if(userProfile !== "Not found"){
                    dispatch(loginSuccess());
                    navigate('./profilePage/Profile')
                }
            }
        }catch(error){
           console.error(error)
           dispatch(loginError(error.response.data.message)) 
        }
        
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {error && <alert>{error}</alert>}
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="email" onChange={handleChange}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name='password' onChange={handleChange}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" name='remember-me' defaultChecked={isRemember} onChange={() => dispatch(loginRemember(!isRemember))}/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    <button className="sign-in-button">Sign In</button>
                    {isLoading && (
                        <div className="loading">
                            <span>Loading...</span>
                        </div>
                    )}
                </form>
            </section>
        </main>
    );
};

export default Login;