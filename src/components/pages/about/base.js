import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { gapMaker } from '../../utils'

const Base = props => {

    const styleName = {
        fontSize: '4em',
        fontFamily: 'Great Vibes, cursive'
    }

    const Name = props => {
        const animationTop = useSpring({from: { opacity: 0, transform: `translateY(-10%)` },
        to: { transform: `translate(0)`, transition: `0.5s linear`, opacity: 1 }
        })  
        const animationBottom = useSpring({from: { opacity: 0, transform: `translateY(10%)` },
        to: { transform: `translate(0)`, transition: `0.5s linear`, transitionDelay:'0.5s', opacity: 1 }
        })
        return (
            <div className="container ">
                    <animated.div className="row justify-content-start" style={{...styleName, ...animationTop}}>Hi!</animated.div>
                    <animated.div className="intro row justify-content-start"  style={{...styleName, ...animationBottom}}>I'm Mishuk</animated.div>
                </div>
        )
    }

    const [currentSection, setNewSection] = useState({ section: 'intro' });
    return (
        <div className='container base'>
                <Name />
        </div>
    )
}

export { Base }