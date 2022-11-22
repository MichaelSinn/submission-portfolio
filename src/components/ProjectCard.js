import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: Style the links for view github and deployment

function ProjectCard({project}) {
    return (
        <article className="container row project-card">
            <section className="col-8">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <section className="card-footer">
                    {project.deployed ? <a className="card-button" href={project.deployUrl}>View Deployment</a> : null}
                    <a className="card-button" href={project.github}>View GitHub</a>
                    <section className="technologies">
                        {project.technologies.map(tech => {
                            return (
                                <div>{tech}</div>
                            );
                        })}
                    </section>
                </section>
            </section>
            <section className="col-4 d-flex justify-content-end">
                <img src={project.src} alt={project.alt}></img>
            </section>
        </article>
    );
}

export default ProjectCard;