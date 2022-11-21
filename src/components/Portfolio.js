import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n" +
            "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n" +
            " ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
            " aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n" +
            " in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur \n",
        technologies: ["React", "Node", "MongoDB", "Express"],
        src: "",
        alt: "Project hero image"
    },
    {
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n" +
            "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n" +
            " ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
            " aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n" +
            " in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur \n",
        technologies: ["React", "Node", "MongoDB", "Express"],
        src: "",
        alt: "Project hero image"
    },
    {
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n" +
            "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n" +
            " ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
            " aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n" +
            " in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur \n",
        technologies: ["React", "Node", "MongoDB", "Express"],
        src: "",
        alt: "Project hero image"
    }
];

function Portfolio() {
    return (
        <article className="container about">
            <h2>Portfolio</h2>
            {projects.map(project => {
                return (
                    <ProjectCard project={project}/>
                );
            })}
        </article>
    );
}

export default Portfolio;