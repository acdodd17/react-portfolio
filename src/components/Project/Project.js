import React from "react";
import ProjectItem from "./ProjectItem";
import p0 from '../../assets/images/p0.png';
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';
// import p4 from '../../assets/images/p4.png';
import p5 from '../../assets/images/p5.png';
import p6 from '../../assets/images/p6.png';


function Project() {
    
    const projects = [
        {
            title: 'Social Rolls',
            deployedURL: 'https://socialrolls.herokuapp.com/', 
            github: 'https://github.com/KrisSmith7/roll-initiative', 
            img: p6,
            description: 'React, Tailwind, Node, Express, GraphQL, MongoDB'
        }, 
        {
            title: 'Wine Share',
            deployedURL: 'https://wine-share.herokuapp.com/', 
            github: 'https://github.com/acdodd17/wine-share', 
            img: p0
        }, 
        {
            title: "Hangman's Revenge",
            deployedURL: 'https://cyanidethejuggla.github.io/hangmans-revenge/', 
            github: 'https://github.com/CyanideTheJuggla/hangmans-revenge',
            img: p1
        }, 
        {
            title: 'Tech Talk',
            deployedURL: 'https://tech-talk-cms-style-blog.herokuapp.com/', 
            github: 'https://github.com/acdodd17/tech-talk-CMS-style-blog',
            img: p5
        },
        {
            title: 'Weather Dashboard',
            deployedURL: 'https://acdodd17.github.io/weather-dashboard/', 
            github: 'https://github.com/acdodd17/weather-dashboard',
            img: p2
        }, 
        {
            title: 'Workday Scheduler',
            deployedURL: 'https://acdodd17.github.io/work-day-schedule/', 
            github: 'https://github.com/acdodd17/work-day-schedule',
            img: p3
        }
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