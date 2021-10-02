import React from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Skills() {

    return (
            <div className="skills-section">
        <h4 className="page-heading">Skills</h4>


        <h5 className="header">Languages</h5>
        <div className="skills">
            <div className="skill">JavaScript
                <ProgressBar now={95} />
            </div>
            <div className="skill">HTML
                <ProgressBar now={96} />
            </div>
            <div className="skill">CSS
                <ProgressBar now={96} />
            </div>
            <div className="skill">C#
                <ProgressBar now={88} />
            </div>
            <div className="skill">Python
                <ProgressBar now={66} />
            </div>
            <div className="skill">SCSS
                <ProgressBar now={85} />
            </div>
            <div className="skill">SQL
                <ProgressBar now={85} />
            </div>
            <div className="skill">Java
                <ProgressBar now={70} />
            </div>
            <div className="skill">PHP
                <ProgressBar now={60} />
            </div>
        </div>


        <h5 className="header">Libraries / Frameworks</h5>
        <div className="skills">
            <div className="skill">Vue.js
                <ProgressBar now={91} />
            </div>
            <div className="skill">Bootstrap
                <ProgressBar now={96} />
            </div>
            <div className="skill">Webpack
                <ProgressBar now={95} />
            </div>
            <div className="skill">.NET MVC Core
                <ProgressBar now={93} />
            </div>
            <div className="skill">Entity Framework
                <ProgressBar now={93} />
            </div>
            <div className="skill">Babel
                <ProgressBar now={90} />
            </div>
            <div className="skill">Web Forms
                <ProgressBar now={95} />
            </div>
            <div className="skill">TensorFlow
                <ProgressBar now={50} />
            </div>
            <div className="skill">Django
                <ProgressBar now={60} />
            </div>
        </div>




        <h5 className="header">Development Tools</h5>
        <div className="skills">
            <div className="skill">VS Code
                <ProgressBar now={85} />
            </div>
            <div className="skill">Visual Studio
                <ProgressBar now={80} />
            </div>
            <div className="skill">Chrome DevTools
                <ProgressBar now={95} />
            </div>
            <div className="skill">GitHub
                <ProgressBar now={90} />
            </div>
            <div className="skill">GitLab
                <ProgressBar now={85} />
            </div>
            <div className="skill">Netlify
                <ProgressBar now={80} />
            </div>
            <div className="skill">Node
                <ProgressBar now={85} />
            </div>
            <div className="skill">Jupyter Notebooks
                <ProgressBar now={50} />
            </div>
            <div className="skill">SQL Server Management Studio
                <ProgressBar now={90} />
            </div>
        </div>



        <h5 className="header">Personal</h5>
        <div className="skills">
            <div className="skill"><FontAwesomeIcon icon="search"></FontAwesomeIcon>Problem Solver
                
            </div>
            <div className="skill"><FontAwesomeIcon icon="brain"></FontAwesomeIcon>Critical Thinker
                
            </div>
            <div className="skill"><FontAwesomeIcon icon="info"></FontAwesomeIcon>Detail Oriented
                
            </div>
            <div className="skill"><FontAwesomeIcon icon="user-friends"></FontAwesomeIcon>Team Leader
                
            </div>
            <div className="skill"><FontAwesomeIcon icon="hand-rock"></FontAwesomeIcon>Self-Motivated
                
            </div>
            <div className="skill"><FontAwesomeIcon icon="hands-helping"></FontAwesomeIcon>Responsible
                
            </div>
        </div>


    </div>
    );
}

export default Skills;