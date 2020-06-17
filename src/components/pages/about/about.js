import React from 'react'
import { Container, Grid, Box, Paper} from '@material-ui/core';
import { Card, CardMedia, CardContent, Typography, makeStyles    } from '@material-ui/core';
import './about.css'


const pythonLogo = require('../../../static/python-logo.png') 
const awsLogo = require('../../../static/aws.png') 
const database = require('../../../static/dynamo.png') 
const docker = require('../../../static/docker.png') 



const IntroParagraph = props => { 
    return(
    <Container component='p' maxWidth='sm'>
        I'm a Full-Stack Software Engineer based in Atlanta, GA. <br/>
        I have a passion for writing services with scaleable design/architecture in mind and love putting on multiple hats.
    </Container>
    )
}

const language_list = [['Python','Django'], ['Java', 'Spring Boot'], ['C++',''], ['JavaScript', 'React']]
const database_list = [['MySQL',''], ['postgreSQL',''], ['CassandraDB','(NoSQL)'], 
                        ['DynamoDB','(NoSQL)'], ['MongoDB', '(NoSQL)'], ['Redis','']]

const ops_and_cloud_list = ['AWS Services', 'GitLab CI', 'Terraform', 'Docker', 'Jenkins']
const others_list = ['Rest API', 'Micro-services', 'Jenkins', 'Agile', 'Scrum']

const customStyle = {
    picture: { width:'20rem', height:'20rem', borderRadius:'10em' }
}

const styles = makeStyles({
    card: {width: 300}, content: {paddingLeft:'8px', paddingRight:'8px'}, 
    media: {maxWidth: 300, maxHeight:30, objectFit: 'contain' },
    typography: {fontFamily: 'Raleway, sans-serif'}

})

const Picture = props => {
    return <img src={require('../../../static/me.jpg')} style={customStyle.picture} alt='me'></img>
}

const SkillItem = props => {
    const style = {
        skill: { background:'#198c81', color:'white'},
        subskill: {background:'#24635d', color:'white'}
    }

    let skill = <Grid item><Box px={1} style={style.skill}className='subskill-item'>{props.skill}</Box></Grid>
    let subskill = null;

    if (props.subskill)  {
        skill = <Grid item><Box px={1} style={style.skill}className='subskill-item'>{props.skill[0]}</Box></Grid>
        subskill = <Grid item><Box px={1} style={style.subskill}className='subskill-item'>{props.skill[1]}</Box></Grid>
    }

    return ( //style={{ margin:'', background:'#14a1a7'}}
    <Grid className='skill-item' container direction="row" justify="center" alignItems="center" >
        {skill}
        {subskill}
    </Grid>
)
}

const SkillBox = props => {
    const skillSetName = props.skillSetName
    let skillSetItem = null;
    skillSetItem = props.skillSetItem.map( (data, index) =>  <Grid item><SkillItem skill={data} subskill={props.subskill}/></Grid>) 
    return (
        <Paper className= 'skill-box' elevation={3}>
            <Box p={3} minWidth={250}>
                <Box component='h2' pb={2}>{skillSetName}</Box>
                <Grid container direction="column" justify="space-evenly" alignItems="flex-start" spacing={1}>
                {skillSetItem}
                </Grid>
            </Box>
        </Paper>
        )
}

const LeftGridItems = props => {
    return (
    <Grid container direction="column" justify="space-between" alignItems="center">
        <Grid item><Container><Picture/></Container></Grid>
        <Grid item><Container><Box pt={5}><IntroParagraph/></Box></Container></Grid> 
    </Grid> 
    )
}

const KeyPoints = props => {

    
    const Point = props => {
        const cardStyles = styles();
        return(
        <Card raised={true} className={cardStyles.card}>
            <CardContent className={cardStyles.content}>
                <CardMedia component="img" className={cardStyles.media} src={props.image}/>
                <Typography variant="subtitle1" className={cardStyles.typography}>{props.desc}</Typography>
            </CardContent>
        </Card>
        )
    }

    return (
        <Grid container direction="column" justify="center" alignItems="flex-start" spacing={3}>
            <Grid item><Container><Point image={pythonLogo} desc='Highly Proficient in Python and Django'/></Container></Grid>
            <Grid item><Container><Point image={awsLogo} desc='Hands on experience with AWS'/></Container></Grid>
            <Grid item><Container><Point image={database} desc='I work with both, SQL and NoSQL databases'/></Container></Grid>
            <Grid item><Container><Point image={docker} desc='I like wearing multiple hats. 
            I can switch between dev and ops role when necessary '/></Container></Grid>
        </Grid>
    )
}



const About = props => {
    return (
        <div id='About'>
        <Box className='about'  borderTop={5} borderColor='#3f51b4'>
        <Box pt={10} pb={5}>
            <Grid container direction="column" alignItems="center" justify="center" spacing={3}><h1>About</h1></Grid>
        </Box>
        
        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
            <Grid item className='left-grid'><Container><LeftGridItems/></Container></Grid>
            <Grid item className='right-grid'><KeyPoints/></Grid>
        </Grid>
        <Box pt={10} pb={5}>
            <Grid container box direction="column" alignItems="center" justify="center" spacing={3}><h1>Tech</h1></Grid>
        </Box>
        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                <Grid item><Container><SkillBox skillSetName='Languages' skillSetItem={language_list} subskill={true}/></Container></Grid>
                <Grid item><Container><SkillBox skillSetName='Databases' skillSetItem={database_list} subskill={true}/></Container></Grid>
                <Grid item><Container><SkillBox skillSetName='Cloud/Ops' skillSetItem={ops_and_cloud_list} subskill={false}/></Container></Grid>
                <Grid item><Container><SkillBox skillSetName='Other Skills' skillSetItem={others_list} subskill={false}/></Container></Grid>
        </Grid>  
    </Box>
    </div>
    )
}

export { About }
