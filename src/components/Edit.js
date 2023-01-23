import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css"

function Edit({ onEditReport }) {
  const [report, setReports] = useState([])
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    fetch(`/reports/${id}`)
      .then(r => r.json())
      .then(data => setReports(data))
  }, []);

  // const report = reports.filter((data) => data.id === id);
  // console.log(report)
  const navigate = useNavigate();

  const [red_flag, setRed_flag] = useState(report.red_flag);
  const [location, setLocation] = useState(report.location);
  const [date, setDate] = useState(report.date);
  const [time, setTime] = useState(report.time);
  const [intervention, setIntervention] = useState(report.intervention);

  function handleSubmit(e) {
    e.preventDefault()
    const editedReport = {
      red_flag: red_flag,
      location: location,
      date: date,
      time: time,
      intervention: intervention,
      id: report.id
    }

    fetch(`/reports/${editedReport.id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedReport)
      })
      .then(r => r.json())
      .then(editedReport => {
        console.log(editedReport)
        onEditReport(editedReport)
        navigate('/reports')
      });
  }

  return (
    <div className='edit'>
      <div className='edit-form'>
        <form onSubmit={handleSubmit} >
          <label>  red_flag: </label>
          <input defaultValue={report.red_flag} onChange={e => setRed_flag(e.target.value)} />
          <label > location: </label>
          <input onChange={e => setLocation(e.target.value)}
            defaultValue={report.location} />
          <label >Date:  </label>
          <input defaultValue={report.date} onChange={e => setDate(e.target.value)} />
          <label >Time:  </label>
          <input defaultValue={report.time} onChange={e => setTime(e.target.value)} />
          <label >Intervention:  </label>
          <input defaultValue={report.intervention} onChange={e => setIntervention(e.target.value)} />
          <button className="edit-button text-white font-bold py-2 px-4 border border-blue-700 rounded" onSubmit={handleSubmit}> Submit </button>
        </form>

        {/* <button className="edit-button hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" onSubmit={handleSubmit}> Submit </button> */}
        <button className="edit-back-button text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => { navigate("/reports") }}> Back </button>

      </div>
    </div>
  )

}

export default Edit