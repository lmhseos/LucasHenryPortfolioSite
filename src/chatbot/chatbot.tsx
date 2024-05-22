import React, { useState } from 'react';

const Chatbot: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:5233/api/rag/ask', {
                method: 'POST',
                body:  JSON.stringify({ text: input }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            setOutput(data.output || 'No response received.');
        } catch (error) {
            console.error('Error:', error);
            console.log('Error:', error)
            setOutput('An error occurred while fetching the response.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={input} 
                    onChange={handleInputChange} 
                    placeholder="Type your question here..."
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>
            <div>{output}</div>
        </div>
    );
};

export default Chatbot;
