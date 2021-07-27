import React from 'react'
import Editor from './Editor'
import Output from './Output'

export default function Home({ setcode, code, mode, isLoaded }) {
    return (
        <div className="container" style={{ display: "flex" }}>
            {isLoaded && <Editor setcode={setcode} mode={mode} code={code}/>}
            <Output code={code} />
        </div>
    )
}
