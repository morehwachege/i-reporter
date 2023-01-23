import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Admin.css"

export const Admin = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const nav =useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
       <div className='admin-login'>
        <div className='admin-container'>
        <div className='blob2'>
      <img src={require("../images/login.jpeg")}/>
      </div>
       <form className= "admin-form" onSubmit={handleSubmit}>
        < label htmlFor= "admin">Admin</label>
        <input value={email} onChange ={(e)=> setEmail(e.target.value)} type= "email" placeholder= "admin_username" id = "email" name = "email"/>
        < label htmlFor= "password">Password</label>
        <input value={pass} onChange ={(e)=> setPass(e.target.value)} type= "password" placeholder= "*******" id = "password" name = "password"/>
       <button className='admin-btn' type= "submit" onClick={()=>{nav("/reports")}}>Log In</button>
       </form>
       </div>
      </div>
    )
}