import '../styles/Project.css';

function Project({ title, image, deployedLink, githubLink, description }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          <div className="project-links">
            <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default Project;