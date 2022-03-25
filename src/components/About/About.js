import React from 'react';
import Profile from '../../assets/images/Profile.png';

function About() {
  return (
    <div className="container" >
      <div className='row'>
      <div className="column _img">
          <img src={Profile} alt='profile' className='profile-img'/>
        </div>
        <div className="column">
          <h2 className='heading headtext__outfit-black'>About Me</h2>
          <h4 className='subheading p__outfit-black'>Hi! My name is Anna.</h4>
              <p className='p__outfit about-text'> 
              Raleigh, NC native and educator turned Full-stack web developer drawing on background in education, program management and marketing to develop engaging and accessible 
              user experiences on the web. 
              A recent graduate with a certificate in full-stack web development from the University of North Carolina at Chapel Hill. Experience building web pages from front to back 
              implementing the MERN stack. I have quickly gained and grown my skills in using foundations in HTML, CSS, and JavaScript along with React frameworks to create beautifully 
              focused user interfaces and have successfully created back-end structures to manage user data and authentication with Node.js dependencies, both SQL and NoSQL databases, 
              and JWT authentication. I am a passionate and creative problem solver, persistently pursuing new learning and focused on continuing to improve upon my ability to create 
              responsive web applications that provide meaningful user experiences. I am a skilled communicator and perseverant team player excited to work with and learn from others as 
              part of a development team. 
              </p>
        </div>
      </div>
        
    </div>
  );
}

export default About;