import React from 'react'

export default function Head({ mode, setmode, code }) {
    const handleClick = () => {
        const newMode = mode === 'github' ? 'monokai' : 'github'
        setmode(newMode)
    }
    const TextFile = () => {
        if (code !== '') {
            const element = document.createElement("a");
            const file = new Blob([code], { type: 'text/plain' });
            element.href = URL.createObjectURL(file);
            element.download = "downlaod.txt";
            document.body.appendChild(element); // Required for this to work in FireFox
            element.click();
        }
    }
    return (
        <div className="head">
            <div className="head-buttons">
                <button className='mode-button' style={{ background: mode === 'github' ? 'black' : 'white', color: mode !== 'github' ? 'black' : 'white' }} onClick={handleClick}>mode</button>
                <button className='save-button' onClick={TextFile}>Save</button>
            </div>
            <h2>Front End Editor</h2>
        </div>
    )
}
