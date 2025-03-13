import '../styles/Resume.css';
import resumePDF from '../assets/resume.pdf';

function Resume() {
  const frontEndSkills = [
    'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'React', 'Bootstrap',
    'Responsive Design', 'Version Control/Git', 'Testing/Debugging',
  ];
  
  const backEndSkills = [
    'APIs', 'Node.js', 'Express.js', 'MySQL, Sequelize', 'MongoDB, Mongoose',
    'REST', 'GraphQL',
  ];

  return (
    <section className="resume-section">
      <h2 className="section-title">Resume</h2>
      <div className="resume-content">
        <div className="resume-download">
          <p>Download my resume:</p>
          <a href={resumePDF} download className="download-btn">
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>
        
        <div className="skills">
          <div className="skill-category">
            <h3>Front-End Proficiencies</h3>
            <ul className="skill-list">
              {frontEndSkills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Back-End Proficiencies</h3>
            <ul className="skill-list">
              {backEndSkills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;