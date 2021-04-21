import React, { useState } from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Title, ContentPane, ViewPortVisibilitySlide } from '../common/sharedFunctions'

const Languages = ["Python", "JavaScript", "Java", "C++", "Golang"]
//const Languages = "Python JavaScript Java C++ Golang"
const Frameworks = ["Django", "SpringBoot", "React", "Node.js", "REST"]
const Databases = ["PostgreSQL", "MySQL", "DynamoDB", "Cassandra", "MongoDB", "NoSQL"]
const DevOps = ["AWS", "Docker", "Consul", "Fabio", "Terraform", "Redis", "Datadog"]


const contentGrid = (dataList) => {
    const contents = dataList.map((data, index) => (
        <Grid item>{data}</Grid>
    ))
    return (
        <Grid container direction="column" spacing={0}>
            {contents}
        </Grid>
    )
}

const SkillSubSection = props => {
    const useStyles = makeStyles({
        name: {
            width: '12ch',
            textAlign: 'left'
        },
        content: {
            minWidth: '12ch'
        }
    });

    const name = props.name
    let contentList = props.content
    const content = contentGrid(contentList)
    const classes = useStyles()
    return (
        <Grid container direction="row" spacing={2} justify='center' alignItems="center">
            <Grid item ><Typography className={classes.name} variant="h5">{name} </Typography></Grid>
            <Grid item className={classes}><Typography className={classes.content} variant="body1">{content}</Typography></Grid>
        </Grid>
    )

}

export const SkillsAndTech = props => {
    const l = 6
    const useStyles = makeStyles({
        content: {
            backgroundColor: 'rgb(123 133 134 / 32%);',
            borderRadius: '1em'
        }
    })
    const [visible, setVisibility] = useState(false);
    const onEnterViewport = () => { setVisibility(true) }
    const onExitViewport = () => { setVisibility(false) }
    const classes = useStyles()

    return (
        <ViewPortVisibilitySlide onEnter={onEnterViewport} onExit={onExitViewport} throttleScroll={0} visible={visible}>
            <section id='Tech Stack'>
                <Grid container justify='center' alignItems='center'><Title title='Tech Stack' /></Grid>
                <ContentPane className={classes.content}>
                    <Grid container direction='row' spacing={8} justify='center' alignItems='center'>
                        <Grid item md={l}>
                            <SkillSubSection name='Languages' content={Languages} />
                        </Grid>
                        <Grid item md={l}>
                            <SkillSubSection name='Frameworks' content={Frameworks} />
                        </Grid>
                        <Grid item md={l}>
                            <SkillSubSection name='Databases' content={Databases} />
                        </Grid>
                        <Grid item md={l}>
                            <SkillSubSection name='DevOps' content={DevOps} />
                        </Grid>
                    </Grid>
                </ContentPane>
            </section>
        </ViewPortVisibilitySlide>
    )
}