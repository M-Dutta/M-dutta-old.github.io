import React from 'react'
import { Grid, Box, Fade, makeStyles, Slide, Typography } from '@material-ui/core';
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


export const CustomSlide = React.forwardRef((props, ref) => {
    const direction = props.direction || 'right'
    const timeout = props.timeout || 1000
    const delay = props.delay || '0ms'
    const children = props.children
    return (
        <Slide in={true} direction={direction} timeout={timeout} style={{ transitionDelay: delay }}
            mountOnEnter unmountOnExit>
            {children}
        </Slide>
    )
});

export const ViewPortVisibilitySlide = React.forwardRef((props, ref) => {
    const children = props.children
    return (
        <ScrollTrigger onEnter={props.onEnter} onExit={props.onExit} throttleScroll={props.throttleScroll || 100}>
            <Slide in={props.visible} direction={props.direction} timeout={600}>
                <Box className={props.className || ''}>
                    {children}
                </Box>
            </Slide>
        </ScrollTrigger>
    )
});


export const ContentPane = React.forwardRef((props, ref) => {
    const component = props.children
    return (
        <Box p={2} mt={4} className={`content-pane ${props.className || null} `} ref={ref}>
            {component}
        </Box>
    )
});


export const CenterToPage = makeStyles({
    center: {
        minHeight: 'calc(100vh - 35px)',
        // eslint-disable-next-line
        ['@media (max-width:1061px)']: { 
            minHeight: 'calc(100vh + 35px)',
        },
        // eslint-disable-next-line
        ['@media (max-width:599px)']: { 
            
        }
    }
});