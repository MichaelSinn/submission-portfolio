import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

/*TODO:
    WHEN I am presented with the Resume section
    THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
*/

const skills = [
    "JavaScript",
    "Python",
    "SQL",
    "Shell Scripting",
    "HTML/CSS",
    "React",
    "Express",
    "Node.js",
    "Bootstrap",
    "Flask",
    "RESTful APIs",
    "Graph QL"
]

function About() {
    return (
        <article className="container-fluid about">
            <h2>Resume</h2>
            <a className="btn btn-primary" href="public/FILLER RESUME.pdf" download>Download resume</a>
            <h3 className="mt-3">Skills</h3>
            <ul>
                {skills.map(skill =>{
                    return (<li>{skill}</li>)
                })}
            </ul>
        </article>
    );
}

export default About;