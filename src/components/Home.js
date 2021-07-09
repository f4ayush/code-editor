import React from 'react'
import Editor from './Editor'
import Output from './Output'

export default function Home({ setcode, code, mode }) {
    return (
        <div className="container" style={{ display: "flex" }}>
            <Editor setcode={setcode} mode={mode} />
            <Output code={code} />
        </div>
    )
}
