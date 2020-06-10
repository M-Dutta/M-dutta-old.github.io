import React from 'react';
import { NavBar } from './navBar/navBar'
import './header.css'   

const Logo = props => {
    return <img className='rounded float-left logo' src={require('./colorful-circle.png')}></img>
}

const Header = props => {

    return (
        <header id='header' className='container '>
                        <NavBar />

        </header>
    )   
}

export { Header }