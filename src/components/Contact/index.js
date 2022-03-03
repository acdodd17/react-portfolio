import React from 'react';


export default function Contact() {
  return (
    <div className='container'>
        <div className='contact-title'>
            <h2>Get in Touch!</h2>
        </div>
        <div className='container flex-row space-between align'>
            <div className='contact-info'>
                <h3 className='align'>Contact Info</h3>
                <div>
                    <p className='flex-row align flex-start'>
                        <a href='mailto:acdodd17@gmail.com' target='_blank' className='flex-row align flex-start'>
                            <span className='mail-icon px-1'>
                                <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-email-advertising-kiranshastry-lineal-kiranshastry-1.png" alt="Email" className="contact-icon"/>
                            </span>
                            acdodd17@gmail.com
                        </a>
                    </p>
                    <p className='flex-row align flex-start'>
                        <a href='https://github.com/priyaravi23' target='_blank' className='flex-row align flex-start'>
                            <span className='github-icon px-1'>
                                <img src="https://img.icons8.com/ios/50/000000/github--v2.png" alt="GitHub profile" className="contact-icon" />
                            </span>
                            acdodd17
                        </a>
                    </p>
                    <p className='flex-row align flex-start'>
                        <a href='https://www.linkedin.com/in/anna-dodd-9bb3a63a/' target="_blank" className='flex-row align flex-start'>
                            <span className='linkedin-icon px-1'>
                                <img src="https://img.icons8.com/ios/50/000000/linkedin-circled--v4.png" alt="LinkedIn profile" className="contact-icon" />
                            </span>
                            anna-dodd-9bb3a63a
                        </a>
                    </p>
                </div>
            </div>
            <div className='contact-form'>

            </div>
        </div>
    </div>
  );
}