import React from 'react';
import Profile from '../../assets/images/Hanging-Rock.jpg';

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
              <p className='p__outfit about-text'> I am a Raleigh, North Carolina native and former educator turned web developer.
                As an elementary school teacher and later a Magnet Program Coordinator for an elementary Design and Computer Sciences program, 
                I have had the opportunity to hone my design and digital marketing skills to improve communication with families, creating beautiful webpages that offer a great user experience. 
                Currently, I am continuing to grow my skills in web development as a student in a Full-Stack Web Development bootcamp through UNC Chapel Hill. 
              </p>
        </div>
      </div>
        
    </div>
  );
}

export default About;