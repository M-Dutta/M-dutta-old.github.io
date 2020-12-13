import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
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
	const [section, setSection] = useState(<About />);
	const [sectionNum, setSectionNum] = useState(1);

	const computeDirection = (sectionNumber) => {
		if (sectionNumber < sectionNum)
			return 'right'
		return 'left'
	}

	const renderSection = (sectionNumber) => {
		switch (sectionNumber) {
			case 1:
				setSection(<About direction={computeDirection(sectionNumber)} />)
				break;
			case 2:
				setSection(<SkillsAndTech direction={computeDirection(sectionNumber)} />)
				break;
			case 3:
				setSection(null)
				break;
			default:
				setSection(<About />)
				break;
		}
		setSectionNum(sectionNumber)
	}

	return (
		<React.Fragment>
			<Fade in={true} timeout={3000}>
				<AppBar className={navBarStyle.navBar} position='fixed'>
					<Router>
						<Tabs centered={true} value={sectionNum} position='fixed' indicatorColor='primary'>
							<Tab value={1} className={navBarStyle.fontStyle} label='About' onClick={() => renderSection(1)} />
							<Tab value={2} className={navBarStyle.fontStyle} label='Skills & Tech' onClick={() => renderSection(2)} />
							<Tab value={3} className={navBarStyle.fontStyle} label='site-info' onClick={() => renderSection(3)} />
							<Switch></Switch>

						</Tabs>
					</Router>
				</AppBar>
			</Fade>
			{section}
		</React.Fragment>
	)
}

export { NavBar }