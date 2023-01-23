import React from 'react'
import Slider, { SliderItem } from './Slider'
import img1 from "../images/city2.jpg"
import img2 from "../images/pri2.jpg"
import img3 from "../images/office.jpg"
import img4 from "../images/pri3.jpg"
import img5 from "../images/dollar.jpg"
import img6 from "../images/pri2.jpg"
import "./About.css"
function About() {
  return (
    <div className='abt'>
    <div >
       <Slider>
        <SliderItem >
            <img  src={img1} alt="" />
            <p className="about-slider ">Board members arrested over 400Billion kenya shilling Graft</p>
        </SliderItem>
        <SliderItem>
            <img src={img2} alt="" />
            <p className="about-slider ">Court sentence 3 officials over 200M tender of health equipments theft</p>
        </SliderItem>
        <SliderItem>
            <img src={img3} alt="" />
            <p className="about-slider ">Investigations ongoing over 340B Scandal via a private company</p>
        </SliderItem>
        <SliderItem>
            <img src={img4} alt="" />
            <p className="about-slider">Court orders arrest of the CEO over Kes. 100M and 216M unexplained wealth</p>
        </SliderItem>
        <SliderItem>
            <img src={img5} alt="" />
            <p className="about-slider ">Investigations ongoing involving government officials over 800M Scandal</p>
        </SliderItem>
        <SliderItem>
            <img src={img6} alt="" />
            <p className="about-slider ">Government officials sentenced over Kes. 120B of the CDF Funds</p>
        </SliderItem>
    </Slider>
    <div className='abt-container'>
    <div className='about'>
      <h1 >About Us</h1>
    </div>
    <div class="abt-row">
  <div class="abt-column">
    <div class="abt-card">
      <h2>Mission</h2>
        <p>We aiming for integrity and combat corruption through law enforcement
          and prevention in both public and private sectors.</p>
    </div>
  </div>
  <div class="abt-column">
    <div class="abt-card">
       <h2>Vision</h2>
        <p>A corruption free society and country</p>
    </div>
  </div>
  <div class="abt-column">
    <div class="abt-card">
       <h2>Values</h2>
        <p>
          <ul>Integrity</ul>
          <ul>Transparency</ul>
          <ul>Accountability</ul>
          <ul>Reliability</ul>
        </p>
    </div>
  </div>
  </div>
</div>
</div>
</div>
  )
}
export default About