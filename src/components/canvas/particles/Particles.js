import React from 'react';
import { makeStyles,  } from '@material-ui/core';
import Particles from 'react-particles-js';

export const BGParticles = () => {
	const useStyles = makeStyles({
		Particles: {
		}
	})
	const particleOptions  = require('./particle.json');
	return (
		<Particles params={particleOptions} />
	)
}