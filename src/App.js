import React from 'react';
import { NavBar } from './components/navBar/navBar'
import { ExternalUrls } from './components/sideNav/sideNav'
import { BrowserRouter as Router } from 'react-router-dom'
import { Box } from '@material-ui/core';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Background.css'
const SkillsAndTech = React.lazy(() => import('./components/skillsAndTech/skillsAndTech').then(module => ({ default: module.SkillsAndTech })));

function App() {
	

	return (
		<div className='App'>
			<ExternalUrls></ExternalUrls>
			<NavBar />
		</div>
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

// {/* <Router>
// <div className='App'>
// 	{/* <div class="bg"></div> */}
// 	<NavBar />
// 		<Box className='section-wrapper' mb={7}	>
// 			<ExternalUrls></ExternalUrls>
// 			<About />
// 			<Suspense fallback={<div>Loading...</div>}>
// 				<SkillsAndTech />
// 			</Suspense>
// 		</Box>
// </div>
// {/* <Footer/> */}

// </Router>
// ) */}