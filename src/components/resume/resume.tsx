import React from 'react';
import './resume.css';
import resume from './Lucas_Henry_Resume.pdf';
const Resume: React.FC = () => {
    const handleDownload = () => {
        // Replace 'resume.pdf' with the actual path to your PDF resume file
        const resumePath = resume;

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'resume.pdf';

        // Append the link to the document body
        document.body.appendChild(link);

        // Trigger the click event on the link
        link.click();

        // Remove the link from the document body
        document.body.removeChild(link);
    };

    return (
        <div>
            <button onClick={handleDownload}>Download Resume</button>
        </div>
    );
};

export default Resume;