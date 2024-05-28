import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="home" smooth={true} duration={1000}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="chatbot" smooth={true} duration={1000} offset={-220} >
                        Chatbot
                    </Link>
                </li>
                <li>
                    <Link to="experience" smooth={true} duration={1000} offset={-30}>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={1000} offset={-180}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={1200}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
