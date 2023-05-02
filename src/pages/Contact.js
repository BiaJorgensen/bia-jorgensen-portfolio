import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

// Code assistance from https://www.emailjs.com/docs/examples/reactjs/
export default function Contact() {
    const form = useRef();
  
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ohjj2qc', 'template_wz07h7k', form.current, 'FFCUtIU5y7i-GJuov')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email address</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
    </form>
  )
}
