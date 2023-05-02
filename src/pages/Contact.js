import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

// Code assistance from https://www.emailjs.com/docs/examples/reactjs/
export default function Contact() {
    const form = useRef();
    // Variables to initiate input as blank
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    // Set input to value that user is adding
    const nameChange = (e) => {setNameInput(e.target.value)};
    const emailChange = (e) => {setEmailInput(e.target.value)};
    const messageChange = (e) => {setMessageInput(e.target.value)};
  
    const sendEmail = (e) => {
        e.preventDefault();
        // After email is sent, input is changed back to blank
        setNameInput('');
        setEmailInput('');
        setMessageInput('');

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
        <input type="text" name="user_name" value={nameInput} onChange={nameChange}/>
        <label>Email address</label>
        <input type="email" name="user_email" value={emailInput} onChange={emailChange}/>
        <label>Message</label>
        <input type="text" name="message" value={messageInput} onChange={messageChange}/>
        <button type="submit">Send</button>
    </form>
  )
}
