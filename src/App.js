import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getCode } from "./api/index";
import './App.css';
import Home from './components/Home'
import Head from './components/Head';
import Login from './components/Login';


function App() {

  const [code, setcode] = useState("")
  const [mode, setmode] = useState('github')
  const [userId, setuserId] = useState(JSON.parse(localStorage.getItem('codeUser'))?.data?.result?._id);
  const [isLoaded, setisLoaded] = useState(false)

  const getData = async () => {
    try {
      if (userId) {
        const { data } = await getCode(userId)
        console.log(data)
        setcode(data)
      }
      setisLoaded(true)
    } catch (error) {
      console.log(error);
      // setcode("")
    }
  }
  useEffect(() => {
    getData()
    // setcode(data)
  }, [userId])

  return (
    <div>
      <Router>
        <Head setmode={setmode} mode={mode} code={code} />
        <Switch>
          <Route path="/" exact>
            <Home setcode={setcode} mode={mode} code={code} isLoaded={isLoaded} />
          </Route>
          <Route path="/login" exact>
            <Login setuserId={setuserId} />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
