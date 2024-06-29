import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <div className="profile-pic">
          <img src="profile.jpeg" alt="Profile" />
        </div>
        <div className="header-info">
          <h1>Victor R Galindo</h1>
          <h2>Web Developer</h2>
          <p>Contribute to the growth of a company or corporation by developing solutions to current business challenges.</p>
        </div>
      </div>

      <div className="resume-body">
        <div className="resume-left">
          <section>
            <h3>Contact:</h3>
            <div className="underline"></div>
            <p>(818) 721-6496</p>
            <p>victorgalindo475@gmail.com</p>
            <p>www.victorgalindo.com</p>
            <p>Long Beach, CA 90807</p>
          </section>

          <section>
            <h3>Skills</h3> 
            <div className="underline"></div>
            <p><strong>Programming:</strong> HTML, CSS, Javascript, Node.js, nginx, React, Python, Flutter</p>
            <p><strong>Analytics:</strong> Google Analytics, Adobe Analytics</p>
            <p><strong>AI: </strong>chatGPT, NLP, Machine Learning, Generative AI</p>
            <p><strong>Design Software:</strong> Adobe Photoshop, Adobe Premiere</p>
          </section>

          <section>
            <h3>Projects | Portfolio</h3>
            <div className="underline"></div>
            
            <p><strong>React</strong> www.readmysubjectline.com</p>
            <p><strong>PHP</strong> www.moveyourcar.org</p>
            <p><strong>Flutter</strong> www.constitucion.pe</p>
            <p><strong>Wordpress</strong><br /> www.mimenu.pe<br /> www.automovil.tech<br /> www.elecciones2026.pe<br /> www.hn-rewards.com</p>
            
          </section>

          <section>
            <h3>Certifications</h3>
            <div className="underline"></div>
            <p><strong>Salesforce</strong> Certified Marketing Cloud Email Specialist</p>
            
          </section>
        </div>

        <div className="resume-right">
          <section>
            <h3>Work Experience</h3>
            <div className="underline"></div>
            <div className="job">
              <div className="job-header">
                <h4>Digital Marketing Specialist</h4>
                <span>2022 - Present</span>
              </div>
              <p>Herbalife | Torrance, CA</p>
             <br />
              <ul>
                Email Studio:
                <li>Build, test, deploy, and metrics report</li>
                <li>Email journey building</li>
                <li>Audience segmentation and automations</li>
              </ul>

              <ul>
                SMS:
                <li>Setup and schedule sends</li>
                <li>Audience list management</li>
                <li>Process documentation and training</li>
              </ul>

              <ul>
                Adobe Experience Manager:
                <li>Build and update pages</li>
                <li>Setup e-commerce product pages</li>
                <li>Asset management</li>
              </ul>

              <ul>
              Strategy:
                <li>Provide recommendatons based on metrics</li>
                <li>Build wireframes for better engagement</li>
                <li>Advice on Email subject lines and pre-header</li>
              </ul>

            </div>
            <div className="job">
              <div className="job-header">
                <h4>Salesforce Email Studio Administrator</h4>
                <span>2018 - 2020</span>
              </div>
              <p>Fox 20th Century Studios | Century City, CA</p>
             
              <ul>
                Email Studio:
                <li>Build, test, deploy, provide reports</li>
                <li>Email journey building</li>
                <li>SFMC user administration</li>
                <li>OKTA admin</li>
                <li>Audience segmentation</li>
              </ul>

              <ul>
              Web CMS
                <li>Build and update pages</li>
                <li>Google Analytics admin</li>
              </ul>
            </div>
            <div className="job">
              <div className="job-header">
                <h4>Web Operations Developer</h4>
                <span>2017 - 2018</span>
              </div>
              <p>American Botanical Pharmacy | Marina del Rey, CA</p>
              <ul>
              Mailchimp Administrator:
              <li>Build, test, deploy, and metrics report</li>
              <li>Email automations</li>
              <li>Audience segmentation</li>
              </ul>

              <ul>
              CMS Management:
              <li>Build and update pages</li>
              <li>Setup e-commerce product pages</li>
              <li>Asset management</li>
              <li>Google Analytics metrics</li>
              <li>Social media PPC campaign management</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header">
                <h4>Web Content Publisher</h4>
                <span>2013 - 2017</span>
              </div>
              <p>Herbalife | Torrance, CA</p>
              <ul>
              Salesforce ExactTarget:
              <li>Build, test, deploy, and metrics report</li>
              <li>Email journey building</li>
              <li>Audience segmentation and automations</li>
              <li>Process documentation and training</li>
              </ul>

              <ul>
              Teamsite (CMS):
              <li>Build and update pages</li>
              <li>Setup e-commerce product pages</li>
              <li>Asset management</li>
              </ul>

              <ul>
                SMS:
                <li>Setup and schedule sends</li>
                <li>Audience list management</li>
                <li>Process documentation and training</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Education</h3>
            <div className="underline"></div>
            <div className="education-item">
              <p><strong>BACHELORS DEGREE in Information Technology</strong><span> 2014 - 2017</span></p>
              <p>University of Phoenix</p>
            </div>
            <div className="education-item">
              <p><strong>ASSOCIATES DEGREE in Computer Networking</strong><span> 2004 - 2007</span></p>
              <p>College of the Canyons</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
