import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./userDetails.css"

function UserDetails() {
  const [{ data: report }, setReports] = useState({
    data: {}
  });
  const { id } = useParams();

  const nav = useNavigate();

  useEffect(() => {
    fetch(`https://irepoter-backend-production.up.railway.app/reports/${id}`).then((response) => {
      if (response.ok) {
        response.json().then((report) => {
          setReports({ data: report });
        });

      } else {
        response.json().then((err) =>
          setReports({
            data: "not found",
            error: err.error,
          })
        );
      }
    });
  }, [id]);

  return (
    <>
      {/* <div className='blob-img'>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F1C21B" d="M43.5,-30C59.1,-15,76.6,3.2,70.9,11.3C65.2,19.4,36.2,17.3,16.2,22.6C-3.8,28,-14.8,40.9,-19.2,39.1C-23.7,37.3,-21.4,20.8,-27,4C-32.7,-12.9,-46.2,-30.2,-43,-42.4C-39.8,-54.6,-19.9,-61.6,-3,-59.2C13.9,-56.8,27.8,-45,43.5,-30Z" transform="translate(100 100)" />
</svg>
      </div>  */}
      <div className="restbody">
        <div className="container bg-darksalmon">
          <div key={report.id}>
            <div className="card-body">
              <p className="card-text text-center">
                <strong>Red Flag</strong>:  {report.red_flag}
              </p>
              <p className="card-text text-center">
                <strong>Location</strong>: {report.location}
              </p>
              <p className="card-text text-center">
                <strong>Date</strong>: {report.date}
              </p>
              <p className="card-text text-center">
                <strong>Time</strong>: {report.time}
              </p>
              <p className="card-text text-center">
                <strong>Intervention</strong>:{report.intervention}
              </p>
              <p className="card-text text-center">
                <strong>Status</strong>: {report.status}
              </p>
              <p className="card-text text-center">
                <strong>Images</strong>: <img className="detail-img" src={report.images} alt="/" />
              </p>
              {/* <button className="button hover:bg-yellow-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={()=>{nav("/edit")}} >Edit</button> */}
              <button className="back-button text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => { nav("/reports") }}> Back </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default UserDetails