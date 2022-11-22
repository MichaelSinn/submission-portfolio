import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    const [email, updateEmail] = useState('');
    const [message, updateMessage] = useState('');
    const [name, updateName] = useState('');
    const [errors, updateErrors] = useState([]);
    const sendMessage = (e) => {
        e.preventDefault();
        updateEmail('');
        updateName('');
        updateMessage('');
    }

    return (
        <article className="container about">
            <h2>Contact</h2>
            <form onSubmit={sendMessage}>
                <div className="form-group">
                    <label htmlFor="emailInput">Email address</label>
                    <input type="email" value={email} className="form-control" id="emailInput"
                           aria-describedby="emailHelp"
                           placeholder="Enter email" onChange={(e) => {
                        updateEmail(e.target.value);
                    }} onBlur={(e) => {
                        if (/.+@.+\..+/.test(email) === false && !errors.includes('Email is invalid')) updateErrors([...errors, 'Email is invalid']);
                        else {
                            const updatedErrors = errors.map(error=>{
                                return (error !== 'Email is invalid');
                            })
                            updateErrors(updatedErrors);
                        };
                    }}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="nameInput">Full name</label>
                    <input type="text" value={name} className="form-control" id="nameInput" placeholder="John Smith"
                           onChange={(e) => {
                               updateName(e.target.value);
                           }} onBlur={(e) => {
                        if (name.length === 0 && !errors.includes('Name is empty')) updateErrors([...errors, 'Name is empty']);
                        else {
                            const updatedErrors = errors.map(error=>{
                                return (error !== 'Name is empty');
                            })
                            updateErrors(updatedErrors);
                        }
                    }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="messageInput">Your message</label>
                    <textarea className="form-control" id="messageInput" rows="7" value={message} onChange={(e) => {
                        updateMessage(e.target.value);
                    }} onBlur={(e) => {
                        if (message.length === 0 && !errors.includes('Message is empty')) updateErrors([...errors, 'Message is empty']);
                        else {
                            const updatedErrors = errors.map(error=>{
                                return (error !== 'Message is empty');
                            })
                            updateErrors(updatedErrors);
                        }
                    }}></textarea>
                </div>
                {errors.map(error => {
                    return (<p className="text-danger">{error}</p>);
                })}
                <button type="submit" className="card-button">Submit</button>
            </form>
        </article>
    );
}

export default Contact;