import React from 'react'

export default function SigUpForm() {
    return (
        <form className="login__page--form">
            <div className="login__page--form--label">Username:</div>
            <input type="text" placeholder="Enter your username...." />
            <div className="login__page--form--label">Password:</div>
            <input type="password" placeholder="Enter your password..." />
            <div className="login__page--form--label">Retype password:</div>
            <input type="password" placeholder="Retype your password..." />
            <button type="submit" className="btn--login">
                Create an account
            </button>
        </form>
    )
}
