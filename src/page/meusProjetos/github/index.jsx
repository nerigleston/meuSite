import FooterStatic from '../../../components/Footer/FooterStatic';
import Header from '../../../components/Header';
import './style.css';
import {
  useGitHubAutomatedRepos,
  ProjectIcons,
  StackIcons,
  StackLabels
} from 'github-automated-repos';

function MeusProjetos() {
  const data = useGitHubAutomatedRepos("nerigleston", "deploy");

  return (
    <>
    <Header />
    <div className="app-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <div className="project-header">
            {/* Project Icons */}
            {item.topics.map((icon) => (
              <ProjectIcons key={icon} className="project-icon" iconItem={icon} />
            ))}
            {/* HTML Url */}
            <a href={item.html_url} className="project-name">
              <h1>{item.name}</h1>
            </a>
          </div>

          {/* Description */}
          <p className="project-description">{item.description}</p>

          {/* Homepage */}
          {item.homepage && (
            <a href={item.homepage} className="homepage-link">
              <h3>Homepage</h3>
            </a>
          )}

          {/* Stacks Icons and Labels */}
          <div className="stack-icons-container">
            {item.topics.map((icon) => (
              <div key={icon} className="stack-item">
                <StackIcons className="stack-icon" itemTopics={icon} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <FooterStatic />
    </>
  );
}

export default MeusProjetos;