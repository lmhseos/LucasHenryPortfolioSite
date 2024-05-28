import React from 'react';
import './resume.css';
import resume from './Lucas_Henry_Resume.pdf';
const Resume: React.FC = () => {
    const handleDownload = () => {
        const resumePath = resume;

        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'resume.pdf';

        document.body.appendChild(link);

        link.click();

    
        document.body.removeChild(link);
    };

    return (
        <section id="resume" className="resume">
        <div>
            <button onClick={handleDownload}>Download Resume</button>
        </div>
        </section>
    );
};

export default Resume;