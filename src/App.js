import { useState } from 'react'
import './App.css';
import Home from './components/Home'
import Head from './components/Head';


function App() {

  const [code, setcode] = useState("")
  const [mode, setmode] = useState('github')

  return (
    <div>
      <Head setmode={setmode} mode={mode} code={code} />
      <Home setcode={setcode} mode={mode} code={code} />
    </div>
  );
}

export default App;
