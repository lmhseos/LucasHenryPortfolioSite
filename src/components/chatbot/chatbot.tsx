import React, { useState } from 'react';
import './chatbot.css';

const Chatbot: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('https://localhost:7045/api/rag/ask', {
                method: 'POST',
                body: input ,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            setOutput(data.output || 'No response received.');
        } catch (error) {
            console.error('Error:', error);
            setOutput('An error occurred while fetching the response.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="chatbot" className="chatbot">
        <div className="chatbot-container">
            <h1>Chatbot</h1>
            <div className="chatbot-output">
                {output}
            </div>
            <form onSubmit={handleSubmit} className="chatbot-form">
                <textarea 
                    value={input} 
                    onChange={handleInputChange} 
                    placeholder="Type your question here..."
                    className="chatbot-input"
                />
                <button type="submit" disabled={isLoading} className="chatbot-button">
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>
        </div>
        </section>
    );
};

export default Chatbot;
