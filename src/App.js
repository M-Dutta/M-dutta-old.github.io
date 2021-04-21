import React from 'react';
import { About } from './components/about/About'
import { Experience } from './components/work/Experience'
import { Box } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
	return (
			<Box className='App' style={{ paddingTop: "35px" }}>
				<section id='about'/>
				<About />
				<Box pt={1}/>
				<section id='experience' style={{scrollMarginTop:"35px"}} />
				<Experience />
			</Box>
	)

}

export default App;
