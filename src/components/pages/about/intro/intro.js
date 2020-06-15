import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Container, CardMedia, Box, Grid, Slide, Fade } from '@material-ui/core'
import './intro.css'

const customStyle = {
    pic: { maxWidth: '30em', maxHeight: 'auto', borderRadius: '15em' }
}

const Base = props => {

}

const Intro = props => {
    return (
        <Grid container direction="column" alignItems="center" justify="center" className='name'>
             <Slide in={true} direction='left' timeout={1000}><text>I'm Mishuk!</text></Slide>
             <Slide in={true} direction='right' timeout={1000}><text>I'm a full-stack software engineer</text></Slide>
        </Grid>
    )
}

export { Intro }