import React from 'react'


export default function Output({ code }) {
    return (
        <div className='output-container'>
            <iframe srcDoc={code} frameBorder="0" allowFullScreen={true} />
        </div>
    )
}
