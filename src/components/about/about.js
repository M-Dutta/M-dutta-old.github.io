import React from 'react'
import { Container, Grid, Slide, Typography, Paper } from '@material-ui/core';
import './about.css'
import { sharedStylesInitializer, GapMaker, CustomSlide } from '../common/sharedFunctions'

const myPic = require('../../static/me.jpg')

/* Intoductory Components */
const Picture = props => {
    return (
        CustomSlide(
            props.direction, props.timeout, props.delay,
            <Paper elevation={18} style={{ borderRadius: '10em' }}>
                <img className='picture' src={myPic} alt='me'></img>
            </Paper>
        )
    )

}

const Name = props => {
    return (
        <Grid container direction="column" alignItems="flex-start" justify="center" className='name' style={{ objectFit: 'scale-down' }}>
            <Grid item>
                {CustomSlide(
                    props.direction, props.timeout, props.delay,
                    <Container className='resizeable-text'>Hi, I'm Mishuk!</Container>
                )}
            </Grid>
            <Grid item>
                {CustomSlide(
                    props.direction, props.timeout, props.delay,
                    <Container className='resizeable-text'>I'm a full-stack software engineer</Container>
                )}
            </Grid>
        </Grid>
    )
}


const IntroParagraph = props => {
    const style = { textStyle: { fontFamily: 'Raleway, sans-serif', color: '#333333' } }
    const lines = [
        "I am based in Atlanta, GA.",
        "I have a passion for writing services with scalable design/architecture in mind and love putting on multiple hats.",
        "I'm experienced in the complete software lifecycle process starting from the drawing board to production deployment via CI/CD."
    ]

    let desc = lines.map((lines, index) =>
        <Grid item key={index.toString()}>
            <Container><Typography variant="body1" style={style.textStyle}>{lines}</Typography></Container>
        </Grid>
    )
    return (
        // <Fade in={true} timeout={props.timeout ? props.timeout : 1500} style={{ transitionDelay: props.delay ? props.delay : '0ms' }}>
        // <Grid container direction="column" alignItems="flex-start" justify="center" className='name'>
        //     {desc}
        // </Grid>
        // </Fade>
        CustomSlide(
            props.direction, props.timeout, props.delay,
            <Grid container direction="column" alignItems="flex-start" justify="center" className='name'>
                {desc}
            </Grid>
        )

    )
}

const About = props => {
    const sharedStyles = sharedStylesInitializer()
    let direction = props.direction? props.direction: 'left'
    return (

        <Container id='About' className={`about ${sharedStyles.sectionBase}`}>
            <Slide in={true} direction={direction} timeout={1000} mountOnEnter unmountOnExit>
                <Paper elevation={5} className={`${sharedStyles.innerBase}`}>
                    <Grid container direction="column" alignItems="center" justify="center" >
                        {GapMaker(2)}
                        <Grid item><Container><Picture delay={600} direction={direction} /></Container></Grid>
                        {GapMaker(1)}
                        <Grid item><Container><Name delay={900} direction={direction} /></Container></Grid>
                        {GapMaker(1)}
                        <Grid item><Container><IntroParagraph delay={1200} direction={direction} /></Container></Grid>
                        {GapMaker(2)}
                    </Grid>
                </Paper>
            </Slide>
        </Container>
    )
}

export { About }
