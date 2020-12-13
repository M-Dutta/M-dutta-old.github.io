import React from 'react';
import { NavBar } from './components/navBar/navBar'
import { ExternalUrls } from './components/sideNav/sideNav'
import { Footer } from './components/footer/footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	

	return (
		<React.Fragment>
		<div className='App'>
			<ExternalUrls/>
			<NavBar />
		</div>
		<Footer/>
		</React.Fragment>
	)

}

export default App;