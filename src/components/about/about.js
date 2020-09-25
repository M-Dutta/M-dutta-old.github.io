import React from 'react'
import { Container, Grid, Slide, Typography } from '@material-ui/core';
import './about.css'
import { Header, elevate, sharedStylesInitializer, GapMaker } from '../common/sharedFunctions'

const myPic = require('../../static/me.jpg')

/* Intoductory Components */
const Picture = props => { return (<Slide in={true} direction='down' timeout={1000}><img className='picture' src={myPic} alt='me'></img></Slide>) }

const Name = props => {
    return (
        <Grid container direction="column" alignItems="flex-start" justify="center" className='name' style={{ objectFit: 'scale-down' }}>
            <Grid item><Slide in={true} direction='left' timeout={1000}><Container className='resizeable-text'>Hi, I'm Mishuk!</Container></Slide></Grid>
            <Grid item><Slide in={true} direction='right' timeout={1000}><Container className='resizeable-text'>I'm a full-stack software engineer</Container></Slide></Grid>
        </Grid>
    )
}


const IntroParagraph = props => {
    const style = { aliceblue: { fontFamily: 'Raleway, sans-serif', color: 'aliceblue' } }
    const lines = [
        "I am based in Atlanta, GA.",
        "I have a passion for writing services with scalable design/architecture in mind and love putting on multiple hats.",
        "I'm experienced in the complete software lifecycle process starting from the drawing board to production deployment via CI/CD."
    ]

    let desc = lines.map((lines, index) =>
        <Grid item key={index.toString()}>
            <Container><Typography variant="body1" style={style.aliceblue}>{lines}</Typography></Container>
        </Grid>
    )
    return (
        <Slide in={true} direction='up' timeout={1000}>
            <Grid container direction="column" alignItems="flex-start" justify="center" className='name'>
                {desc}
            </Grid>
        </Slide>
    )
}

const About = props => {
    const sharedStyles = sharedStylesInitializer()
    return (
        <Container id='About' className={`about ${sharedStyles.sectionBase}`}>
            {Header("About")}
            <Container style={elevate}>
                <Grid container direction="column" alignItems="center" justify="center" >
                    {GapMaker(2)}
                    <Grid item><Container><Picture /></Container></Grid>
                    {GapMaker(1)}
                    <Grid item><Container><Name /></Container></Grid>
                    {GapMaker(1)}
                    <Grid item><Container><IntroParagraph /></Container></Grid>
                    {GapMaker(2)}
                </Grid>
            </Container>
        </Container>
    )
}

export { About }
