import React from 'react'
import { Container, makeStyles} from '@material-ui/core';
import { CustomSlide } from '../common/sharedFunctions'

const useStyles = makeStyles((theme) => ({
	img: {
		maxWidth: '400px',
		borderRadius: '20px',
		[theme.breakpoints.down('xs')]: {
			maxWidth: "360px"
		},
	}
}));

export const MyPicture = props => {
	const classes = useStyles();
	const myPic = require('../../static/me.jpg')
	return (
		<CustomSlide direction={props.direction} timeout={props.timeout} delay={props.delay}>
			<Container>
			<img className={classes.img} src={myPic} alt='me'></img>
			</Container>
		</CustomSlide>
	)
}