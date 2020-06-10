import React, { useState, useEffect } from 'react'
import './base.css'
import { About } from '../pages/about/about'

const Base = props => {

    const Intro = props => {

        return (
            <div className="container mt-5">
                    <div className="intro row justify-content-center">Hi!</div>
                    <div className="intro row justify-content-center">I'm Mishuk</div>
                </div>
        )
    }

    const [currentSection, setNewSection] = useState({ section: 'intro' });
    return (
        <div className='container base'>
                <Intro />
        </div>
    )
}

export { Base }