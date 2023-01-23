import React, { useState, useEffect } from "react";
import { FaInfo } from "react-icons/fa";
import { useParams } from "react-router-dom";

function SingleInvestigation() {

  const [data, setData] = useState([])

  const [report, setReport] = useState({
    red_flag: "",
    location: "",
    time: "",
    date: "",
    status: ""
  })

  const [display, setDisplay] = useState({
    pending: true,
    review: true,
    questioning: true,
    concluded: true
  })


  useEffect(() => {

    fetch('/reports')
      .then(response => response.json())
      .then(info => setData(info))
      .catch(err => console.error(err));
  }, []);

  const { title } = useParams()


  console.log(data)

  const investigation = data.filter(investigation => (investigation.red_flag === title))

  function handleChange(event) {
    setReport({
      ...report,
      [event.target.name]: event.target.value,
    });
  }



  function handleSubmit(event, id) {
    event.preventDefault();

    const newReport = { ...report }
    fetch(`/reports/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReport)
    })
      .then(response => response.json())
      .then(newReport => {
        console.log(newReport)
        setReport({
          red_flag: "",
          location: "",
          time: "",
          date: "",
          status: ""
        });
        const allReports = [...data, newReport]
        setData(allReports)
      });
  };




  const getInput = (e) => {
    let input = e.target.value

    switch (input) {
      case "Pending": setDisplay({ pending: false, review: true, questioning: true, concluded: true }); break
      case "Review": setDisplay({ pending: true, review: false, questioning: true, concluded: true }); break
      case "Questioning": setDisplay({ pending: true, review: true, questioning: false, concluded: true }); break
      case "Concluded": setDisplay({ pending: true, review: true, questioning: true, concluded: false }); break
      default: setDisplay({ pending: false })
    }
  }


  return (

    <div>
      {investigation.map(item => {
        console.log(item);
        return (
          <div key={item.id}>
            <h3>{item.red_flag}</h3>
            <p>Location: {item.location}</p>
            <p>Time: {item.time}</p>
            <p>Date: {item.date}</p>
          </div>
        )
      })}
      {console.log(investigation)}
      <div>
        <select onChange={getInput} onSubmit={handleSubmit} >
          <option value="Pending" >{investigation.map(item => item.status)}</option>
          <option value="Review">Review</option>
          <option value="Questioning">Questioning</option>
          <option value="Concluded">Concluded</option>
        </select>
        <br />
        <div
          style={{ display: display.pending ? "none" : "inline-block" }}
          className="reason"
          name="pending"
        >Please select status when you're ready to begin investigation!</div>
        <input
          style={{ display: display.review ? "none" : "inline-block" }}
          className="reason"
          type="text"
          name="review"
          placeholder="How are you reviewing this?"
        />
        <input
          style={{ display: display.questioning ? "none" : "inline-block" }}
          className="reason"
          type="text"
          name="questioning"
          placeholder="Who are you looking into and why?..."
        />
        <input
          style={{ display: display.concluded ? "none" : "inline-block" }}
          className="reason"
          type="text"
          name="concluded"
          placeholder="What was the final discovery?"
        />
      </div>
    </div>
  )
}

export default SingleInvestigation