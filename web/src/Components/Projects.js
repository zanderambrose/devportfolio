import React from "react";

const Projects = ({ data }) => {
  if (data) {
    var projects = data.map((project)=>{
      return (
        <div>
          <section key={project.title} className="project">
            <div className="projectTitle">
              <h1>{project.title}</h1>
              <img src={project.img} alt="project thumbnail"/>
            </div>
            <div className="projectInfo">
                <p><strong>Tech Stack/Skills Demonstrated</strong></p>
                <ul>
                  {project.techStackSkills.map((item)=>{
                    return (
                    <li>
                      {item}
                    </li>
                    )
                  })}
                </ul>
                <a href={project.url} target="_blank" rel="noreferrer"><button>Project Link</button></a>
                <a href={project.github} target="_blank" rel="noreferrer"><button>Github Code</button></a>
            </div>
          </section>
          <hr/>
        </div>
        
      )
    })
  }

  return (
    <section id="projects">
      {projects}
    </section>
  );
};

export default Projects;
