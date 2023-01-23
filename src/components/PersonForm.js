import React from 'react'

function PersonForm() {
  return (
    <div className='person-form'>
      <h2>IREPORTER</h2>
      <p>Ireporter is a platform that encourages users (citizen) to bring any 
        form of corruption to the notice of appropriate authorities and the general public.
        Report issues affecting the community while also seeking government quick intervention.</p>
      <div className="contact-info">
      <div className="maps">
                <p>Tom Mboya Street</p>
                <p>Nairobi,Kenya</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817079502185!2d36.82290111427471!3d-1.2836287359841596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1129d3e9e4a7%3A0xd7a2234ccaf4740e!2sTom%20Mboya%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1674139433101!5m2!1sen!2ske"
                 width="400" height="300"
                 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="maps">
              <p>Old Town</p>
              <p>Mombasa,Kenya </p>
              <iframe title="mbs" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8177639894293!2d39.674124614291706!3d-4.057550246069728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e175f80039%3A0x8612a73229c113d3!2sOld%20Town%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1673848363700!5m2!1sen!2ske"
              width="400" height="300"  
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="maps">
              <p>Milimani Estate</p>
              <p>Kisumu,Kenya</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.242162921671!2d34.748403968963295!3d-0.11314624092415826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa4b99c0f9ce5%3A0x70595daa5f06e7f3!2sMilimani%2C%20Kisumu!5e0!3m2!1sen!2ske!4v1674139367502!5m2!1sen!2ske"
               width="400" height="300"
               allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
      </div>
       
            <div>
              
            </div>
    </div>
  )
}

export default PersonForm