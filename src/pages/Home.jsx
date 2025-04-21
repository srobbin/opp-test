import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome</h1>
      <div className="projects-list">
        <Link to="/project1" className="project-link">Project 1</Link>
        <Link to="/project2" className="project-link">Project 2</Link>
      </div>
    </div>
  );
}

export default Home;
