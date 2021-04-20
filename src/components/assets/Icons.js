
import React from 'react'
import { Grid, IconButton, makeStyles, Slide } from '@material-ui/core';

const linkedInLink = 'https://www.linkedin.com/in/mishukdutta/'
const gitHubLink = 'https://github.com/M-Dutta/'
const resumeLink = require('../../documents/Mishuk-resume.pdf')

const iconStyle = makeStyles({
    resize: {
        ['@media (max-width:360px)']: {
            width: '2.7rem'
        },

    },
    linkedInIcon: {
        color: '#0b73b1'
    },
    githubIcon: {
        color: '#24292e',

    },
    resumeIcon: {
        color: '#793030',
    }

})

export const LinkedInIcon = () => {
    const classes = iconStyle()
    return (
        <IconButton className={[classes.linkedInIcon, classes.resize]} onClick={() => window.open(linkedInLink)}>
            <ion-icon name="logo-linkedin"></ion-icon>
        </IconButton>
    )
}

export const GitHubIcon = () => {
    const classes = iconStyle()
    return (
        <IconButton className={[classes.githubIcon, classes.resize]} onClick={() => window.open(gitHubLink)}>
            <ion-icon name="logo-github"></ion-icon>
        </IconButton>
    )
}

export const ResumeIcon = () => {
    const classes = iconStyle()
    return (
        <IconButton className={[classes.resumeIcon, classes.resize]} onClick={() => window.open(resumeLink, 'titlebar=Mishuk-resume')}>
            <ion-icon name="document-attach-outline"></ion-icon>
        </IconButton>
    )
}
