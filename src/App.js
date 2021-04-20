import React from 'react';
import { About } from './components/about/About'
import { Experience } from './components/work/Experience'
import { Box } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
	return (
			<Box className='App' style={{ paddingTop: "3.5rem" }}>
				<section id='about'/>
				<About />
				<section id='experience' style={{scrollMarginTop:"3.5rem"}} />
				<Experience />
			</Box>
	)

}

export default App;
