import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Header } from './components/navBar/navBar'
import { Footer } from './components/footer/Footer'
import { theme } from './components/assets/CustomTheme'
import { ThemeProvider } from '@material-ui/core';
import * as serviceWorker from './serviceWorker';
import { BGParticles } from '../src/components/canvas/particles/Particles'
import { SideNav } from './components/sideNav/sideNav';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Header />
			<SideNav/>
			<App />
			<Footer />
		</ThemeProvider>
		<BGParticles />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
