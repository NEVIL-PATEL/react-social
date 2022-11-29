import './register.css'

import React from 'react'

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Foriox</h3>
                <span className="loginDesc">Connect with friends and the world around you on Foriox.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" type="text" className="loginInput" />
                    <input placeholder="Email" type="email" className="loginInput" />
                    <input placeholder="password" type="password" className="loginInput" />
                    <input placeholder="password Again" type="password" className="loginInput" />
                    <button className="loginButton" >Sign Up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
