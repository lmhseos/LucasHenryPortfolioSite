import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contactForm.css';

const ContactForm = () => {
    const [formStatus, setFormStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wqswvbr', 'template_ot5okin', e.target, '7fupPFCmNa5f-tNUl')
            .then((result) => {
                console.log(result.text);
                setFormStatus('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                setFormStatus('Failed to send the message. Please try again.');
            });

        e.target.reset();
    };

    return (
        <section id="contact">
            <div className="contact-form-container">
                <h2>Contact Me</h2>
                <form className="contact-form" onSubmit={sendEmail}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." required />
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email.." required />
                    
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Write something.." required></textarea>
                    
                    <input type="submit" value="Submit" />
                </form>
                {formStatus && <p className="form-status">{formStatus}</p>}
                <div className="contact-links">
                    <a href="mailto:lmhseos@gmail.com" target="_blank" rel="noopener noreferrer">
                        Email
                    </a>
                    <a href="https://github.com/lmhseos" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/lucasmhenry/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
