import React, { useLayoutEffect } from 'react';

function Nav({ currentPage, handlePageChange }) {
    return (
        <ul className='nav'>
            <li className='nav-item'>
                <a href='About' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}> About Me </a>
            </li>
        </ul>
    )
}