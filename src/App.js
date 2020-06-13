import React from 'react';
import { NavBar } from './components/navBar/navBar'
import { About } from './components/pages/about/about'
import { Work } from './components/pages/work/work'
import { gapMaker } from './components/utils'
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App overflow-auto'>
      <Router>
        <NavBar></NavBar>
      </Router>
    </div>
  );
}

export default App;

{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}