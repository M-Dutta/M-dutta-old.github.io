import React from 'react';
import { NavBar } from './components/navBar/navBar'
import { Intro } from './components/intro/intro'
import { About } from './components/about/about'
import { Work } from './components/work/work'
import { Footer } from './components/footer/footer'
import { BrowserRouter as Router} from 'react-router-dom'
import { Box } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Box className='section-wrapper'  >
          <Intro/>
        </Box>
        <About/>
        <Work/>
      </div>
      <Footer/>
    </Router>
  )

}

export default App;


// return (
//   <Router>
//     <div className='App overflow-auto'>
//       <NavBar/>
//       <div className='section-wrapper '>
//       <Switch>
//       <Redirect exact path='/' to='/about'></Redirect>
//       <Route path='/about' component={About}></Route>
//       <Route path='/work' ></Route>
//     </Switch>
//     </div>
//   </div>
//   </Router>
// );