import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [popUp, setpopUp] = useState({});

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
    setpopUp((prevState) => ({
      // prevState is the previous state of the popUp state
      ...prevState,
      [index]: !prevState[index], // Toggles the value of the index
    }));
  };

  return (
    <>
      <section className="projects" id="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>Language: {project.language}</p>
            <button className="popupBtn" onClick={() => togglePopUp(index)}>
              {" "}
              {/* Toggles the popUp state */}
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
        ))}
      </section>
    </>
  );
};

export default Projects;
