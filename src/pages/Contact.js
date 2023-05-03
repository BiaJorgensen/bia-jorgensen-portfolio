import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { emailValidation } from '../utils/helpers';

// Code assistance from https://www.emailjs.com/docs/examples/reactjs/
export default function Contact() {
    const form = useRef();
    // Variables to initiate input as blank
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
    // Variable to add error message
    const [errorMessage, setErrorMessage] = useState('');

    // Set input to value that user is adding
    const nameChange = (e) => {setNameInput(e.target.value)};
    const emailChange = (e) => {setEmailInput(e.target.value)};
    const messageChange = (e) => {setMessageInput(e.target.value)};

    // On blur handling
    const handleBlur = (e) => {
        // If user clicks out of one of the form fields without entering text, show error message
        if (e.target.value === '') {
            if (e.target.name === 'user_name') {
                setErrorMessage('Please add your name')
            };
            if (e.target.name === 'user_email') {
                setErrorMessage('Please add your email')
            };
            if (e.target.name === 'message') {
                setErrorMessage('Please add a message')
            }
        }
        // If user clicks out of one of the form fields with text, removes error message
        else {
            setErrorMessage('');
            if (e.target.name === 'user_email' && !emailValidation(e.target.value)) {
                setErrorMessage('Please enter a valid email')
            };
        }
    }
  
    const sendEmail = (e) => {
        e.preventDefault();
        // After email is sent, input is changed back to blank
        setNameInput('');
        setEmailInput('');
        setMessageInput('');
        // Email.js Service, Template and User IDs
        emailjs.sendForm('service_ohjj2qc', 'template_wz07h7k', form.current, 'FFCUtIU5y7i-GJuov')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    

  return (
    <div>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" value={nameInput} onChange={nameChange} onBlur={handleBlur}/>
            <label>Email address</label>
            <input type="email" name="user_email" value={emailInput} onChange={emailChange} onBlur={handleBlur}/>
            <label>Message</label>
            <input type="text" name="message" value={messageInput} onChange={messageChange} onBlur={handleBlur}/>
            <button type="submit">Send</button>
        </form>
        {errorMessage && (
            <div>
            <p>{errorMessage}</p>
            </div>
        )}
    </div>
    
  )
}
