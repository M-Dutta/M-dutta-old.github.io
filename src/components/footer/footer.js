import React from 'react'
import { Container, Grid, Box, makeStyles, IconButton, Slide } from '@material-ui/core';
import './footer.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



const styles = makeStyles({
    footerStyle: {
        background: 'linear-gradient(36deg, rgba(137,136,162,1) 6%, rgba(34,91,152,1) 24%, rgba(30,71,133,1) 63%, rgba(18,21,83,1) 88%)',
        'overflowY': 'hidden'
    },
    typography: { fontFamily: 'Raleway, sans-serif', fontWeight: 'bold', color: 'white', marginBottom: '0' }
})

const linkedInLink = 'https://www.linkedin.com/in/mishukdutta/'
const gitHubLink = 'https://github.com/M-Dutta/'

const Footer = props => {

    const style = styles()
    return (
       
        <Slide in={true} direction='up' timeout={1000}>
        <Box className={style.footerStyle} pt={1}>
            <Grid container direction="column" alignItems="center" justify="center">
                <Grid item><p className={style.typography}>Contact me via LinkedIn!</p></Grid>
            </Grid>
            <Box>
            <Grid container direction="row" alignItems="center" justify="center">
                <Grid item>
                    <Container>
                    <IconButton>
                        <LinkedInIcon fontSize='large' onClick={() => window.open(linkedInLink)}/>
                    </IconButton>
                    </Container>
                </Grid>
                <Grid item>
                    <Container>
                    <IconButton>
                        <GitHubIcon fontSize='large' onClick={() => window.open(gitHubLink)}/>
                    </IconButton>
                        </Container>
                </Grid>

            </Grid>
            </Box>
        </Box>
        </Slide>
    )
}


export { Footer }