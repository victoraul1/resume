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
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        </div>
      </div>

      <div className="resume-body">
        <div className="resume-left">
          <section>
            <h3>Contact</h3>
            <div className="underline"></div>
            <p>PHONE: 212-123-1234</p>
            <p>EMAIL: youremail@mail.com</p>
            <p>WEB: linkedin.com/CareerReload</p>
            <p>HOME: New York, NY 33407</p>
          </section>

          <section>
            <h3>Skills</h3>
            <div className="underline"></div>
            <p><strong>DESIGN SOFTWARES:</strong> Adobe Photoshop, InDesign, Illustrator, Dreamweaver</p>
            <p><strong>WEB-BASED APPLICATIONS:</strong> WordPress, Blogger, HTML & CSS</p>
            <p><strong>RESEARCH TOOLS:</strong> Google Advanced Search, Google Analytics, SPSS</p>
            <p><strong>OFFICE TOOLS:</strong> Microsoft Word, Excel, PowerPoint, Access</p>
          </section>

          <section>
            <h3>Awards</h3>
            <div className="underline"></div>
            <p><strong>LOGO DESIGN AWARD</strong> Contest Lorem Ipsum February 2014</p>
            <p><strong>DESIGN AWARD</strong> Contest Lorem Ipsum February 2014</p>
          </section>
        </div>

        <div className="resume-right">
          <section>
            <h3>Work Experience</h3>
            <div className="underline"></div>
            <div className="job">
              <div className="job-header">
                <h4>ENTER JOB POSITION HERE</h4>
                <span>2014 - Present</span>
              </div>
              <p><em>Company / Location</em></p>
              <ul>
                <li>Managed lorem ipsum dolor sit amet dolor ipsum lorem.</li>
                <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra.</li>
                <li>Worked in variety lorem ipsum dolor ipsum.</li>
                <li>Responsible for lorem ipsum dolor sit amet lorem ipsum dolor.</li>
              </ul>
            </div>
            <div className="job">
              <div className="job-header">
                <h4>ENTER JOB POSITION HERE</h4>
                <span>2009 - 2014</span>
              </div>
              <p><em>Company / Location</em></p>
              <ul>
                <li>Managed lorem ipsum dolor sit amet dolor ipsum lorem.</li>
                <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra.</li>
                <li>Worked in variety lorem ipsum dolor ipsum.</li>
                <li>Responsible for lorem ipsum dolor sit amet lorem ipsum dolor.</li>
              </ul>
            </div>
            <div className="job">
              <div className="job-header">
                <h4>ENTER JOB POSITION HERE</h4>
                <span>2007 - 2009</span>
              </div>
              <p><em>Company / Location</em></p>
              <ul>
                <li>Managed lorem ipsum dolor sit amet dolor ipsum lorem.</li>
                <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra.</li>
                <li>Worked in variety lorem ipsum dolor ipsum.</li>
                <li>Responsible for lorem ipsum dolor sit amet lorem ipsum dolor.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Education</h3>
            <div className="underline"></div>
            <div className="education-item">
              <p><strong>MASTERS DEGREE in graphic design</strong><span>2011 - 2015</span></p>
              <p>New York University</p>
            </div>
            <div className="education-item">
              <p><strong>BACHELORS DEGREE in graphic design</strong><span>2007 - 2011</span></p>
              <p>New York College</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
