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
            <h3>Contact</h3>
            <div className="underline"></div>
            <p>(818) 721-6496</p>
            <p>victorgalindo475@gmail.com</p>
            <p>www.victorgalindo.com</p>
            <p>Long Beach, CA 90807</p>
          </section>

          <section>
            <h3>Skills</h3> 
            <div className="underline"></div>
            <p><strong>DESIGN SOFTWARES:</strong> Adobe Photoshop, Adobe Premierer</p>
            <p><strong>Programming:</strong> HTML, CSS, Javascript React, Python, Flutter</p>
            <p><strong>Analytics:</strong> Google Analytics, Adobe Analytics</p>
            <p><strong>AI: </strong>chatGPT, NLP, Machine Learning, Generative AI</p>
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
