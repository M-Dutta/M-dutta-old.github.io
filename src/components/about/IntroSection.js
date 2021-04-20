import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { CustomSlide } from '../common/sharedFunctions';



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
    const lines = "I love wearing multiple hats. I'm passionate about writing software with scalable design/architecture" +
        " and diving into DevOps -- building core infrastructure that allows teams to speed up their development and deployment processes." +
        " I'm experienced in the complete software lifecycle, starting from the drawing board to production deployment via CI/CD."
    return (
        <Grid container direction="column" alignItems="flex-start" justify="center">
            <Container><Typography variant="body1">{lines}</Typography></Container>
        </Grid>
    );
};
