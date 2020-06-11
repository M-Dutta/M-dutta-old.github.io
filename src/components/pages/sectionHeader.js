import React from 'react'

const sectionHeaderStyle = {
    fontFamily: 'Monoton'
}

const SectionHeader = props => {

    return (
        <div className='container'>
            <h1 className='row justify-content-start section-header mb-5' style={sectionHeaderStyle}>{props.name}</h1>
        </div>
    )
}

const SecondaryHeader = props => {
    return (
        <div className='container'>
            <h2 className='row justify-content-start secondary-section-header mb-5' style={sectionHeaderStyle}>{props.name}</h2>
        </div>
    )
}

export { SectionHeader, SecondaryHeader }