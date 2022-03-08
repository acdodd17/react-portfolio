import React from "react";
import ProjectItem from "./ProjectItem";
import _0 from '../../assets/images/_0.png';
import _1 from '../../assets/images/_1.png';
import _2 from '../../assets/images/_2.png';
import _3 from '../../assets/images/_3.png';
import _4 from '../../assets/images/_4.png';
import _5 from '../../assets/images/_5.png';

function Project() {
    
    const projects = [
        {
            title: 'Wine Share',
            deployedURL: 'https://wine-share.herokuapp.com/', 
            github: 'https://github.com/acdodd17/wine-share', 
            img: _0
        }, 
        {
            title: "Hangman's Revenge",
            deployedURL: 'https://cyanidethejuggla.github.io/hangmans-revenge/', 
            github: 'https://github.com/CyanideTheJuggla/hangmans-revenge',
            img: _1
        }, 
        {
            title: 'Tech Talk',
            deployedURL: 'https://tech-talk-cms-style-blog.herokuapp.com/', 
            github: 'https://github.com/acdodd17/tech-talk-CMS-style-blog',
            img: _5
        },
        {
            title: 'Weather Dashboard',
            deployedURL: 'https://acdodd17.github.io/weather-dashboard/', 
            github: 'https://github.com/acdodd17/weather-dashboard',
            img: _2
        }, 
        {
            title: 'Workday Scheduler',
            deployedURL: 'https://acdodd17.github.io/work-day-schedule/', 
            github: 'https://github.com/acdodd17/work-day-schedule',
            img: _3
        }, 
        {
            title: 'Password Generator',
            deployedURL: 'https://acdodd17.github.io/password-generator/', 
            github: 'https://github.com/acdodd17/password-generator',
            img: _4
        }, 
    ];

    return (
        <div className="portfolio row">
            {projects.map((project, i) => (
                
                <ProjectItem project = {project} key = {project.title}/>
                
            ))}
        </div>
    )
}

export default Project;