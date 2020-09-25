import React from 'react'
import { Container, Grid, Slide, Typography, makeStyles, Fade } from '@material-ui/core';
import './about.css'
import { Header, elevate } from '../common/sharedFunctions'

const myPic = require('../../static/me.jpg')

const customStyle = {
    picture: { width: '20rem', height: '20rem', borderRadius: '10em' }
}

const styles = makeStyles({
    sectionBase: { minHeight: '100vh' },
    card: { width: 300 }, content: { paddingLeft: '8px', paddingRight: '8px' },
    media: { maxWidth: 300, maxHeight: 30, objectFit: 'contain' },
    typography: { fontFamily: 'Raleway, sans-serif' },
    shadow: {}
})


/* Intoductory Components */
const Picture = props => { return (<Slide in={true} direction='down' timeout={1000}><img src={myPic} style={customStyle.picture} alt='me'></img></Slide>) }

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
    const style = styles()
    return (

        <Container id='About' className={`about ${style.sectionBase}`}>
            {Header("About")}
            <Grid box container direction="column" alignItems="center" justify="center" spacing={7} style={elevate}>
                <Grid item><Container><Picture /></Container></Grid>
                <Grid item><Container><Name /></Container></Grid>
                <Grid item><Container><IntroParagraph /></Container></Grid>
            </Grid>
        </Container>
    )
}

export { About }
