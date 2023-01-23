import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import  ogin from "./Login";
import Navbar from "./Navbar";
import Home from "./Home"
import Topbar from "./Topbar";
import { Signup } from "./Signup";
import ContactUs from "./ContactUs";
import About from "./About";
import Investigations from "./investigations";
import Userprofile from "./Userprofile";
import UserDetails from "./userDetails";
import Edit from "./Edit";
import { Admin } from "./Admin";
import Email from "./Email";
import PhoneForm from "./PhoneForm";
import PersonForm from "./PersonForm";
import ReportForm from "./ReportForm";
import GeoLocation from "./GeoLocation";
import Loader from "./Loader";
import "../App.css"
import Log from "./Log";
// import SingleInvestigation from "./singleInvestigation";
// import Footer from "./Footer";



const SingleInvestigation = React.lazy(() => import("./singleInvestigation"))

function App() {
  const [reports, setReports] = useState([])
  // const { id } = useParams()
  const [reportId, setReportId] = useState(null)
  const userlocation = GeoLocation();
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  // const cors = require("cors");
  //    app.use(cors());


  useEffect(() => {

    if(user !== null){
      fetch('https://irepoter-backend-production.up.railway.app/reports')
      .then(r => r.json())
      .then(data => setReports(data))
    }
  }, [setUser]);



  function deleteOrder(id) {
    fetch(`https://irepoter-backend-production.up.railway.app/reports/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(() => {
        const deleting = reports.filter((report) => report.id !== id)
        setReports(deleting)
      })
      .catch(err => console.log(err))
    alert("delete was successful")
  }

  function addReport(newReport) {
    setReports([...reports, newReport])
  };

  function handleEdit(editedReport) {
    const unchangedReport = reports.find(report => report.id !== editedReport.id)
    setReports([unchangedReport, editedReport])
  };
  return (
    <div className="App">
      <Topbar />
      <Navbar user={user} setUser={setUser} />
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/login" element={<Login/> } /> */}
          <Route path="/login" element={<Log user={user} setUser={setUser} setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/investigations" element={<Investigations />} />
          <Route path="/investigations/:title" element={<SingleInvestigation />} />
          <Route path='/reports' element={<Userprofile reports={reports} onDelete={deleteOrder} userlocation={userlocation}  setUser={setUser} user={user} />} />
          <Route path='/reports/:id' element={<UserDetails reportId={reportId} setReportId={setReportId} />} />
          <Route path="/edit/:id" element={<Edit reports={reports} onEditReport={handleEdit} />} />
          <Route path="/email" element={<Email />} />
          <Route path="/phoneform" element={<PhoneForm />} />
          <Route path="/personform" element={<PersonForm />} />
          <Route path="/reportform" element={<ReportForm onAddNewReport={addReport} userlocation={userlocation} />} />



        </Routes>
      </React.Suspense>

      {/* <Footer /> */}
    </div>
  );
}
export default App;
