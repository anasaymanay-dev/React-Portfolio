import { useState } from "react";
import "./projects.css";
import { projectsData } from "./projectsData";

export default function Projects() {
  const [shuffle, setShuffle] = useState("all");
  const projectsList = projectsData.map((project, index) => {
    if (project.search == shuffle || shuffle == "all") {
      return (
        <article className="project" key={index}>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
            {project.icon}
          </div>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-skills">
              {project.skills.map((skill, skillIndex) => {
                return <span key={skillIndex}>{skill}</span>;
              })}
            </div>
            <div className="project-links">
              <a href={project.liveDemo} target="_blank">
                View Project{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a href={project.repoLink} target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </article>
      );
    }

    return null;
  });

  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <p className="section-subtitle">WHAT I BUILT</p>
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="heading-line"></div>
      </div>
      <div className="container">
        <div className="shuffle">
          <button
            className={shuffle == "all" ? "active" : ""}
            onClick={() => {
              setShuffle("all");
            }}
          >
            All
          </button>
          <button
            className={shuffle == "react" ? "active" : ""}
            onClick={() => {
              setShuffle("react");
            }}
          >
            React Apps
          </button>
          <button
            className={shuffle == "js" ? "active" : ""}
            onClick={() => {
              setShuffle("js");
            }}
          >
            JavaScript
          </button>
          <button
            className={shuffle == "static" ? "active" : ""}
            onClick={() => {
              setShuffle("static");
            }}
          >
            Static Websites
          </button>
        </div>
        <div className="projects-container">{projectsList}</div>
      </div>
    </section>
  );
}
