import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
              setErrorMessage('Your email is invalid.');
            } else {
              setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit form', formState);
        }
    };

  return (
    <div className=''>
        <div className=''>
            <h2>Let's be in Touch!</h2>
        </div>
        <div className=''>
            <div className=''>
                <h3 className=''>Contact Info</h3>
                <div>
                    <p className=''>
                        <a href='mailto:acdodd17@gmail.com' target='_blank' className=''>
                            <span className=''>
                                <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-email-advertising-kiranshastry-lineal-kiranshastry-1.png" alt="Email" className="contact-icon"/>
                            </span>
                            acdodd17@gmail.com
                        </a>
                    </p>
                    <p className=''>
                        <a href='https://github.com/priyaravi23' target='_blank' className=''>
                            <span className=''>
                                <img src="https://img.icons8.com/ios/50/000000/github--v2.png" alt="GitHub profile" className="contact-icon" />
                            </span>
                            acdodd17
                        </a>
                    </p>
                    <p className=''>
                        <a href='https://www.linkedin.com/in/anna-dodd-9bb3a63a/' target="_blank" className=''>
                            <span className=''>
                                <img src="https://img.icons8.com/ios/50/000000/linkedin-circled--v4.png" alt="LinkedIn profile" className="contact-icon" />
                            </span>
                            anna-dodd-9bb3a63a
                        </a>
                    </p>
                </div>
            </div>
            <div className=''>
                <h3 className='align'>Send a Message</h3>
                <form id="" onSubmit={handleSubmit} className=''>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
  );
}