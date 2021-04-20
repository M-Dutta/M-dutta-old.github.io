import React from 'react'
import { Grid, Box, Fade, Paper, makeStyles, Slide, Typography } from '@material-ui/core';
import ScrollTrigger from 'react-scroll-trigger';

export const Title = props => {
    const marginTop = props.marginTop || '0px'
    const marginBottom = props.marginBottom || '0px'
    const title = props.title
    return (
        <Box mt={marginTop} mb={marginBottom}>
            <Grid container alignItems="center" justify="center">
                <Typography variant='h4'> {title} </Typography>
            </Grid>
        </Box>
    )
}


const CustomSlide = React.forwardRef((props, ref) => {
    const direction = props.direction || 'right'
    const timeout = props.timeout || 1000
    const delay = props.delay || '0ms'
    const children = props.children
    // if (!!!component) return null;
    return (
        <Slide in={true} direction={direction} timeout={timeout} style={{ transitionDelay: delay }}
            mountOnEnter unmountOnExit>
            {children}
        </Slide>
    )
});

export const ViewPortVisibility = React.forwardRef((props, ref) => {
    const children = props.children
    return (
        <ScrollTrigger onEnter={props.onEnter} onExit={props.onExit} throttleScroll={props.throttleScroll || 100}>
            <Fade in={props.visible} timeout={2000}>
                <Box className={props.className || ''}>
                    {children}
                </Box>
            </Fade>
        </ScrollTrigger>
    )
});

export const Elevate = React.forwardRef((props, ref) => {
    const useStyle = makeStyles({
        elevate: {
            boxShadow: '12px 16px 20px black',
            backgroundColor: '#e8e8e8',
            borderRadius: '1em'
        }
    })
    const classes = useStyle()
    return (
        <Box className={classes.elevate}>
            {props.component}
        </Box>
    )
});

export const ContentPane = React.forwardRef((props, ref) => {
    const component = props.component || (props.children || null)
    return (
        <Box p={2} my={4} className={`content-pane ${props.className || null} `} ref={ref}>
            {component}
        </Box>
    )
});

const GapMaker = (gaps = 1) => {
    const temp = new Array(gaps, '_')
    let brs = temp.map((temp, index) => <br />)
    return brs
}


const sharedStylesInitializer = makeStyles({
    sectionBase: { paddingTop: '7rem', paddingBottom: '2.5rem' },
    innerBase: { borderRadius: '10px' }
})

const CenterToPage = makeStyles({
    center: {
        minHeight: 'calc(100vh - 2.5rem)',
        ['@media (max-width:905px)']: {
            minHeight: 'calc(100vh)',
        },
        ['@media (max-width:599px)']: {
            minHeight: 'calc(100vh)'
        }

    }
});


export { sharedStylesInitializer, GapMaker, CustomSlide, CenterToPage }