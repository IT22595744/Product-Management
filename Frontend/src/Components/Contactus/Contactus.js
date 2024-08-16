import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactus.css';

function Contactus() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_42rcs0n',
         'template_rbs2mak',
          form.current, {
        publicKey: 'eaJuMTSGgUNVt5D-9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("success")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Not send")
        },
      ); 
    } 
  return (
    <div className="p-3 mb-2 bg-primary-subtle text-primary-emphasis" id='bg'>
      <div className='cen'>
      <h1>Contact Us</h1><br></br>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br></br>
      <input type="text" name="user_name" /><br></br><br></br>
      <label>Email</label><br></br>
      <input type="email" name="user_email" /><br></br><br></br>
      <label>Message</label><br></br>
      <textarea name="message" className='msg'/><br></br><br></br>
      <input type="submit" value="Send" class="btn btn-info"/>
    </form>
    </div>
    </div>
  );
}

export default Contactus;