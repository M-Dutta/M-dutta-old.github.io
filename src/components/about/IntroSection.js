import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


export const IntroName = props => {
    return (
        <Grid container direction="column" alignItems="flex-start" justify="center" className='name' style={{ objectFit: 'scale-down' }}>
            <Grid item>
                <Grid container direction="column" alignItems="center" justify="center">
                    <Grid item><Typography variant="h4">Hi, I'm Mishuk!</Typography></Grid>
                    <Grid item><Typography variant="h4">A Full-Stack</Typography></Grid>
                    <Grid item><Typography variant="h4">Software Engineer</Typography></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};
export const IntroParagraph = props => {
    const lines =`
                    I love wearing multiple hats. I specialize in software design/architecture
                    and core infrastructure development that allows teams to speed up their development and deployment processes. 
                `
    return (
        <Grid container direction="column" alignItems="flex-start" justify="center">
            <Container><Typography variant="body1">{lines}</Typography></Container>
        </Grid>
    );
};
