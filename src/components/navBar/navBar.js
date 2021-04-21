import React from 'react'
import { AppBar, Toolbar, Grid, Typography, makeStyles } from "@material-ui/core"
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom'
import { LinkedInIcon, GitHubIcon, ResumeIcon } from '../assets/Icons'
import { CustomSlide } from '../common/sharedFunctions'

const navStyle = makeStyles({
    text: {
        // eslint-disable-next-line
        ['@media (max-width:360px)']: {
            fontSize: '0.7rem'
        },
        // eslint-disable-next-line
        ['@media (max-width:401px)']: {
            fontSize: '0.9rem'
        },
        // eslint-disable-next-line
        ['@media (max-width:372px)']: {
            fontSize: '0.7rem'
        },
        // eslint-disable-next-line
        ['@media (max-width:359px)']: {
            visibility: 'hidden'
        }

    }
})

export const Header = () => {
    const classes = navStyle()
    return (
        <CustomSlide direction='top'>
            <AppBar>
                <Toolbar>
                    <Grid container direction='row' justify="flex-start" spacing={4}>
                        <BrowserRouter>
                            <Grid item><HashLink to='#about' scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}><Typography className={classes.text}>About</Typography></HashLink></Grid>
                            <Grid item><HashLink to='#experience' scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><Typography className={classes.text}>Experience</Typography></HashLink></Grid>
                        </BrowserRouter>
                    </Grid>
                    <Grid container direction='row' justify="flex-end" spacing={0}>
                        <Grid item><LinkedInIcon /></Grid>
                        <Grid item><GitHubIcon /></Grid>
                        <Grid item><ResumeIcon /></Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </CustomSlide>
    )
}