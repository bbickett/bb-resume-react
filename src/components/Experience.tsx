import React from 'react';


function Experience() {

    return (

    <div className="experience">
        <p className="summary">
            An experienced Full Stack Engineer capable of delivering complex projects
            through full project life cycle, looking to obtain a position in web development
            that allows me to use my current knowledge and experience. A team player with
            excellent analytical, technical, and communication skills looking for the
            opportunity to continue to learn and be challenged.
        </p>

        <h4 className="page-heading">Experience</h4>

        <div className="job">
            <div className="dates">
                May 2016 - Present
            </div>

            <div className="position">
                <h5 className="title">Senior Systems Analyst</h5>
                <small className="company">Collier County Public Schools (CCPS)</small>

                <ul className="duties">
                    <li>Architect a new .NET Core 3.1 MVC web application that also integrates Vue.js for SCSS/JS bundling with optional 3rd party and custom single file components</li>
                    <li>Mentor all developers on .NET, SQL, and JavaScript best practices and improvements</li>
                    <li>Maintain/enhance an existing Web Forms application</li>
                    <li>Import federal/state files into SQL Server</li>
                    <li>Write custom SQL scripts for a wide variety of data reports</li>
                    <li>Redesign and implement a new database</li>
                    <li>Research practical applications of using TensorFlow to enhance student and teacher feedback</li>
                    <li>Install GitLab Community and setup GitLab Runners for CI/CD</li>
                    <li>Create/Maintain documentation using GitLab Wiki</li>
                </ul>
            </div>
        </div>


        <div className="job">
            <div className="dates">
                Feb 2016 - May 2016
            </div>

            <div className="position">
                <h5 className="title">Senior Web Applications Engineer</h5>
                <small className="company">Interop Technologies</small>

                <ul className="duties">
                    <li>Develop new features and troubleshoot issues for a proprietary web application</li>
                    <li>Architect new systems to enhance web application</li>
                    <li>Run daily standups</li>
                </ul>
            </div>
        </div>


        <div className="job">
            <div className="dates">
                Dec 2012 - Feb 2016
            </div>
            
            <div className="position">
                <h5 className="title">Database &amp; Systems Administrator</h5>
                <small className="company">Algenol Biotech</small>

                <ul className="duties">
                    <li>Architect &amp; develop custom web application (LIM System) for scientists to setup/run experiments. This includes collecting all data via
                        manual or file input, building custom user Excel reports and graphs, alerting, and interacting with other systems via RESTful API</li>
                    <li>Develop customized databases and reports from a correlating logging system</li>
                    <li>Lead and mentor other developers</li>
                    <li>Setup/Maintain/Customize Splunk and GitHub Enterprise</li>
                    <li>Customize a 3rd party SPA to continuously show, on a world map, dropped packets from all our IPS and firewalls</li>
                    <li>Write apps/services/scripts to help with different IT department tasks</li>
                </ul>
            </div>
        </div>


        <div className="job">
            <div className="dates">
                Jul 2011 - Nov 2012
            </div>
            
            <div className="position">
                <h5 className="title">JavaScript Frontend Developer</h5>
                <small className="company">Arthrex</small>

                <ul className="duties">
                    <li>Develop all HTML, CSS, and JavaScript from graphic designer mockups</li>
                    <li>Assist in developing user interfaces and designs based on requirements</li>
                    <li>Create custom JavaScript and implement/customize 3rd party plugins (Bootstrap, Chosen)</li>
                    <li>Develop site style guide</li>
                </ul>
            </div>
        </div>




        <div className="job">
            <div className="dates">
                Oct 2010 - Jul 2011
            </div>
            
            <div className="position">
                <h5 className="title">Product Manager</h5>
                <small className="company">MICROS (Oracle)</small>

                <ul className="duties">
                    <li>Manage new product development</li>
                    <li>Lead development team</li>
                    <li>Research updated libraries for development</li>
                    <li>Troubleshoot existing product issues</li>
                    <li>Code for product when needed</li>
                </ul>
            </div>
        </div>



        <div className="job">
            <div className="dates">
                Jun 2009 - Sept 2010
            </div>
            
            <div className="position">
                <h5 className="title">UI Engineer</h5>
                <small className="company">INgage Networks (formally Neighborhood America)</small>

                <ul className="duties">
                    <li>Develop/maintain core web application and code new features per client request</li>
                    <li>Style products per client designs</li>
                    <li>Work with client during kickoff meetings</li>
                    <li>Setup projects for automated builds</li>
                    <li>Document all processes/projects using internal wiki</li>
                    <li>Approve designs by creative department</li>
                </ul>
            </div>
        </div>

    </div>
    );

    }


    export default Experience;