import React, { useEffect } from 'react';

function Nav({ currentPage, handlePageChange }) {

    useEffect(() => {
        document.title = currentPage
    }, [handlePageChange]);

    return (
        <ul className='nav flex-row align center'>
            <li className='nav-item mx-2'>
                <a href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}> About Me </a>
            </li>
            <li className='nav-item mx-2'>
                <a href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}> Contact</a>
            </li>
            <li className='nav-item mx-2'>
                <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}> Portfolio</a>
            </li>
            <li className='nav-item mx-2'>
                <a href='#resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}> Resume</a>
            </li>
        </ul>
    );
}

export default Nav;