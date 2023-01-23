import React, {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import {useRef} from "react";
import { FaBars, FaTimes} from "react-icons/fa";
function Navbar({user, setUser}) {
   const navRef = useRef();
   const [userNavState, setUserNavState] = useState("Login");
   useEffect(() => {
    if(user.username){
      setUserNavState(user.username)
    }else{
      setUserNavState("Login")
    }
     
   }, [setUser])
   
   const showNavbar= ()=>{
    navRef.current.classList.toggle ("responsive_nav")
   }
  return (
<header className='navbar'>
  <nav>
         <NavLink to ='/' className="navitem"> Home </NavLink>
         <NavLink to ='/about' className="navitem"> About </NavLink>
         <NavLink to ='/investigations' className="navitem"> Investigations </NavLink>
        <NavLink to ='/login' className="navitem" style={{color: "brown"}}> {userNavState} </NavLink>
        <NavLink to ='/admin' className="navitem"> Admin </NavLink>
        <NavLink to ='/contact' className="navitem"> ContactUs </NavLink>

  <button className='nav-btn nav-close-btn' onClick={showNavbar}>
    <FaTimes/>
  </button>
  </nav>
  <button className='nav-btn' onClick={showNavbar}>
    <FaBars />
  </button>
</header>
  )
}
export default Navbar