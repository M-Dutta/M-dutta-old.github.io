import React from 'react'

const sectionHeaderStyle = {
    fontFamily: 'Monoton'
}

const secondarySectionHeaderStyle = {
    fontFamily: 'Cabin Sketch, curive'
}

const SectionHeader = props => {
    return (
    <div className='container'>
     <h1 className='row justify-content-center section-header mb-5' style={sectionHeaderStyle}>{props.children}</h1>
     </div>
    )
}

const SecondaryHeader = props => {
    return (
        <div className='container'>
            <h2 className='row justify-content-center secondary-section-header' style={secondarySectionHeaderStyle}>{props.children}</h2>
        </div>
    )
}

export { SectionHeader, SecondaryHeader }