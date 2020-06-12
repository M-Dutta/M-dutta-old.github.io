import React, { useState, useEffect } from 'react'
import './about.css'
import { SectionHeader, SecondaryHeader } from '../sectionHeader'
import { gapMaker } from '../../utils'
import { useSpring, useTransition, animated } from 'react-spring'

const intro_line_list = [`I'm a Full-Stack Software Engineer based in Atlanta, GA.`,
    'I like getting my hands dirty with a vast array of technology and prefer putting on several different hats and have an aptitude for solving architectural problems.'
]

const highlight_list = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
]

const tableHeaders = ['Languages', 'Frameworks', 'Databases and Storage', 'CloudOps', 'Others']
const language_list = ['Python', 'Java', 'C++', 'JavaScript']
const framework_list = ['Django', 'Spring Boot', 'React']
const database_list = ['MySQL', 'postgreSQL', 'CassandraDB (NoSQL)', 'DynamoDB (NoSQL)', 'MongoDB (NoSQL)', 'Redis']
const ops_and_cloud_list = ['AWS Services', 'GitLab CI', 'Terraform', 'Docker', 'Jenkins']
const others_list = ['Rest API', 'Micro-services', 'Jenkins', 'Agile', 'Scrum']



const listMaker = (itemList, className, unstyledList = true, listStyle = '') => {
    let items = itemList.map((data, index) => {
        return <li key={(index).toString()} className={`${className}-items list-item ${index !== 0 ? 'mt-3' : ''}`}>{data}</li>
    })
    listStyle = unstyledList ? 'list-unstyled' : listStyle
    return <ul className={listStyle}>{items}</ul>
}

const columnDataMaker = (itemList, className) => {
    let items = itemList.map((data, index) => {
        return <td key={(index).toString()} className={`${className}-items list-item ${index !== 0 ? 'mt-3' : ''}`}>{data}</td>
    })
    return <tr>{items}</tr>
}

const IntroBox = props => {
    return <div className={`container intro-box w-75 pl-0 ml-0`}>{listMaker(intro_line_list, 'intro')}</div>
}

const HighlightBox = props => {
    const transitions = useTransition(null, props.show, {
        from: { opacity: 1, transform: `scale(0)`, transformOrigin: '0 0' },
        enter: { transition: `transform 0.2s linear`, opacity: 1, transform: `scale(1)` },
        leave: { opacity: 0 }
    })
    return transitions.map(({ item, key, props }) =>
        <animated.div key={key} className='highlight-box-wrapper' style={props}>
            {gapMaker(5)}
            <div className={`container highlight-box w-75 pl-0 pt-2 ml-0 border border-secondary rounded`}>
                {listMaker(highlight_list, 'highlight', false)}
            </div>
        </animated.div>
    )

}

const SkillBox = props => {
    // <tr><th scope="col">Languages</th><th scope="col">Frameworks</th><th scope="col">Databases</th><th scope="col">Ops</th></tr>
    return (
        <div className='skill-box-wrapper push-animate'>
            <table className='table table-sm table-bordered w-75 pl-0 ml-0'>
                <thead>
                    <tr>{tableHeaders.map((data) => <th scope="col">{data}</th>)}</tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{listMaker(language_list, 'languages')}</td>
                        <td>{listMaker(framework_list, 'framework')}</td>
                        <td>{listMaker(database_list, 'database')}</td>
                        <td>{listMaker(ops_and_cloud_list, 'ops')}</td>
                        <td>{listMaker(others_list, 'framework')}</td></tr>
                </tbody>

            </table>
        </div>
    )
}

const About = props => {
    const pageLoadAnimation = useSpring({ from: { opacity: 0 }, to: { transition: `1.5s fade-in-out`, opacity: 1 } })
    // ${showHighlight?'btn-secondary':'btn-outline-secondary'}
    const [showHighlight, setShowHighlight] = useState({ hoverShow: false, permaShow: false });
    const displayHighlightState = showHighlight.hoverShow || showHighlight.permaShow

    const highlightBox = displayHighlightState && <HighlightBox />
    return (
        <animated.section className='containter justify-content-center about' style={pageLoadAnimation}>
            {gapMaker(10)}
            <SectionHeader name='About Me' />
            <IntroBox />
            <button key='highlights' type="button" className={`btn btn-outline-secondary shadow-none ${displayHighlightState ? ' active' : ''}`} key='Highlights'
                onMouseEnter={() => setShowHighlight({ hoverShow: true, permaShow: showHighlight.permaShow })}
                onMouseLeave={() => setShowHighlight({ hoverShow: false, permaShow: showHighlight.permaShow })}
                onClick={() => setShowHighlight({ hoverShow: true, permaShow: !showHighlight.permaShow })}>Highlights</button>
            {highlightBox}
            {gapMaker(5)}
            <SkillBox />
            {gapMaker(5)}
        </animated.section>
    )
}

export { About }