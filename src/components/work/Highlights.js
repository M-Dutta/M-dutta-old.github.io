import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Title, ContentPane } from '../common/sharedFunctions'


const HighlistList = [
    {
        point: "Security and OAuth2.0 Overhaul (Authentication and Authorization)",
        descList: ["Lead the conversion of Web and IOS applications’ User and Api Auth to OAuth2.0 by utilizing the Identity Provider Auth0."]
    },
    {
        point: "Microservices & Cloud Deployments",
        descList: ["Developed & deployed microservices using Node.js, React, Django, PostgreSQL, Datadog using AWS" +
            "(e.g., Lambda, API-Gateway, EC2 ALB, ECS, CloudFront, Route53, DynamoDB, S3) using TDD principles.",
            "Built out self-scaling serverless microservices using AWS serverless architecture (Lambda, Route53, DynamoDB, API-Gateway).",
        ]
    },
    {
        point: "DevOps -- Service Discovery with attached loadbalancer",
        descList: ["Built Service Discovery and load balancing Infrastructure using Hashicorp Consul and open-source Fabio."]
    },
    {
        point: "Integrations",
        descList: ["Payment Processors - Worked with WePay (Chase) to implement merchant payment terminal setup.",
            "Integrated Canopy IOT platform with with Web applications."
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
    const desc = props.descList.map((data, index) => (
        <li>{data}</li>
    ))
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
            borderRadius: '1em'
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