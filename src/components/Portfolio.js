import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Social Network API",
        description: "A social network web API where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
        technologies: ["JavaScript", "RESTful API", "Express", "Node.js", "MongoDB"],
        src: "logo512.png",
        alt: "Project hero image",
        github: "https://github.com/MichaelSinn/social-network-api",
        deployUrl: "",
        deployed: false
    },
    {
        title: "Game Hosting Site",
        description: "This is a game hosting site where you can play browser games, as well as track your high " +
            "scores against yourself and your friends. Our motivation for developing this was because we felt that " +
            "there aren’t many game hosting websites like Miniclip and AddictingGame left and wanted to bring " +
            "back a bit of the early 2000s internet.",
        technologies: ["JavaScript", "Sequelize", "Express", "Node.js", "MySQL"],
        src: "logo512.png",
        alt: "Project hero image",
        github: "https://github.com/MichaelSinn/game-hosting-site",
        deployUrl: "https://game-hosting-site.herokuapp.com/",
        deployed: true
    },
    {
        title: "Camping JRNL",
        description: "Camp JRNL gives prospective campers the capability to retrieve this crucial information, " +
            "allowing them to make informed decisions. Furthermore, Camp JRNL allows users to submit information" +
            " on campsites they have reviewed, ultimately providing more data to new users planning their next " +
            "trip! Camp JRNL serves as a reference for current and prospective campers.",
        technologies: ["JavaScript", "HTML", "CSS", "Google Maps API"],
        src: "logo512.png",
        alt: "Project hero image",
        github: "https://github.com/MichaelSinn/camping-journal",
        deployUrl: "https://michaelsinn.github.io/camping-journal/",
        deployed: true
    },
    {
        title: "E-Commerce Backend",
        description: "The backend API service for an ecommerce store. This application stores and manipulates" +
            " data about the stores inventory through MySQL and the Sequelize library.",
        src: "logo512.png",
        technologies: ["JavaScript", "Sequelize", "Express", "Node.js", "MySQL"],
        alt: "Project hero image",
        github: "https://github.com/MichaelSinn/e-commerce-backend",
        deployUrl: "",
        deployed: false
    },
    {
        title: "Victim Generator",
        description: "This website randomly chooses a name from a class list when a button is pressed.",
        src: "logo512.png",
        technologies: ["JavaScript", "HTML", "CSS"],
        alt: "Project hero image",
        github: "https://github.com/MichaelSinn/victim-generator",
        deployUrl: "https://michaelsinn.github.io/victim-generator/",
        deployed: true
    },
    {
        title: "Team Generator",
        description: "This project takes a user's inputs about their team through the command line and " +
            "generates an HTML and CSS file to display information about their team. This saves time for the" +
            " developer as well as adds ease of use for their users",
        src: "logo512.png",
        technologies: ["JavaScript", "HTML", "CSS"],
        alt: "Project hero image",
        github: "https://github.com/MichaelSinn/team-generator",
        deployUrl: "",
        deployed: false
    },
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