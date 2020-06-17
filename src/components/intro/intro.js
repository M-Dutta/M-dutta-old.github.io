import React from 'react'
import { Grid, Slide, Grow } from '@material-ui/core'
import './intro.css'

const customStyle = {
    pic: { maxWidth: '30em', maxHeight: 'auto', borderRadius: '15em' },
    gridView: { minHeight: '100vh' },
}

const Circle = props => { 
    return (
    <Grow in={true} timeout={1000}>
        <div minWidth={300} minheight={300} className='circle'></div>
    </Grow>
    ) 
}

const Name = props => {
    return (
        <Grid container direction="column" alignItems="center" justify="center" className='name' style={{objectFit:'scale-down'}}>
            <Slide in={true} direction='left' timeout={1000}><div className='text'>I'm Mishuk!</div></Slide>
            <Slide in={true} direction='right' timeout={1000}><div className='text'>I'm a full-stack software engineer</div></Slide>
        </Grid>
    )
}

const Intro = props => {
    return (
        <div className='intro'>
            <Grid container direction="column" justify="space-evenly" alignItems="center" style={customStyle.gridView}>
                <Grid item><Circle /></Grid>
                <Grid item><Name /></Grid>
            </Grid>

        </div>
    )
}
export { Intro }
