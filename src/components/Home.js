import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Home.css"


function Home() {
  const nav = useNavigate()
  // counting numbers

  const num = document.querySelectorAll(".num");
  const speed = 200;

  num.forEach((count) => {
    const animate = () => {
      const target = +count.getAttribute("num");
      const data = +count.innerText;

      const time = target / speed;

      if (data < target) {
        count.innerText = Math.ceil(data + time);
        setTimeout(animate, 33);

      }

    }

    animate();
  });

  return (
    <div className='mainsection w-full h-[90vh]'>
      <video className="home-video" autoPlay loop muted>
        <source src={require('../images/video.mp4')} type="video/mp4" />
      </video>
      <div className='contentbox'>
        <div className='intro '>
          <p className='motto'>A CORRUPTION FREE STATE</p>
        </div>
      </div>
      <div className='report'>
        <div>
          <h1>REPORT CORRUPTION</h1>
          <p>The reports can be made in our offices</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <h2>Anonymus</h2>
            <img className='image' src={require('../images/person.jpg')} alt="/" onClick={() => { nav("/login") }} />
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h2>By Email</h2>
            <img className='image' src={require('../images/mail.jpg')} alt="/" onClick={() => { nav("/email") }} />
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h2 >By Phone</h2>
            <img className='image' src={require('../images/phone.jpg')} alt="/" onClick={() => { nav("/phoneform") }} />
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h2>In Person</h2>
            <img className='image' src={require('../images/person2.jpg')} alt="/" onClick={() => { nav("/personform") }} />
          </div>
        </div>
      </div>
      <div>
        <section className="statisticcs">
          <div>
            <h1 className='header-nums'>OUR ACHIEVEMENTS</h1>
            <p className='achieve'>Since establishment, Ireporter has secured convictions in Court, enhanced financial investigations
              and recovered assets acquired from corruption as a deterrence strategy. This has been
              achieved through proactive disruptions,thoroughinvestiations,whistleblowers and a commited law enforcement.</p>
          </div>
          <div className="statistics__container">
            <div className="statistics__served" >
              <span className="num" num="654">00</span>
              <p>Solved cases</p>
            </div>
            <div className="statistics__no__of__projects">
              <span className="num" num="1500">00</span>
              <p>Reported cases</p>
            </div>
            <div className="statistics__locations">
              <span className="num" num="154">00</span>
              <p>Locations</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home