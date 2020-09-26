import React from 'react'
import { Grid, Box, Fade, makeStyles } from '@material-ui/core';

const Header = (headerName, paddingTop = 0, paddingBottom = 5) => {
    return (
        <Fade in={true} timeout={2000}>
            <Box pt={paddingTop} pb={paddingBottom}>
                <Grid container component='h1' alignItems="center" justify="center">
                    {headerName}
                </Grid>
            </Box>
        </Fade>
    )
}

const elevate = {
    boxShadow: '12px 16px 20px black',
    backgroundColor: '#e8e8e8',
    borderRadius: '1em'
};

const GapMaker = (gaps = 1) => {
    const temp = new Array(gaps, '_')
    let brs = temp.map((temp, index) => <br />)
    console.log(brs)
    return brs
}


const sharedStylesInitializer = makeStyles({
    sectionBase: { minHeight: '93vh', paddingTop: '10vh' }
})

export { Header, elevate, sharedStylesInitializer, GapMaker }