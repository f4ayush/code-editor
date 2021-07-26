import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom';
import { save } from "../api/index.js";
import decode from 'jwt-decode';
export default function Head({ mode, setmode, code }) {
    const history = useHistory()
    const location = useLocation();
    const [isLogged, setisLogged] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('codeUser')));
    const logout = () => {
        localStorage.clear();
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('codeUser')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

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
    const Save = async () =>{
        if(user !== null && user){
            console.log(code)
            try {
                const userId = user?.data?.result?._id
                await save({userId, code})
            } catch (error) {
                console.log(error)
            }
        }else{
            history.push('/login')
        }
    }
    return (
        <div className="head">
            <div className="head-buttons">
                <button className='mode-button' style={{ background: mode === 'github' ? 'black' : 'white', color: mode !== 'github' ? 'black' : 'white' }} onClick={handleClick}>mode</button>
                <button className='save-button' onClick={TextFile}>Download</button>
                <button className='save-button' onClick={Save}>Save</button>
            </div>
            <Link to="/"><h2>Front End Editor</h2></Link>
            <div className="auth-buttons">
                {user !== null && user ? <button className="mode-button" onClick={logout}>Log Out</button> : <button className="mode-button" onClick={() => { history.push('/login') }}>Login</button>}
            </div>
        </div>
    )
}
