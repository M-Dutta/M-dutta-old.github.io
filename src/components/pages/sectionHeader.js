import React from 'react'

const sectionHeaderStyle = {
    fontFamily: 'Monoton'
}

const secondarySectionHeaderStyle = {
    fontFamily: 'Cabin Sketch, curive'
}

const SectionHeader = props => {
    console.log(props)
    return (
        <div className='container'>
            <h1 className='row justify-content-start section-header mb-5' style={sectionHeaderStyle}>{props.children}</h1>
        </div>
    )
}

const SecondaryHeader = props => {
    return (
        <div>
            <h2 className='row secondary-section-header'style={secondarySectionHeaderStyle}>{props.children}</h2>
        </div>
    )
}

export { SectionHeader, SecondaryHeader }