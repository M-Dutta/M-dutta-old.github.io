import React from 'react'
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { SkillsAndTech } from './SkillsAndTech'
import { Highlights } from './Highlights'



export const Experience = props => {
    const useStyles = makeStyles({
        workSection: {
            // eslint-disable-next-line
            ['@media (max-width:953px)']: {
                paddingTop: '10vh',
            },
        }
    })
    const classes = useStyles()

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

