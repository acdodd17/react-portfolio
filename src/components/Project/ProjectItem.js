import React from "react";

function ProjectItem(props) {
    return (
        <div className="column portfolio-project">
                    <div  className="project" >
                        <a href={props.project.deployedURL} target="_blank">
                            <img src={props.project.img} 
                            alt={props.project.title} 
                            className="project-img" 
                            />
                        </a>
                        <h2 className="project-title p__outfit-black subheading flex__center">{props.project.title}</h2>
                        <div className="project-links">
                            <a href={props.project.github} target="_blank"><img src="https://img.icons8.com/ios/50/000000/github--v2.png" 
                            alt="Github Repository" id="project-icon"/></a>
                            <a href={props.project.deployedURL} target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/link--v2.png" 
                            alt="Project URL" id="project-icon"/></a>
                        </div>
                    </div>
                </div>
    )
};

export default ProjectItem;