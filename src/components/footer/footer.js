import React from 'react'
import { Container, makeStyles, Fade } from '@material-ui/core';


const styles = makeStyles({
    footerStyle: {
        textAlign: 'center',
    }
})


const Footer = props => {
    const style = styles()
    return (
        <Fade in={true} timeout={props.timeout ? props.timeout : 1800}>
            <Container  className={style.footerStyle}>
                <b>Copyright 2021, Mishuk Dutta, MIT license</b>
            </Container>
        </Fade>
    )
}



export { Footer }