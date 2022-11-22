import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <article className="container about">
            <h2>About Me</h2>
            <img className="align-self-center profile" src="https://avatars.githubusercontent.com/u/23462268?s=400&u=4c77fe4c9dd142cadd108ede397d5771a3ef0245&v=4" alt="Profile"></img>
            <p>Full Stack Web Developer with a background in teaching Computer Science and a life-long dedication to
                using code to provide solutions to complex problems. Effective at communicating code functionality and
                problem-solving. Specialize in writing and maintaining backend logic. 4 years of experience writing
                JavaScript, and 5 years of experience writing Python. Secondary languages include C++, C#, and Java.</p>
        </article>
    );
}

export default About;