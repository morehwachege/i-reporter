import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css"

export const Signup = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  // const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://irepoter-backend-production.up.railway.app/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
        // password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then(() => navigate('/login'));
          // navigate('/reports')
        } else{
          r.json().then((err) => alert(err.message));
        }
      })
      
      
  }

  return (
    <div className='signup'>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <p>It's quick and easy.</p>
        {/* <img src={require("../images/login3.jpeg")}/> */}
        <form className="form" onSubmit={handleSubmit} >
          <label htmlFor="name">User Name</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} name="name" id="name" placeholder="Username" />
          < label htmlFor="password">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
          {/* < label htmlFor="password">Password Confirmation</label>
          <input value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" placeholder="*******" id="password-confirmation" name="password" /> */}
          <div>
            <button className='signup-btn'>Get Started</button>
          </div>
        </form>
      </div>
    </div>
  )
}

