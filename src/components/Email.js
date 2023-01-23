import React, { useRef } from 'react'
import "./Email.css"
import emailjs from '@emailjs/browser';

function Email() {
  const form= useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_21fbelb', 'template_m4v5yq7', form.current, 'R35-_S8O0Ig6Knk3A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div>
        <div className='person-form'>
            <h2>IREPORTER</h2>
            <p>Ireporter is a platform that encourages users (citizen) to bring any 
            form of corruption to the notice of appropriate authorities and the general public.
            Report issues affecting the community while also seeking government quick intervention.</p>
        </div>
        <div className='email-form'>
        <form ref={form}  action="submit-email" onSubmit={sendEmail}>
         <label for="from-email">From:</label>
         <input type="email" id="from-email" name="from-email" required/>
         <label for="to-email" >To:</label>
         <input type="email" id="to-email" name="to-email" defaultValue="irepoter254@gmail.com" />
         <label for="subject">Subject:</label>
         <input type="text" id="subject" name="subject" required/>
         <label for="message">Message:</label>
         <input id="message" name="message" required/>
         <button type="submit" value="Send">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>Send
            </button>
        </form>
        </div>
        
    </div>
  )
}

export default Email