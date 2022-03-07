import React, { useEffect } from 'react';

function Nav({ currentPage, handlePageChange }) {

    // useEffect(() => {
    //     document.title = currentPage
    // }, [handlePageChange]);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-name'>
                <h1 id="header-name" className='headtext__outfit-black'><a href='#aboutgit a' onClick={() => handlePageChange('About')} className='headtext__outfit-black'>Anna Dodd</a></h1>
            </div>
            <ul className='app__navbar-links'>
                <li className='p__outfit-black'>
                    <a href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active' : 'disabled'}> About Me </a>
                </li>
                <li className='p__outfit-black'>
                    <a href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'active' : 'disabled'}> Contact</a>
                </li>
                <li className='p__outfit-black'>
                    <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'active' : 'disabled'}> Portfolio</a>
                </li>
                <li className='p__outfit-black'>
                    <a href='#resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'active' : 'disabled'}> Resume</a>
                </li>
            </ul>
            
        </nav>
        
    );
}

export default Nav;