import React from 'react'
import { Container, Card, Grid, Box, Paper, CardMedia, CardContent, Typography, Slide, Fade, makeStyles } from '@material-ui/core';
import { Header, elevate } from '../common/sharedFunctions'

const pythonLogo = require('../../static/python-logo.png')
const awsLogo = require('../../static/aws.png')
const database = require('../../static/dynamo.png')
const docker = require('../../static/docker.png')

const styles = makeStyles({
    sectionBase: { minHeight: '100vh' },
    highlightsCard: { width: 250, height: 230, backgroundColor: '#171515', boxShadow: '8px 9px 11px #000000db',
    transition: 'transform 2s, box-shadow 1s',
    "&:hover": {transform: 'translate(-4px, -4px)', boxShadow: '13px 17px 11px #000000db'}
    },
    techPaper:  { maxWidth: 250, height: 280, backgroundColor: '#171515', boxShadow: '8px 9px 11px #000000db',     
    transition: 'transform 2s, box-shadow 1s',
    "&:hover": {transform: 'translate(-4px, -4px)', boxShadow: '13px 17px 11px #000000db'}
    },
    media: { maxWidth: 100, height: 100, objectFit: 'contain' },
    typography: { fontFamily: 'Raleway, sans-serif', color: 'aliceblue' }
})



const language_list = [['Python', 'Django'], ['Java', 'Spring Boot'], ['C++', ''], ['JavaScript', 'React']]
const database_list = [['MySQL', ''], ['postgreSQL', ''], ['CassandraDB', '(NoSQL)'],
['DynamoDB', '(NoSQL)'], ['MongoDB', '(NoSQL)'], ['Redis', '']]

const ops_and_cloud_list = ['AWS Services', 'GitLab CI', 'Terraform', 'Docker', 'Jenkins']
const others_list = ['Rest API', 'Micro-services', 'Jenkins', 'Agile', 'Scrum']


/* Key points about my skills */
const KeyPoints = props => {

    const Point = props => {
        const cardStyles = styles();
        return (
            <Card raised={true} className={cardStyles.highlightsCard}>
                <CardContent className={cardStyles.content}>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                        <Grid item><CardMedia component="img" className={cardStyles.media} src={props.image} /></Grid>
                        <Grid item><Typography variant="subtitle1" className={cardStyles.typography}>{props.desc}</Typography></Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }

    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={7} >
            <Grid item><Point image={pythonLogo} desc='Highly Proficient in Python and Django' /></Grid>
            <Grid item><Point image={awsLogo} desc='Hands on experience with AWS' /></Grid>
            <Grid item><Point image={database} desc='I work with both, SQL and NoSQL databases' /></Grid>
            <Grid item><Point image={docker} desc='I like wearing multiple hats. I can switch between dev and ops role when necessary '/></Grid>
        </Grid>
    )
}

const SkillBox = props => {
    const cardStyles = styles();

    const SkillItem = props => {
        const style = { skill: { background: '#198c81', color: 'white' }, subskill: { background: '#24635d', color: 'white' } }
        let skill = <Grid item><Box px={1} style={style.skill} className='subskill-item'>{props.skill}</Box></Grid>
        let subskill = null;
        if (props.subskill) {
            skill = <Grid item><Box px={1} style={style.skill} className='subskill-item'>{props.skill[0]}</Box></Grid>
            subskill = <Grid item><Box px={1} style={style.subskill} className='subskill-item'>{props.skill[1]}</Box></Grid>
        }
        return (
            <Grid className='skill-item' container direction="row" justify="center" alignItems="center" >
                {skill}
                {subskill}
            </Grid>
        )
    }

    const skillSetName = props.skillSetName
    let skillSetItem = null;
    skillSetItem = props.skillSetItem.map((data, index) => <Grid item key={index.toString()}><SkillItem skill={data} subskill={props.subskill} /></Grid>)
    return (
        <Paper className={`skill-box ${cardStyles.techPaper}`} elevation={3}>
             <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                <Grid item><Container className={`h2 ${cardStyles.typography}`} >{skillSetName}</Container></Grid>
                <Grid item>
                    <Grid container direction="column" justify="space-evenly" alignItems="flex-start" spacing={1}>{skillSetItem}</Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

const SkillBoxSection = props => {
        const cardStyles = styles();
    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={7}>
            <Slide in={true} direction='right' timeout={1000}>
                <Grid item><SkillBox skillSetName='Languages' skillSetItem={language_list} subskill={true} /></Grid>
            </Slide>

            <Slide in={true} direction='right' timeout={1100}>
                <Grid item><SkillBox skillSetName='Databases' skillSetItem={database_list} subskill={true} /></Grid>
            </Slide>

            <Slide in={true} direction='right' timeout={1200}>
                <Grid item><SkillBox skillSetName='Cloud/Ops' skillSetItem={ops_and_cloud_list} subskill={false} /></Grid>
            </Slide>

            <Slide in={true} direction='right' timeout={1300}>
                <Grid item><SkillBox skillSetName='Other Skills' skillSetItem={others_list} subskill={false} /></Grid>
            </Slide>
        </Grid>
    )
}

const SkillsAndTech = props => {
    const style = styles()
    return (
        <Container id='SkillsAndTech' className={`about ${style.sectionBase}`}>
            {Header("Skills & Tech")}
            <Container style={elevate}>
                <Grid container direction="row" alignItems="center" justify="center" spacing={7}>
                    <Grid item className='KeyPoints'><KeyPoints /></Grid>
                    <Grid item className='SkillBoxSection'><SkillBoxSection /></Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export { SkillsAndTech }
//            {/* </Box><Slide in={true} direction='left' timeout={1000}> */}