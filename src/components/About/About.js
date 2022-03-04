import React from 'react';
import Profile from '../../assets/images/Profile.jpg';

function About() {
  return (
    <section>
        <div className='app__about-img'>
            <img src={Profile} alt='profile image' />
        </div>
        <div className=''>
            <h2  className='headtext__outfit-black'>About Me</h2>
            <h4 className='p__outfit-black'>Hi! My name is Anna.</h4>
            <p className='p__outfit'> I am a Raleigh, North Carolina native and former educator turned web developer.
              As an elementary school teacher and later a Magnet Program Coordinator for an elementary Design and Computer Sciences program, 
              I have had the opportunity to hone my design and digital marketing skills to improve communication with families, creating beautiful webpages that offer a great user experience. 
              Currently, I am continuing to grow my skills in web development as a student in a Full-Stack Web Development bootcamp through UNC Chapel Hill. 
              
              
            </p>
        </div>
    </section>
  );
}

export default About;