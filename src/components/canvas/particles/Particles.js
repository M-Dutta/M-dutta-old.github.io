import React from 'react';
import Particles from 'react-particles-js';

export const BGParticles = () => {
	const particleOptions  = require('./particle.json');
	return (
		<Particles params={particleOptions} />
	)
}