import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Head from './components/Head';
import Login from './components/Login';


function App() {

  const [code, setcode] = useState("")
  const [mode, setmode] = useState('github')
  return (
    <div>
      <Router>
        <Head setmode={setmode} mode={mode} code={code} />
        <Switch>
          <Route path="/" exact>
            <Home setcode={setcode} mode={mode} code={code} />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
