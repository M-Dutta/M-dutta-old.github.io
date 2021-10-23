import React from 'react'
import { Grid, makeStyles, Slide } from '@material-ui/core';
import { LinkedInIcon, GitHubIcon, ResumeIcon } from '../assets/Icons'

const useStyles = makeStyles((theme) => ({
    sideNav: {
        position: 'fixed',
        top: 'calc(50% - 42px)',
        right: '1%',
        width: 'fit-content!important',
        borderRadius: '1em',
        zIndex: 1
    },
    [theme.breakpoints.down("sm")]: {
        right: '0%'
    }


}));

export const SideNav = props => {
    const classes = useStyles()
    return (
        <Slide in={true} direction='left' timeout={2000}>
            <Grid className={classes.sideNav} container direction='column' alignContent='baseline' justify='center'>
                <Grid item>
                    <LinkedInIcon />
                </Grid>
                <Grid item>
                    <GitHubIcon />
                </Grid>
                <Grid item>
                    <ResumeIcon />
                </Grid>
            </Grid>
        </Slide>
    )
}
