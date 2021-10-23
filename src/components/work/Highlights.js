import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Title, ContentPane } from '../common/sharedFunctions'


const HighlistList = [
    {
        point: "Security and OAuth2.0 Overhaul (Authentication and Authorization)",
        descList: ["Lead the conversion of Web and IOS applications’ User and Api Auth to OAuth2.0 by utilizing the Identity Provider Auth0."]
    },
    {
        point: "Microservices and SPAs",
        descList: [
            "Experienced with development of RESTful microservices using TDD principles (Python-Django, Java-SpringBoot etc).",
            "Developed several Single page applications (SPA's) using Node.js and React.",
            "I work with Both SQL and NoSQL databases (PostgreSQL, DynamoDB, Cassandra etc.).",
        ]
    },
    {
        point: "DevOps -- Service Discovery with attached loadbalancer",
        descList: [
            "Experieced in CI/CD automation and integration via Gitlab and Terraform.",
            "Experienced with various cloud deployment strategies",
            ["Deployed Single Page applications(SPAs) using AWS CloudFront, Route53 and S3.",
                "Deployed Severless Microservices using AWS Lamda, API-Gateway, DynamoDB etc.",
                "Deployed standard RESTful Microservices using dokcer, ECS, EC2 load-balancer, Route53 etc."],
            "Built out numerous critical core Infrastructure for engineering org to consume. Eg.",
            ["Service Discovery via Consul", "Server load balancing Infrastructure via Fabio."]
        ],
    },
    {
        point: "Integrations",
        descList: [
            "Experienced in working with third party payment processors.",
            "Experienced in integrating IOT platform(s) with with Web applications."
        ]
    }

]

const HiglightIterator = props => {
    let listItemCollector = [];

    for (const highlight of HighlistList) {
        listItemCollector.push(<HighlightPointMaker point={highlight.point} descList={highlight.descList} />)
    }
    return (
        listItemCollector)
}

const HighlightPointMaker = props => {
    const point = props.point
    const desc = props.descList.map((data, index) => {
        if (!Array.isArray(data))
            return <li>{data}</li>

        // If it's another array inside the array, make another sublist from the data
        let sublist = data.map((sublistItem, index) => (
            <li>{sublistItem}</li>
        ))
        return (<ul>{sublist}</ul>)

    })
    return (
        <ul>
            <li>
                <Typography variant='body1'>{point}</Typography>
                <ul>
                    <Typography variant='body1'>{desc}</Typography>
                </ul>
            </li>
        </ul>
    )
}

export const Highlights = props => {
    const useStyles = makeStyles({
        content: {
            backgroundColor: 'rgb(253 245 230 / 67%);',
            borderRadius: '1em',
            paddingLeft: 0
        }
    })

    const classes = useStyles()
    return (

        <section id="Highlights">
            <Grid container justify='center' alignItems='center'><Title title='Highlights' /></Grid>
            <ContentPane className={classes.content}>
                <HiglightIterator />
            </ContentPane>
        </section>

    )

}