import React, { useState } from 'react'
import { Container, Grid, Box } from '@material-ui/core';
import { CenterToPage } from '../common/sharedFunctions'
import {
    Card, CardMedia, CardContent, Typography, makeStyles,
    CardActionArea, CardActions, Button, Collapse, Slide, Fade
} from '@material-ui/core';
import ScrollTrigger from 'react-scroll-trigger';
import { SkillsAndTech } from './SkillsAndTech'
import { Highlights } from './Highlights'



export const Experience = props => {
    const centerToPage = CenterToPage()
    const useStyles = makeStyles({
        workSection: {
            ['@media (max-width:953px)']: {
                paddingTop: '10vh',
            },
        }
    })
    const classes = useStyles()
    const [visible, setVisibility] = useState(false);
    const onEnterViewport = () => { setVisibility(true) }
    const onExitViewport = () => { setVisibility(false) }
    return (
        <Container maxWidth='md'>
                    <Grid container direction="column" alignItems="center" justify="center" className={classes.workSection}>
                        <SkillsAndTech />
                        <Box pt={8}></Box>
                        <Highlights />
                    </Grid>
        </Container>
    )
}

