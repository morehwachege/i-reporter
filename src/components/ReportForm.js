import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./ReportForm.css"
// import axios from 'axios';


function ReportForm({ onAddNewReport, userlocation }) {

  const [red_flag, setRed_flag] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [intervention, setIntervention] = useState('');
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  // const { getRootProps, getInputProps } = useState({
  //   onDrop: acceptedFiles => {
  //     setImage(acceptedFiles[0]);
  //   }
  // });
  // const handleUpload = async () => {
  //   const formData = new FormData();
  //   formData.append('image', image);
  // try {
  //   const res = await axios.post('/reports', formData);
  //   console.log(res.data);
  // } catch (err) {
  //   console.error(err);
  // }
  // };

  function handleSubmit(e) {
    e.preventDefault()
    const newRepo = {
      red_flag: red_flag,
      location: location,
      date: date,
      time: time,
      image: image,
      intervention: intervention
    };


    fetch("/reports",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRepo)
      })
      .then(r => r.json())
      .then(reports => {
        onAddNewReport(reports)
        navigate("/reports")
      })
  }



  return (
    <div className='form'>
      <div className='submit-form'>
        <form action="submit" onSubmit={handleSubmit}>
          <label for="redflag">Redflag:</label>
          <input type="text" id="redflag" name="redflag" required onChange={e => setRed_flag(e.target.value)} />
          <label for="location">Location: </label>
          <p type="text" id="location" name="location" required>{userlocation.loaded ? JSON.stringify(userlocation) : "location not supported"}</p>
          <label for="date">Date:</label>
          <input type="date" id="date" name="date" required onChange={e => setDate(e.target.value)} />
          <label for="time">Time:</label>
          <input type="time" id="time" name="time" required onChange={e => setTime(e.target.value)} />
          <label for="time">Intervention:</label>
          <input type="intervention" id="intervention" name="intervention" required onChange={e => setIntervention(e.target.value)} />
          <button className='submit-btn' type="submit" value="Submit">Submit</button>
          {/* <a href="#">Submit</a> */}

        </form>
      </div>
    </div>
  )
}

export default ReportForm