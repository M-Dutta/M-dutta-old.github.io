import React from 'react'
import { Grid, Box, Fade } from '@material-ui/core';

const Header = (headerName) => {
    return (
        <Fade in={true} timeout={2000}>
        <Box pt={10} pb={8}>
            <Grid container component='h1' alignItems="center" justify="center">
                {headerName}
            </Grid>
        </Box>
        </Fade>
    )
}

const elevate = {
    boxShadow: '12px 16px 20px black',
    backgroundColor: 'rgb(19 17 17 / 84%)'
};

export { Header, elevate }