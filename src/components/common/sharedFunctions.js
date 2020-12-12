import React from 'react'
import { Grid, Box, Fade, makeStyles, Slide } from '@material-ui/core';

const Header = (headerName, paddingTop = 0, paddingBottom = 5) => {
    return (
        <Fade in={true} timeout={2000}>
            <Box pt={paddingTop} pb={paddingBottom}>
                <Grid container component='h1' alignItems="center" justify="center">
                    {headerName}
                </Grid>
            </Box>
        </Fade>
    )
}

const CustomSlide = (direction, timeout, delay, component) => {
    return (
    <Slide in={true} direction={direction ? direction : 'right'} timeout={timeout ? timeout : 1000} style={{ transitionDelay: delay ? delay : '0ms' }}
    mountOnEnter unmountOnExit>
        {component}
    </Slide>
    )
}

const elevate = {
    boxShadow: '12px 16px 20px black',
    backgroundColor: '#e8e8e8',
    borderRadius: '1em'
};

const GapMaker = (gaps = 1) => {
    const temp = new Array(gaps, '_')
    let brs = temp.map((temp, index) => <br />)
    console.log(brs)
    return brs
}


const sharedStylesInitializer = makeStyles({
    sectionBase: { paddingTop: '7rem', paddingBottom: '2.5rem'},
    innerBase: {borderRadius: '10px'}
})

export { Header, elevate, sharedStylesInitializer, GapMaker, CustomSlide }