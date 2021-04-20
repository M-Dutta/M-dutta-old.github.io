import React from 'react'
import { CenterToPage, ContentPane, CustomSlide } from '../common/sharedFunctions'
import { MyPicture } from './picture'
import { IntroName, IntroParagraph } from './IntroSection.js';
import { Container, Grid, makeStyles, Fade } from '@material-ui/core';

import { Parallax, Background } from 'react-parallax';

//const background = require('../../static/white-background.png')

const About = props => {
    const centerToPage = CenterToPage('10vh')
    const useStyles = makeStyles({
        introText: {
            backgroundColor: 'rgb(155 194 211 / 55%)',
            borderRadius: '1em'
        }
    })
    const classes = useStyles()
    return (
        <Grid container direction="column" alignItems="center" justify="center" className={centerToPage.center}>
            <Grid container direction="row" alignItems='center' justify='center' spacing={8}>
                <CustomSlide direction='right' delay={600}>
                    <Grid item><MyPicture /></Grid>
                </CustomSlide>
                <Grid item>
                    <CustomSlide direction='left' delay={600}>

                        <Container maxWidth='sm'>
                            <ContentPane className={classes.introText}>
                                <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
                                    <Grid item><IntroName /></Grid>
                                    <Grid item><IntroParagraph /></Grid>
                                </Grid>
                            </ContentPane>
                        </Container>

                    </CustomSlide>
                </Grid>

            </Grid>
        </Grid>
    )
}

export { About }
