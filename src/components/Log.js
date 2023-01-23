import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import "./Log.css"

function Log({ user, setUser, setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // if(user.length > 0){
  //   navigate('/reports/')
  // }

  function handleSubmit(e) {
    e.preventDefault();
    // setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setLoggedIn(true)
          console.log(user)
          navigate('/reports')
        }
        );

      } else {
        alert("Invalid Username or Password!")

        navigate('/login')
      }
    })
  }
  return (
    <div className='log'>
      <div className='log-container'>
        <div className='blob1'>
          <img src={require("../images/login2.jpeg")} />
        </div>
        {/* <h2>Log In</h2> */}
        <div className='blob'>
          <form className="form" onSubmit={handleSubmit}>
            < label htmlFor="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username" required />
            < label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" required />
            <NavLink className='log-btn' to='/signup'>Don't have an accout? Register Here</NavLink>
            <button className="login-btn" type="submit">Log in</button>
            {/* <NavLink className='log-btn' to ='/signup'>Don't have an accout? Register Here</NavLink> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Log