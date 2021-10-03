import md5 from 'md5'
import React, { useState } from 'react'

export default function LoginForm(props) {
    const [login,setLogin] = useState({
        username: '',
        password: ''
    })
    const handleChangUsername = (e) => {
        setLogin({
            password: login.password,
            username : e.target.value
        })
    }
    const handleChangPassword = (e) => {
        setLogin({
            username: login.username,
            password: e.target.value
        })
    }
    const handleSubmitLogin = (e) =>{
        e.preventDefault();

        props.handleSubmitLogin(login);
    
    }
    return (
        <form className="login__page--form" onSubmit={handleSubmitLogin}>
            <div className="login__page--form--label">Username:</div>
            <input type="text" placeholder="Enter your username...." value={login.username} onChange={handleChangUsername}/>
            <div className="login__page--form--label">Password:</div>
            <input type="password" placeholder="Enter your password..." value={login.password} onChange={handleChangPassword}/>
            <button type="submit" className="btn--login">
            {props.isLoading ? <i className="fas fa-spinner loading--login"></i> : ''} Login
            </button>
        </form>
    )
}
