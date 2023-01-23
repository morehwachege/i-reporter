import React from "react";
import { Link, Outlet } from "react-router-dom";


function Investigation({id, red_flag, location, time, date, status, intervention}) {
    return(
        <div>
        <Link to= {`/investigations/${red_flag}`}>
        <div className="investigationsbox" key={id}>
        <div className="investigationsleft">
          <p>Claim:{red_flag}</p>
          <p>Evidence:{location}</p>
          <p>Time:{time}</p>
          <p>Date:{date}</p>
        </div>
        <div className="investigationsright">
          <p>Status: {status}</p>
          <p>PROCESS: {intervention}</p>
        </div>
        
        </div>
        </Link>
        <Outlet/>
        </div>
        
    )
}

export default Investigation