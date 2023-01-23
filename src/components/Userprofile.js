import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserDetails from './userDetails'
import "./Userprofile.css"

function Userprofile({ reports, onDelete, userlocation, setUser, user }) {
  console.log(user)
  const navigate = useNavigate();

  useEffect(() => {
    // check current user session cookie
    fetch("https://irepoter-backend-production.up.railway.app/me").then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user), console.log(user))
      }
      else{
        navigate("/login")
      }
    })
  }, [])


  const handleLogout = () => {
    fetch('https://irepoter-backend-production.up.railway.app/logout', {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // localStorage.removeItem('user');
          setUser(null)
          navigate('/login');

        } else {
          throw new Error('Error logging out');
        }
      })
      .catch(error => console.log(error));
  }
  if (!user) return navigate("/login");
  return (
    <div className='user-container'>

      <div className='user-info'>
        <h1>WELCOME TO IREPORTER!</h1>
        <p>Ireporter is a platform that encourages users (citizen) to bring any
          form of corruption to the notice of appropriate authorities and the general public.
          Report issues affecting the community while also seeking government quick intervention.</p>
        <div className='user-nav'>
          {/* <h2>My reports</h2> */}
          <h2 onClick={() => { navigate("/reportform") }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
          </svg>New Report</h2>
          <button className='logout-btn' onClick={handleLogout} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>Log Out</button>
          {/* <h2>My Solved Reports</h2> */}
        </div>
      </div>

      {reports.map(report => {
        return (
          <div className="infobox" key={report.id}>
            <div className='user-reports'>
              <h1>Red flag: {report.red_flag}</h1>
              <p>Location: {userlocation.loaded ? JSON.stringify(userlocation) : "location not supported"}</p>
              <p>Date: {report.date}</p>
              {/* <p><img src={report.images}/></p> */}
              <button className='btn'
                onClick={() => { navigate("./" + report.id) }}
              >
                <Link
                  to={`/reports/${report.id}`}
                  onClick={() => <UserDetails key={report.id} />}
                  target="blank"
                >
                </Link>Read more</button>
              <button className="btn" onClick={() => { onDelete(report.id) }}> Delete </button>
              <Link to={`/edit/${report.id}`}>
                <button className="btn">Edit</button>
              </Link>

              {/* <NavLink to="/report" classname="btn">Read more</NavLink> */}
              {/* <p>Date: {report.date}</p> */}
              {/* <p><img src={report.images} alt="/"/></p> */}


            </div>


          </div>
        )

      })
      }

      {/* <div className='logout'>
                  <button onClick={()=>{nav("/")}}>Log Out</button>
                </div> */}
    </div>
  )
}

export default Userprofile