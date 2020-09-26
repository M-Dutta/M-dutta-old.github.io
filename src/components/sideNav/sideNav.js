import React from 'react'
import { Grid,IconButton, Slide } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './sideNav.css'

const linkedInLink = 'https://www.linkedin.com/in/mishukdutta/'
const gitHubLink = 'https://github.com/M-Dutta/'

const ExternalUrls = props => {

    return (
        <Slide in={true} direction='left' timeout={1500}>
        <Grid className='external-urls' container  direction='column' alignContent='baseline' justify='center'>
            <Grid item>
                <IconButton  style={{color:'#0b73b1'}} onClick={() => window.open(linkedInLink)}>
                    <LinkedInIcon className='external-url-icons'/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton style={{color:'#24292e'}} onClick={() => window.open(gitHubLink)}>
                    <GitHubIcon className='external-url-icons'/>
                </IconButton>
            </Grid>
        </Grid>
        </Slide>
    )
}

export { ExternalUrls }