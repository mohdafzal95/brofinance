// src/pages/AlgorithmBuilder.jsx
import React, { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

const AlgorithmBuilder = () => {
    const [algorithmName, setAlgorithmName] = useState('');
    const [code, setCode] = useState('// Write your algorithm here...');
    const [language, setLanguage] = useState('javascript'); // Default to JavaScript

    const handleSave = () => {
        // Logic to save the algorithm
        console.log('Algorithm Saved:', { name: algorithmName, code, language });
    };

    const handleExecute = () => {
        // Logic to execute the algorithm
        console.log('Executing Algorithm:', { name: algorithmName, code, language });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Algorithm Builder</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Algorithm Name"
                    value={algorithmName}
                    onChange={(e) => setAlgorithmName(e.target.value)}
                    className="bg-gray-200 p-2 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="mr-2">Select Language:</label>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-gray-200 p-2 rounded-md"
                >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                </select>
            </div>
            <CodeEditor
                value={code}
                language={language}
                placeholder="// Write your algorithm here..."
                onChange={(evn) => setCode(evn.target.value)}
                style={{
                    height: '300px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            />
            <div className="mt-4 flex justify-between">
                <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Save
                </button>
                <button
                    onClick={handleExecute}
                    className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                >
                    Execute
                </button>
            </div>
        </div>
    );
};

export default AlgorithmBuilder;