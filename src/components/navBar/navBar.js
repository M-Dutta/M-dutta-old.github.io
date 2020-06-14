import React , {useState, useEffect} from'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { About } from '../pages/about/about';
import { Work } from '../pages/work/work';
import { Transition } from 'react-spring/renderprops';
const navList = [
    { name: 'About', url: '/about' },
    { name: 'Work', url: '/work' },
    { name: 'Site-Info', url: '/site-info' }
]

const baseDiv = document.body.childNodes[1]
const topLimit = 30

const NavBar = props => {
    const navItems = navList.map((data, index) => <li key={index + 1}><NavLink className='link' to={data.url}>{data.name}</NavLink></li>)
    
    const [background, setBackground] = useState('transparent') 
    useEffect(() => {
        const handleScroll = () => {
            if (baseDiv.scrollTop>30) setBackground('white')
            else setBackground('transparent')
        }
        document.body.childNodes[1].addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }, [])

    return (
        <nav className='navbar shadow-sm justify-content-center fixed-top rounded-bottom-1' style={{background: background, transition: 'background 500ms linear'}} >
            <ul className='nav-list'>
                {navItems}
            </ul>
        </nav>
    )
}

export { NavBar }