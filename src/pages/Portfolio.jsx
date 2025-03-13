import Project from '../components/Project';
import '../styles/Portfolio.css';

// Import project images
import project1 from '../assets/project1.jpg';
//import project2 from '../assets/projects/project2.jpg';
//import project3 from '../assets/projects/project3.jpg';
//import project4 from '../assets/projects/project4.jpg';
//import project5 from '../assets/projects/project5.jpg';
//import project6 from '../assets/projects/project6.jpg';

function Portfolio() {
    const projects = [
      {
        id: 1,
        title: 'Google Book Search Engine',
        description: 'A search engine synced with Google Books API Built with RESTful API and refactored to be a GraphQL API build with Apollo Server',
        image: '../assets/project1.jpg',
        deployedLink: 'https://book-search-engine-v53k.onrender.com/',
        githubLink: 'https://github.com/Martin-rojo/Book-Search-Engine',
      },

  ];

  return (
    <section className="portfolio-section">
      <h2 className="section-title">Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;