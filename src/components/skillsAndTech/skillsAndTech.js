import React from 'react'
import { Container, Grid, Box, Paper, Slide, makeStyles } from '@material-ui/core';
import { Header, GapMaker, sharedStylesInitializer } from '../common/sharedFunctions'

const pythonDjangoLogo = require('../../static/python-django-logo.png')
const reactLogo = require('../../static/react-logo.png')
const awsLogo = require('../../static/aws.png')
const database = require('../../static/dynamo.png')
const dockerLogo = require('../../static/docker.png')
const terraformLogo = require('../../static/terraform-logo.png')


const styles = makeStyles({
    sectionBase: { minHeight: '100vh' },
    highlightsBox: {
        width: 250, height: 230, backgroundColor: '#fafafa',
        transition: 'transform 1s, box-shadow 1s',
        "&:hover": { transform: 'translate(-5px, -5px)', boxShadow: '8px 10px 3px -2px rgba(0,0,0,0.2)' }
    },
    techBox: {
        maxWidth: 250, height: 280, backgroundColor: '#fafafa',
        transition: 'transform 2s, box-shadow 1s',
        "&:hover": { transform: 'translate(-5px, -5px)', boxShadow: '8px 10px 3px -2px rgba(0,0,0,0.2)' }
    },
    media: { maxWidth: 100, height: 100, objectFit: 'contain' },
    typography: { fontFamily: 'Raleway, sans-serif', color: '#3333333' }
})



const language_list = [['Python', 'Django'], ['Java', 'Spring Boot'], ['C++', ''], ['JavaScript', 'React']]
const database_list = [['MySQL', ''], ['postgreSQL', ''], ['CassandraDB', '(NoSQL)'],
['DynamoDB', '(NoSQL)'], ['MongoDB', '(NoSQL)'], ['Redis', '']]

const ops_and_cloud_list = ['AWS Services', 'GitLab CI', 'Terraform', 'Docker', 'Jenkins']
const others_list = ['Rest API', 'Micro-services', 'Jenkins', 'Agile', 'Scrum']


/* Key points about my skills */
const KeyPoints = props => {

    const Point = props => {
        const boxStyles = styles();
        let images = props.image.map((data, index) => <Grid item><Container component="img" className={boxStyles.media} src={data} /></Grid>)
        images = <Grid container direction="row" justify="center" alignItems="center">{images}</Grid>
        return (
            <Paper elevation={3} className={boxStyles.highlightsBox}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>{images}</Grid>
                    <Grid item><Container component='Typography' variant="subtitle1" className={boxStyles.typography}>{props.desc}</Container></Grid>
                </Grid>
            </Paper>
        )
    }

    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={7} >
            <Slide in={true} direction='left' timeout={1000}>
                <Grid item><Point image={[pythonDjangoLogo, reactLogo]} desc='Highly Proficient in builing applications with Python, using React and Django frameworks' /></Grid>
            </Slide>
            <Slide in={true} direction='left' timeout={1000}>
                <Grid item><Point image={[awsLogo]} desc='Hands on experience with AWS including building microservices in serverless architechture' /></Grid>
            </Slide>
            <Slide in={true} direction='left' timeout={1000}>
                <Grid item><Point image={[database]} desc='I work with both, SQL and NoSQL databases' /></Grid>
            </Slide>
            <Slide in={true} direction='left' timeout={1000}>
                <Grid item><Point image={[dockerLogo, terraformLogo]} desc='I like wearing multiple hats. I can switch between dev and ops role when necessary ' /></Grid>
            </Slide>
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
        <Paper className={`skill-box ${cardStyles.techBox}`} elevation={3}>
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
    const sharedStyles = sharedStylesInitializer()
    return (
        <Container id='SkillsAndTech' className={`about ${sharedStyles.sectionBase}`}>   
            <Paper elevation={5}>
                {GapMaker(3)}
                <Grid container direction="row" alignItems="center" justify="center" spacing={7}>
                    <Grid item className='KeyPoints'><KeyPoints /></Grid>
                    <Grid item className='SkillBoxSection'><SkillBoxSection /></Grid>
                </Grid>
                {GapMaker(3)}
            </Paper>
        </Container>

    )
}

export { SkillsAndTech }
//            {/* </Box><Slide in={true} direction='left' timeout={1000}> */}