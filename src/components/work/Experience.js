import React from 'react'
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { SkillsAndTech } from './SkillsAndTech'
import { Highlights } from './Highlights'
import { ViewPortVisibilitySlide } from '../common/sharedFunctions';



export const Experience = props => {
    const useStyles = makeStyles({
        workSection: {
            // eslint-disable-next-line
            ['@media (max-width:360px)']: {
            },
        }
    })
    const classes = useStyles()

    return (
        <Container maxWidth='md'>
            <Grid container direction="column" alignItems="center" justify="center" className={classes.workSection}>
                <ViewPortVisibilitySlide direction='right'>
                    <SkillsAndTech />
                </ViewPortVisibilitySlide>
                <Box pt={8}></Box>
                <ViewPortVisibilitySlide direction='left'>
                    <Highlights />
                </ViewPortVisibilitySlide>
            </Grid>
        </Container>
    )
}

