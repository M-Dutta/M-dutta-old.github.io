import React from 'react'
import { CenterToPage, ContentPane, CustomSlide } from '../common/sharedFunctions'
import { MyPicture } from './picture'
import { IntroName, IntroParagraph } from './IntroSection.js';
import { Container, Grid, makeStyles } from '@material-ui/core';

const About = props => {
    const centerToPage = CenterToPage()
    const useStyles = makeStyles({
        introText: {
            backgroundColor: 'rgb(155 194 211 / 55%)',
            borderRadius: '1em',
            marginTop: '0'
        }
    })
    const classes = useStyles()
    return (

            <Grid container direction="row" alignItems='center' justify='center' spacing={4} className={centerToPage.center}>
                <CustomSlide direction='right' delay={600}>
                    <Grid item><MyPicture /></Grid>
                </CustomSlide>
                <Grid item>
                    <CustomSlide direction='left' delay={600}>
                        <Container maxWidth='sm'>
                            <ContentPane className={classes.introText} my={0}>
                                <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
                                    <Grid item><IntroName /></Grid>
                                    <Grid item><IntroParagraph /></Grid>
                                </Grid>
                            </ContentPane>
                        </Container>
                    </CustomSlide>
      

            </Grid>
        </Grid>
    )
}

export { About }
