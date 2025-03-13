import '../styles/Home.css';
// Import your profile photo when available
import profilePhoto from '../assets/profile-photo.jpg';

function Home() {
  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
        <img src={profilePhoto} alt="Developer profile" className="profile-photo" />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm a Full Stack Web Developer specializing in creating 
            responsive and user-friendly applications. With a background in 
            background in Digital Marketing, Management and Sales. Learning has always been a strong suit as well as a genuine appreciation for a challenge. Effectively
honing skills daily using attention to detail to solve problems and complex tasks. I enjoy coding and do my best to learn a bit more of anything every day!
          </p>
          <p>
            My journey in web development began February of 2024. Since then, 
            I've been continuously learning and expanding my skill set to 
            include modern technologies like React, Node.js, Javascript, HTML, CSS, SQL, Python,Typescript, Prompt
            Engineering, and AI Training
          </p>
          <p>
            When I'm not coding, you can find me in a discord lobby or at the Gym improving myself in other ways.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;