import React from 'react'
import { Container, Grid, Box, makeStyles, IconButton, Slide } from '@material-ui/core';
import './footer.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



const styles = makeStyles({
    footerStyle: {backgroundColor:'rgb(19 17 17 / 95%)'},
    typography: { fontFamily: 'Raleway, sans-serif', fontWeight: 'bold', color: 'white', marginBottom: '0' }
})

const linkedInLink = 'https://www.linkedin.com/in/mishukdutta/'
const gitHubLink = 'https://github.com/M-Dutta/'

const Footer = props => {

    const style = styles()
    return (
        <Box  className={style.footerStyle} mt={10}>
            <Grid container direction="row" alignItems="center" justify="space-evenly">
                <Grid item>
                    <IconButton className='Linked-link' onClick={() => window.open(linkedInLink)}>
                        <LinkedInIcon fontSize='small'/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton className='github-link' onClick={() => window.open(gitHubLink)}>
                        <GitHubIcon fontSize='small'/>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}


export { Footer }