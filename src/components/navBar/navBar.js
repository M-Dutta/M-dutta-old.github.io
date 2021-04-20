import React from 'react'
import { AppBar, Toolbar, Grid, Typography, makeStyles } from "@material-ui/core"
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom'
import { LinkedInIcon, GitHubIcon, ResumeIcon } from '../assets/Icons'
import { CustomSlide } from '../common/sharedFunctions'

const navLinks = [
    { title: 'About', path: '#about' },
    { title: 'Experience', path: '#experience' },
]
const navStyle = makeStyles({
    text: {
        ['@media (max-width:360px)']: {
            fontSize: '0.7rem'
        },
        ['@media (max-width:401px)']: {
            fontSize: '0.9rem'
        },
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

// {navLinks.map(({ title, path }) => (
//     <a href={path} key={title}>
//         <ListItem button>
//             <ListItemText primary={title} />
//         </ListItem>
//     </a>
// ))}