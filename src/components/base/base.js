import React, { useState } from 'react'
import './base.css'
import { About } from '../pages/about/about'
import { useSpring, animated } from 'react-spring'
import { gapMaker } from '../utils'

const Base = props => {

    const Intro = props => {
        const animationTop = useSpring({from: { opacity: 0, transform: `translateY(-10%)` },
        to: { transform: `translate(0)`, transition: `0.5s linear`, opacity: 1 }
        })

        const animationBottom = useSpring({from: { opacity: 0, transform: `translateY(10%)` },
        to: { transform: `translate(0)`, transition: `0.5s linear`, transitionDelay:'0.5s', opacity: 1 }
        })
        return (
            <div className="container ">
                            {gapMaker(20)}
                    <animated.div className="intro row justify-content-center" style={animationTop}>Hi!</animated.div>
                    <animated.div className="intro row justify-content-center"  style={animationBottom}>I'm Mishuk</animated.div>
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