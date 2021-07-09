import React, { useState } from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"


export default function Editor({ setcode, mode }) {
    const [value, setvalue] = useState('')
    const handleClick = () => {
        setcode(value)
    }
    const onChange = (newValue) => {
        console.log("change", newValue);
        setvalue(newValue)
    }
    return (
        <div className='editor-container'>
            <AceEditor
                mode="html"
                theme={mode}
                placeholder="Start coding.........."
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                height="95%"
                width="100%"
                fontSize="20px"
                editorProps={{ $blockScrolling: true }}
            />
            <button style={{ height: '5%', width: '100%', color: 'black', fontSize: 'larger', fontWeight: 'bold' }} onClick={handleClick}>Run</button>
        </div>
    )
}
