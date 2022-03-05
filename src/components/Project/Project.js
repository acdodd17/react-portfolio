import React from "react";
import images from "../../assets/images";


function Project() {
    const projects = [
        {
            title: 'Wine Share',
            img: images._0, 
            deployedURL: 'https://wine-share.herokuapp.com/', 
            github: 'https://github.com/acdodd17/wine-share'
        }, 
        {
            title: "Hangman's Revenge",
            img: images._1, 
            deployedURL: 'https://cyanidethejuggla.github.io/hangmans-revenge/', 
            github: 'https://github.com/CyanideTheJuggla/hangmans-revenge'
        }, 
        {
            title: 'Tech Talk',
            img: images._5, 
            deployedURL: 'https://tech-talk-cms-style-blog.herokuapp.com/', 
            github: 'https://github.com/acdodd17/tech-talk-CMS-style-blog'
        },
        {
            title: 'Weather Dashboard',
            img: images._2, 
            deployedURL: 'https://acdodd17.github.io/weather-dashboard/', 
            github: 'https://github.com/acdodd17/weather-dashboard'
        }, 
        {
            title: 'Workday Scheduler',
            img: images._3, 
            deployedURL: 'https://acdodd17.github.io/work-day-schedule/', 
            github: 'https://github.com/acdodd17/work-day-schedule'
        }, 
        {
            title: 'Password Generator',
            img: images._4, 
            deployedURL: 'https://acdodd17.github.io/password-generator/', 
            github: 'https://github.com/acdodd17/password-generator'
        }, 
    ]

    return (
        <div className="col">
            {projects.map((project) => {
                <div key={project.title} className="project">
                    <a href={project.deployedURL} target="_blank">
                        <img src={project.img} alt={project.title} key={project.title} className="project-img" />
                    </a>
                    <div className="project-links">
                        <a href={project.github} target="_blank"><img src="https://img.icons8.com/ios/50/000000/github--v2.png" alt="Github Repository" id="project-icon"/></a>
                        <a href={project.deployedURL} target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/link--v2.png" alt="Project URL" id="project-icon"/></a>
                    </div>

                    <h2 className="project-title">{project.title}</h2>
                </div>
            })}
        </div>
    )
}

export default Project;