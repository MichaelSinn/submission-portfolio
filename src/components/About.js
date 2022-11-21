import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <article className="container about">
            <h2>About Me</h2>
            <img className="align-self-center" src="./logo512.png" alt="Profile"></img>
            <p>Full Stack Web Developer with a background in teaching Computer Science and a life-long dedication to
                using code to provide solutions to complex problems. Effective at communicating code functionality and
                problem-solving. Specialize in writing and maintaining backend logic. 4 years of experience writing
                JavaScript, and 5 years of experience writing Python. Secondary languages include C++, C#, and Java.</p>
        </article>
    );
}

export default About;