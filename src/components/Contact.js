import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
        <article className="container about">
            <h2>Contact</h2>
            <form>
                <input placeholder="Your email"/>
                <textarea placeholder="Message"/>
                <input placeholder="Your name"/>
            </form>
        </article>
    );
}

export default Contact;