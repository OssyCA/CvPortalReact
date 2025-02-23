import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [popUp, setPopUp] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/OssyCA/repos"
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    };

    fetchProjects();
  }, []);

  function ifNull(
    value,
    replaceValue = "No description provided for this project"
  ) {
    return value ? value : replaceValue;
  }

  const togglePopUp = (index) => {
    setPopUp((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      {isLoading ? (
        <p id="loadingP">Loading projects...</p>
      ) : (
        projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>Language: {project.language}</p>
            <button className="popupBtn" onClick={() => togglePopUp(index)}>
              Read more
            </button>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github link
            </a>
            {popUp[index] && (
              <div className="popUpOpen">
                <p>{ifNull(project.description)}</p>
                <button className="popupBtn" onClick={() => togglePopUp(index)}>
                  Close
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </section>
  );
};

export default Projects;
