import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import "./Topbar.css"

function Topbar() {
  return (
    <div className='topbar-container'>
        <div className='topbar-header'>
            <h1>THE REPORTER</h1>
        </div>
        <div >
           <ul className='topbar-icons'>
            <li><FaFacebook/></li>
            <li><FaTwitter/></li>
            <li><FaInstagram/></li>
           </ul>
        </div>
    </div>
  )
}

export default Topbar