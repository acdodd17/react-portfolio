function Resume() {
    return (
        <div className="container">
            <h2 className="heading headtext__outfit-black">
                   Resume
            </h2>
            
            <div className="row">
                <div className="column proficiencies">
                    <h3 className="subtitle">
                        Front-End Proficiencies 
                    </h3>
                    <ul className="proficiencies-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="column proficiencies">
                    <h3 className="subtitle">
                        Back-End Proficiencies 
                    </h3>
                    <ul className="proficiencies-list">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <a href="Resume.pdf" download="Sample" className="resume-link p__outfit-black flex__center">Click to download my resume!</a>
                </div>
            </div>
        </div>
    )
}

export default Resume; 