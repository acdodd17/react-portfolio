import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


export default function Contact() {
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;
    // const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         if (!isValid) {
    //           setErrorMessage('Your email is invalid!');
    //         } else {
    //           setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //           setErrorMessage(`${e.target.name} is required!`);
    //         } else {
    //           setErrorMessage('');
    //         }
    //     }
    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //         console.log('Handle Form', formState);
    //     }
    // };

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if (!errorMessage) {
    //         console.log('Submit form', formState);
    //     }
    // };

  return (
    <div className='container'>
        <div className='heading'>
            <h2 className='headtext__outfit-black'>Let's be in Touch!</h2>
        </div>
        <div className='row contact'>
            <div className='column contact-col'>
                <div className='subheading'>
                <h3 className='subheading p__outfit-black'>Contact Info</h3>
                </div>
                
                <div>
                    <p className='contact-info'>
                        <a href='mailto:acdodd17@gmail.com' target='_blank' rel="noreferrer" className='contact-info'>
                            <span className=''>
                                <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-email-advertising-kiranshastry-lineal-kiranshastry-1.png" alt="Email" className="contact-icon"/>
                            </span>
                            acdodd17@gmail.com
                        </a>
                    </p>
                    <p className='contact-info'>
                        <a href='https://github.com/priyaravi23' target='_blank' rel="noreferrer" className='contact-info'>
                            <span className=''>
                                <img src="https://img.icons8.com/ios/50/000000/github--v2.png" alt="GitHub profile" className="contact-icon" />
                            </span>
                            acdodd17
                        </a>
                    </p>
                    <p className='contact-info'>
                        <a href='https://www.linkedin.com/in/anna-dodd-9bb3a63a/' target="_blank" rel="noreferrer" className='contact-info'>
                            <span className=''>
                                <img src="https://img.icons8.com/ios/50/000000/linkedin-circled--v4.png" alt="LinkedIn profile" className="contact-icon" />
                            </span>
                            anna-dodd-9bb3a63a
                        </a>
                    </p>
                </div>
            </div>
            {/* <div className='column contact-form'>
                <div className='subheading'>
                    <h3 className=' subheading p__outfit-black'>Send a Message</h3>
                </div>
                
                <form id="contact-form" onSubmit={handleSubmit} >
                    <div className='field-wrap'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                    </div>
                    <div className='field-wrap'>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                    </div>
                    <div className='field-wrap'>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-message">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit" className='custom-button'>Submit</button>
                </form>
            </div> */}
        </div>
    </div>
  );
}