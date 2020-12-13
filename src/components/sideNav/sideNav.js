import React from 'react'
import { Grid, IconButton, Slide } from '@material-ui/core';
import './sideNav.css'

const linkedInLink = 'https://www.linkedin.com/in/mishukdutta/'
const gitHubLink = 'https://github.com/M-Dutta/'
const resumeLink = require('../../documents/Mishuk-resume.pdf')

const ExternalUrls = props => {

    return (
        <Slide in={true} direction='left' timeout={2000}>
            <Grid className='external-urls' container direction='column' alignContent='baseline' justify='center'>
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

export { ExternalUrls }