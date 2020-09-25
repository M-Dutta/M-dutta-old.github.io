import React from 'react'
import { useState } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { Card, CardMedia, CardContent, Typography, makeStyles, 
    CardActionArea, CardActions, Button, Collapse, Slide, Fade } from '@material-ui/core';
    


const auth0 = require('../../static/auth0.png')
const multiThread = require('../../static/multi-thread.png')
//const evol = require('../../static/evol-algorithm.png')
const evol2 = require('../../static/evol.png')
const bitcoin = require('../../static/bitcoin.png')
const thisSite = require('../../static/website.png')
//const dictionary = require('../../static/dictionary.png')
const spa = require('../../static/spa.png')

const projectData = [
    {image:auth0, desc:'Complete overhaul of Authentication Systems to Oauth2.0', link:'https://auntieannes.revelup.com', 
    style :{objectFit: 'cover'}, action:'Check it out in action!'
    },
    
    {image:bitcoin, desc:'Data Research on bitcoin price fluctuation', link:'https://github.com/M-Dutta/DataSci-bitcoin', 
    action:'Check out the Research!'
    },
    {image:evol2, desc:'Music Generation using Evolutionary Algorithm', link:'https://github.com/M-Dutta/MusicGenerator', 
    style :{objectFit: 'cover'},  action:'Check out the repo!'
    },
    {image:multiThread, 
        desc:'Multi-threaded cluster to cluster file transfer tool including performance analysis', 
        link:'https://github.com/M-Dutta/FileTransferer', action:'Check out the repo!'
    },
    {image:spa, desc:'Universal SPA for url discovery and OAuth context Routing', link:'https://login.revelup.com/',
    action:'Check it out in action!'
    },
    {image:thisSite, desc:'Source Code for this site', link:'https://github.com/M-Dutta/website',
    action:'Access source code'
},
    // {image:dictionary, desc:'Simple Online Rest API dictionary Controller', link:'https://github.com/M-Dutta/Robot'},
                    ]

const styles = makeStyles({
    sectionBase: { minHeight: '100vh', maxWidth:'80vh'},
    card: { maxWidth: 300, borderRadius: 7, },
    content: { paddingLeft: '8px', paddingRight: '8px' },
    media: { maxWidth: 300, height: 200, objectFit:'contain' },
    typography: { fontFamily: 'Raleway, sans-serif', fontWeight: 'bold' }
})


const WorkThumb = props => {
    const cardStyles = styles();
    const [hoverVisible, setHoverVisbility] = useState(false)
    const [pinnedVisibility, setPinnedVisbility] = useState(false)
    const visibilityTrue = () => setHoverVisbility(true);
    const visibilityFalse = () => setHoverVisbility(false);
    const togglePinnedVisibility = () => setPinnedVisbility(!pinnedVisibility);
    let showDetails = hoverVisible || pinnedVisibility;
    return (
        <Card raised={true} className={cardStyles.card} onMouseOver={visibilityTrue} onMouseLeave={visibilityFalse}
        onClick={togglePinnedVisibility}>
            <CardActionArea>
                <CardMedia component="img" className={cardStyles.media} style={props.style} src={props.image} />
                <Collapse in={showDetails}>
                    <CardContent>
                        <Typography variant="subtitle2" className={cardStyles.typography} >{props.desc}</Typography>
                    </CardContent>
                    
                    <CardActions>
                            <Button size="small" color="primary" onClick={() => window.open(props.link)}>{props.action}</Button>
                    </CardActions>
                </Collapse>
            </CardActionArea>
        </Card>
    )
}

const ProjectBox = props => {

    const thumbList = (list) => {
        const thumbs = projectData.map( (data,index) => (
            <Slide in={true} direction='left' timeout={1000+(index*100)}>
                <Grid item>
                    <Container>
                        <WorkThumb key = { index.toString()} image={data.image} desc={data.desc} 
                                link={data.link} style={data.style} action={data.action} />
                    </Container>
                </Grid>
            </Slide>
            )
        )

        return thumbs
    }
    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={10}>
            {thumbList(projectData)}
        </Grid>
    )

}


const Work = props => {
    const style = styles()
    return (
        <Box id='Work' className={style.sectionBase} mb={10}>
            <Fade in={true} timeout={1000}>
            <Box pt={10} pb={10}>
                <Grid container direction="column" alignItems="center" justify="center" spacing={1}>
                    <Grid item><h1>{`Work & Projects`}</h1></Grid>
                    <Grid item><Typography variant="caption">Hover/Click For more info</Typography></Grid>
                    </Grid>
            </Box>
            </Fade>
            <Grid container direction="column" alignItems="center" justify="center" spacing={1}>
                <Container><ProjectBox/></Container>
            </Grid>
        </Box>
    )
}

export { Work }