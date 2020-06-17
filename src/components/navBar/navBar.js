import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.css';

import {  makeStyles } from '@material-ui/core/styles';
import { AppBar, Tab, Tabs, Fade } from '@material-ui/core';

// eslint-disable-next-line
const baseDiv = document.body.childNodes[1]


const useStyles = makeStyles({
  root: {
      fontFamily: "Cabin Sketch",
      fontSize: 'larger',
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
    <div className='nav-bar'>
		<Fade in={true} timeout={1000}>
			<AppBar position='fixed'>
				<Tabs centered={true}>
					<Router>
						<Tab className={navBarStyle.root} label='About' smooth  to='/#About' component={HashLink} />
						<Tab className={navBarStyle.root} label="Work" smooth to='/#Work' component={HashLink} />
						<Tab className={navBarStyle.root} label="site-info" smooth to='/site-info' component={HashLink} />
						<Switch>
							<Route path="/#About" to='/#About'/>
							<Route path="/#Work" to='/#Work'/>
						</Switch>
					</Router>
				</Tabs>
		</AppBar>
    	</Fade>
    </div>
  )
}

export { NavBar }