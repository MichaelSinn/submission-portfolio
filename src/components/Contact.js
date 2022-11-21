import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

/* TODO:
    WHEN I move my cursor out of one of the form fields without entering text
    THEN I receive a notification that this field is required
    WHEN I enter text into the email address field
    THEN I receive a notification if I have entered an invalid email address

Use states to achieve this
*/

function Contact() {
    return (
        <article className="container about">
            <h2>Contact</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="emailInput">Email address</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="nameInput">Full name</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="John Smith"/>
                </div>
                <div className="form-group">
                    <label htmlFor="messageInput">Your message</label>
                    <textarea className="form-control" id="messageInput" rows="7"></textarea>
                </div>
                <button type="submit" className="card-button">Submit</button>
            </form>
        </article>
);
}

export default Contact;