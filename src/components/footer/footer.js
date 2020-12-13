import React from 'react'
import { Container, makeStyles, Fade } from '@material-ui/core';
import './footer.css'


const styles = makeStyles({
    footerStyle: {
        textAlign: 'center',
        backgroundColor: '#f5f5f514',
        marginTop: 'calc(5% +30px)',
    }
})


const Footer = props => {
    const style = styles()
    return (
        <Fade in={true} timeout={props.timeout ? props.timeout : 1800}>
            <Container className={`${style.footerStyle}`}>
                <b>Copyright 2020, Mishuk Dutta, MIT license</b>
                </Container>
        </Fade>
    )
}



export { Footer }