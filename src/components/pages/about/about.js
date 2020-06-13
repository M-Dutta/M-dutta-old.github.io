import React, { useState, useEffect } from 'react'
import './about.css'
import { SectionHeader, SecondaryHeader } from '../sectionHeader'
import { gapMaker } from '../../utils'
import { useSpring, useTransition, animated } from 'react-spring'
import { Base } from './base'

const intro_line_list = [`I'm a Full-Stack Software Engineer based in Atlanta, GA.`,
    'I like getting my hands dirty with a vast array of technology and prefer putting on several different.',
    'I also enjoy working on system architecture and design to build scaleable and efficient Micro-services.'
]

const highlight_list = [
    `Converted legacy User and API Authentication System for Web and IOS application to Oauth2.0 without breaking Compatibility`,
    `Implemented Just-In-Time (JIT) migration of 600,000+ users from 17,000+ single-tenant databases into a multi-tenant model.`,
    `Set up CI/CD pipelines using terraform that allows deployment of services in less than 5 minutes via AWS services.`,
    `Re-built legacy data-stream handlers to handle high volume using custom data structues and boosted peformance by 1500%`,
]

const tableHeaders = ['Languages', 'Frameworks', 'Databases and Storage', 'CloudOps', 'Others']
const language_list = ['Python', 'Java', 'C++', 'JavaScript']
const framework_list = ['Django', 'Spring Boot', 'React']
const database_list = ['MySQL', 'postgreSQL', 'CassandraDB (NoSQL)', 'DynamoDB (NoSQL)', 'MongoDB (NoSQL)', 'Redis']
const ops_and_cloud_list = ['AWS Services', 'GitLab CI', 'Terraform', 'Docker', 'Jenkins']
const others_list = ['Rest API', 'Micro-services', 'Jenkins', 'Agile', 'Scrum']


const noWrap = { whiteSpace: 'nowrap' }
const customListStyle = {
    listStyleType: 'circle',
    paddingLeft: '0'
}

const listMaker = (itemList, className, listStyle = {}, center = false) => {
    let items = itemList.map((data, index) => {
        return (
            <li key={(index).toString()}
                className={`${className}-items ${center?'row justify-content-center': ''} list-item ${(className === 'intro' && index === 0) ? 'mb-2' : ''}  
                ${className === 'highlight' ? 'mt-2' : ''}`}>{data}
            </li>
        )
    })
    const ul_style = !!Object.keys(listStyle).length ? '' : 'list-unstyled';
    return <ul className={`list-item ${ul_style}`} style={{ ...listStyle }}>{items}</ul>
}

const IntroBox = props => {
    return <div className='container intro-box'>{listMaker(intro_line_list, 'intro', {}, true)}</div>
}

const SkillBox = props => {

    return (
        <div className='container'>
        <div className=' table-responsive'>
            <table className='table table-sm table-bordered w-75 mx-auto w-auto'>
                <thead>
                    <tr>{tableHeaders.map((data, index) => <th key={(index + 1).toString()} scope="col" style={noWrap}>{data}</th>)}</tr>
                </thead>
                <tbody>
                    <tr>
                        <td key='languages' style={noWrap}>{listMaker(language_list, 'languages')}</td>
                        <td key='framework' style={noWrap}>{listMaker(framework_list, 'framework')}</td>
                        <td key='database' style={noWrap}>{listMaker(database_list, 'database')}</td>
                        <td key='ops' style={noWrap}>{listMaker(ops_and_cloud_list, 'ops')}</td>
                        <td key='others' style={noWrap}>{listMaker(others_list, 'others')}</td></tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}



const HighlightBox = props => {
    const parentProps = props
    const transitions = useTransition(null, props.show, {
        from: { opacity: 1, transform: `scale(0)`, transformOrigin: '0 0' },
        enter: { transition: `transform 0.2s linear`, opacity: 1, transform: `scale(1)` },
        leave: { opacity: 0 }
    })
    return transitions.map(({ item, key, animated_props }) =>
        <div className='container'>
        <animated.div className='container highlight-box w-75 pt-2 pr-1 '>
                {listMaker(highlight_list, 'highlight', customListStyle)}
        </animated.div>
        </div>
    )

}

const About = props => {
    const styleAbout = { fontWeight: '500' }
    const pageLoadAnimation = useSpring({ from: { opacity: 0 }, to: { transition: `1.5s ease-in`, opacity: 1 }, config: { duration: 1000 }, delay: 2400 })

    const [showHighlight, setShowHighlight] = useState({ hoverShow: false, permaShow: false });
    const displayHighlightState = showHighlight.hoverShow || showHighlight.permaShow

    return (
        <section className='about-wrapper' id='About' key='About'>
            {gapMaker(5)}
            <Base />
            <animated.div className='containter about pl-2 pr-1' style={{ ...styleAbout, ...pageLoadAnimation }}>
                {gapMaker(5)}
                <IntroBox />
                {gapMaker(5)}
                <SecondaryHeader>Tech I've worked with</SecondaryHeader>
                <SkillBox />
                {gapMaker(5)}
                <SecondaryHeader>Highlights</SecondaryHeader>
                <HighlightBox />
            </animated.div>
        </section>
    )
}
//

export { About }

// <button key='highlights' type="button" className={`btn btn-outline-secondary shadow-none ${displayHighlightState ? ' active' : ''}`} key='Highlights'
// onMouseEnter={() => setShowHighlight({ hoverShow: true, permaShow: showHighlight.permaShow })}
// onMouseLeave={() => setShowHighlight({ hoverShow: false, permaShow: showHighlight.permaShow })}
// onClick={() => setShowHighlight({ hoverShow: true, permaShow: !showHighlight.permaShow })}>Highlights</button>