import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tab, Tabs, Fade } from '@material-ui/core';

import { About } from '../about/about'
import { SkillsAndTech } from '../skillsAndTech/skillsAndTech'


const useStyles = makeStyles({
	navBar: { backgroundColor: 'rgb(255 255 255 / 78%)' },
	fontStyle: {
		fontFamily: "Cabin Sketch",
		fontSize: 'larger',
		color: '#7f8c8d',
		opacity: 1,
		"&:hover": {
			textDecoration: 'underline',
			// color: '#09C269',
			color: '#2d8cff'
		},
		"&:active": {
			opacity: 1,
			color: '#3c5498'
		}
	}
});

const NavBar = props => {
	const navBarStyle = useStyles()
	const [section, setSection] = useState(<About />)

	return (
		<React.Fragment>
			<Fade in={true} timeout={3000}>
				<AppBar className={navBarStyle.navBar} position='fixed'>
					<Tabs centered={true}>
						<Router>
							<Tab className={navBarStyle.fontStyle} label='About' onClick={() => setSection(<About />)} />
							<Tab className={navBarStyle.fontStyle} label='Skills & Tech' onClick={() => setSection(<SkillsAndTech />)}  />
							<Tab className={navBarStyle.fontStyle} label='site-info' onClick={() => setSection(null)}  />
							<Switch></Switch>
						</Router>
					</Tabs>
				</AppBar>
			</Fade>
			{section}
		</React.Fragment>
	)
}

export { NavBar }