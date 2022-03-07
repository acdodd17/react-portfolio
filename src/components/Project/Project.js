import React from "react";


function Project() {
    const projects = [
        {
            title: 'Wine Share',
            deployedURL: 'https://wine-share.herokuapp.com/', 
            github: 'https://github.com/acdodd17/wine-share'
        }, 
        {
            title: "Hangman's Revenge",
            deployedURL: 'https://cyanidethejuggla.github.io/hangmans-revenge/', 
            github: 'https://github.com/CyanideTheJuggla/hangmans-revenge'
        }, 
        {
            title: 'Tech Talk',
            deployedURL: 'https://tech-talk-cms-style-blog.herokuapp.com/', 
            github: 'https://github.com/acdodd17/tech-talk-CMS-style-blog'
        },
        {
            title: 'Weather Dashboard',
            deployedURL: 'https://acdodd17.github.io/weather-dashboard/', 
            github: 'https://github.com/acdodd17/weather-dashboard'
        }, 
        {
            title: 'Workday Scheduler',
            deployedURL: 'https://acdodd17.github.io/work-day-schedule/', 
            github: 'https://github.com/acdodd17/work-day-schedule'
        }, 
        {
            title: 'Password Generator',
            deployedURL: 'https://acdodd17.github.io/password-generator/', 
            github: 'https://github.com/acdodd17/password-generator'
        }, 
    ]

    return (
        <div className="portfolio row">
            {projects.map((project, i) => {
                return (
                    <div className="column portfolio-project">
                        <div  className="project">
                            <a href={project.deployedURL} target="_blank">
                                <img src={require(`../../assets/images/_${i}.png`)} alt={project.title}  key={project.name} className="project-img" />
                            </a>
                            <h2 className="project-title p__outfit-black subheading flex__center">{project.title}</h2>
                            <div className="project-links">
                                <a href={project.github} target="_blank"><img src="https://img.icons8.com/ios/50/000000/github--v2.png" alt="Github Repository" id="project-icon"/></a>
                                <a href={project.deployedURL} target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/link--v2.png" alt="Project URL" id="project-icon"/></a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Project;