import React from 'react'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import ContactMe from './ContactMe'
import { useState } from 'react'


function Bio() {

    const [modalShow, setModalShow] = useState(false);


    return (
    <div className="bio">
        <h1>Brian<br />Bickett</h1>
        <h3 className="text-mute mt-4">Senior Full Stack Engineer</h3>

        <div className="personal-info">
            <h4 className="heading">Info</h4>

            <div className="subheading">
                <FontAwesomeIcon icon="map-marker-alt" />
                <div className="info">
                    Naples FL
                </div>
            </div>

            <div className="subheading">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                <a href="https://www.linkedin.com/in/bbickett/" target="_blank" rel="noopener noreferrer">linkedin.com/in/bbickett</a>
            </div>


            <div className="subheading">
                <FontAwesomeIcon icon={['fab', 'github']} />
                <a href="https://github.com/bbickett" target="_blank" rel="noopener noreferrer">github.com/bbickett</a>
            </div>

            <div className="subheading contact-me" onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon="comment" />
                <div className="info">
                    Contact Me
                </div>
            </div>

                        

        </div>

        <div className="education">
            <h4 className="heading">Education</h4>

            <h5 className="degree">Masters in Computer Science</h5>
            <small>Western Kentucky University</small><br />
            <small>2008</small>


            <h5 className="degree">Bachelor of Interdisciplinary Studies Emphasis in Technology</h5>
            <small>Western Kentucky University</small><br />
            <small>2006</small>


            <h5 className="degree">Computer Information Systems</h5>
            <small>University of Louisville</small><br />
            <small>1998-2001</small>

        </div>


        <div className="hobbies">
            <h4 className="heading">Hobbies</h4>
            <span className="hobby"><FontAwesomeIcon icon="child" />Family Time</span>
            <span className="hobby"><FontAwesomeIcon icon="cloud-sun" />Outdoors</span>
            <span className="hobby"><FontAwesomeIcon icon="hammer" />Woodworking</span>
            <span className="hobby"><FontAwesomeIcon icon="glasses" />Reading</span>
            <span className="hobby"><FontAwesomeIcon icon="camera" />Photography</span>
            <span className="hobby"><FontAwesomeIcon icon="running" />Running</span>            
            <span className="hobby"><FontAwesomeIcon icon="car" />Working on cars</span>
            <span className="hobby"><FontAwesomeIcon icon="music" />Music</span>
            <span className="hobby"><FontAwesomeIcon icon="code-branch" />Constantly learning</span>  

        </div>


        <ContactMe
            show={modalShow}
            onHide={() => setModalShow(false)}>
        </ContactMe>

        
    </div>
    );
}

export default Bio;