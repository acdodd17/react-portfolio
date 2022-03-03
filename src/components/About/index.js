import React from 'react';
import profile from "../../assets/images/Profile.jpg"

function About() {
  return (
    <section>
        <div className='about-img flex-row center px-2'>
            <img src={profile} alt='profile image' />
        </div>
        <div className='about-info flex-row center mx-2'>
            <h2 id="title">About Me</h2>
            <p id='about-description'>Sit incididunt culpa voluptate incididunt voluptate quis elit sunt excepteur irure pariatur. Minim esse ex dolore dolore consequat anim dolor laborum quis aliquip Lorem amet sunt. Ea anim ex incididunt nulla irure ullamco amet quis commodo voluptate deserunt. Commodo aliqua sit nostrud officia in. Cupidatat anim aliqua et culpa id laboris. Elit sunt mollit ex consequat eu labore dolore exercitation laboris ullamco ullamco anim quis. Velit ex dolor cupidatat incididunt pariatur voluptate aliquip exercitation irure et eiusmod et.</p>
        </div>
    </section>
  );
}

export default About;