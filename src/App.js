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
    <Router>
      <div className='App overflow-auto'>
        <NavBar/>
        <div className='section-wrapper '>
        <Switch>
        <Route path='/' exact component={About}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/work' ></Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;