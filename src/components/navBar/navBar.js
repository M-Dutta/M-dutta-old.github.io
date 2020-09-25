import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.css';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tab, Tabs, Fade } from '@material-ui/core';

const useStyles = makeStyles({
  navBar: { backgroundColor: 'rgb(19 17 17 / 84%)' },
  fontStyle: {
    fontFamily: "Cabin Sketch",
    fontSize: 'larger',
    color: 'aliceblue',
    opacity: 1,
    "&:hover": {
      textDecoration: 'underline'
    },
    "&.active": {
      opacity: 1
    }
  }
});

const NavBar = props => {
  const navBarStyle = useStyles()


  return (
    <Fade in={true} timeout={3000}>
      <AppBar className={navBarStyle.navBar} position='fixed'>
        <Tabs centered={true}>
          <Router>
            <Tab className={navBarStyle.fontStyle} label='About' smooth to='/#About' component={HashLink} />
            <Tab className={navBarStyle.fontStyle} label="Skills & Tech" smooth to='/#SkillsAndTech' component={HashLink} />
            <Tab className={navBarStyle.fontStyle} label="site-info" smooth to='/site-info' component={HashLink} />
            <Switch>

            </Switch>
          </Router>
        </Tabs>
      </AppBar>
    </Fade>
  )
}

export { NavBar }