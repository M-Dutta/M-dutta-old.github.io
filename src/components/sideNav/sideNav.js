import React from 'react'
import { Grid, IconButton, makeStyles, Slide } from '@material-ui/core';

const linkedInLink = 'https://www.linkedin.com/in/mishukdutta/'
const gitHubLink = 'https://github.com/M-Dutta/'
const resumeLink = require('../../documents/Mishuk-resume.pdf')

const useStyles = makeStyles((theme) => ({
    sideNav: {
        position: 'fixed',
        top: 'calc(50% - 59px)',
        right: '1%',
        width: 'fit-content!important',
        borderRadius: '1em',
        zIndex: 1
    },

}));

const SideNav = props => {
    const classes = useStyles()
    return (
        <Slide in={true} direction='left' timeout={2000}>
            <Grid className={classes.sideNav} container direction='column' alignContent='baseline' justify='center'>
                <Grid item>
                    <IconButton style={{ color: '#0b73b1' }} onClick={() => window.open(linkedInLink)}>
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton style={{ color: '#24292e' }} onClick={() => window.open(gitHubLink)}>
                        <ion-icon name="logo-github"></ion-icon>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton style={{ color: '#24292e' }} onClick={() => window.open(resumeLink, 'titlebar=Mishuk-resume')}>
                        <ion-icon style={{ color: '#793030' }} name="document-attach-outline"></ion-icon>
                    </IconButton>
                </Grid>
            </Grid>
        </Slide>
    )
}

export { SideNav as SideNav }