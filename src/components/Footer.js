import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){
    return (
        <footer>
            <section className="links">
                <a href="https://github.com/MichaelSinn" rel="noreferrer" target="_blank"><i className="icon bi-github"></i></a>
                <a href="https://www.linkedin.com/in/michael-sinn" rel="noreferrer" target="_blank"><i className="icon bi-linkedin"></i></a>
                <a href="mailto:michaelsinn.contact@gmail.com"><i className="icon bi-envelope"></i></a>
            </section>
            <p>&copy; 2022 - Michael Sinn</p>
        </footer>
    );
}

export default Footer;